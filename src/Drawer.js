const docElements = {}



function DrawAccordion(){
	const accordion = document.getElementById('accordion')

	accordion.innerHTML = ''
	
	State.activeGrouper.categories.forEach(ctg => {

		const ctgId = `ctg_${ctg.id}`
		const toShow = State.activeCategory.id == ctg.id ? 'show' : ''
		
		accordion.innerHTML += (
			`<div id="${ctgId}">
				<div class="category-header" id="heading_${ctgId}" data-toggle="collapse" onClick="setActiveCategory(${ctg.id})" data-target="#collapse_${ctgId}" aria-expanded="true" aria-controls="collapse_${ctgId}">
					<div class="category-desc">${ctg.desc}</div>
					<div>
						<span class="badge badge-pill badge-primary"></span>
					</div>
				</div>

				<div id="collapse_${ctgId}" class="collapse " aria-labelledby="heading_${ctgId}" data-parent="#accordion">
					<ul class="nav flex-column list-group-flush" id="ul_${ctgId}">
					</ul>
				</div>
			</div>`
		)

		let curseCounter = 0
		const curseUl = document.getElementById(`ul_${ctgId}`)

		ctg.curseIds.forEach((curseId) => {
			const curse = State.filteredCurses.find(curse => curse.id == curseId)

			if (curse) {
				curseCounter += 1				
				curseUl.innerHTML += `<li class="nav-item list-group-item" onClick="setActiveCurse(${curse.id})">${curse.title}</li>`
			}
		})


		if (curseCounter > 0){			
			const curseBadge = document.querySelector(`#heading_${ctgId} .badge`)
			curseBadge.innerText = curseCounter
		} else {
			const ctgDesc	 = document.querySelector(`#heading_${ctgId} .category-desc`)
			ctgDesc.classList.add('disable')
		}



	})

}


function DrawMenu(){
	const menu = document.getElementById('menuGroups')
	menu.innerHTML = ''
	
	State.groupers.forEach((grp) => {
		menu.innerHTML += `
			<button id="btn_grp_${grp.id}" class="btn ${grp.id == State.activeGrouper.id ? 'active' : '' }" onclick="setActiveGrouper(${grp.id})">
				${grp.desc}
			</button>
		`

		let curseCounter = 0
		const grpButton = document.getElementById(`btn_grp_${grp.id}`)

		grp.categories.forEach((ctg) => {

			ctg.curseIds.forEach(curseId => {				
				if (State.filteredCurses.find(curse => curse.id == curseId ? 1 : 0)) {
					curseCounter += 1
				}
			})
		})

		if (curseCounter > 0 && State.filterData != '' ) {
			grpButton.innerHTML += `<a class="badge badge-pill badge-primary">${curseCounter}</a>`
		}

	})

}



function DrawCurseContent(){
	const curse = State.activeCurse
	const curseBox = document.getElementById('curseBox')
	const curseTitle = document.getElementById('curseTitle')
	const curseSubTitle = document.getElementById('curseSubTitle')
	const curseVideo = document.getElementById('curseVideo')
	const curseAuthor = document.getElementById('curseAuthor')
	const curseDate = document.getElementById('curseDate')
	const curseTopics = document.getElementById('curseTopics')

	

	curseBox.removeAttribute("hidden")
	curseTitle.innerText = curse.title ? curse.title : ''
	curseSubTitle.innerText = curse.subTitle ? curse.subTitle : ''

	curseAuthor.innerText = curse.author ? curse.author : ''
	curseDate.innerText = curse.postedOn ? curse.postedOn : ''

	
	curseTopics.innerHTML = ''
	if (curse.topics) {
		curse.topics.forEach((topic) => {
			curseTopics.innerHTML += `<li>${topic}</li>`
		})
	}


	curseVideo.innerHTML = ''

	if (curse.video.type == 'mp4'){	
		curseVideo.innerHTML = `
			<video class='video' controls autoplay>
			<source src="${curse.video.url}" type="video/mp4">
			</video>
		`
	}
	if (curse.video.type == 'youtube' ){	
		curseVideo.innerHTML = `
		<iframe 
			src="${curse.video.url}"
			class="embed-responsive-item"
			frameborder="0" 
			allow="autoplay; 
			encrypted-media" 
			allowfullscreen>
		</iframe>
		`
	}
	if (curse.video.type == 'swf')
	{
		curseVideo.innerHTML = `
			<object class='video' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' id='csSWF'> 
				<param name='movie' value='${curse.video.url}' /> 
				<param name='quality' value='best' /> 
				<param name='bgcolor' value='#e6e6e6' /> 
				<param name='allowfullscreen' value='true' /> 
				<param name='scale' value='showall' /> 
				<param name='allowscriptaccess' value='always' /> 
				<param name='flashvars' value='autostart=true&showstartscreen=false&showendscreen=false&color=0x1A1A1A,0x1A1A1A' />
				<!--[if !IE]>--> 
				<object class='video' type='application/x-shockwave-flash' data='${curse.video.url}' >
					<param name='quality' value='best' /> 
					<param name='bgcolor' value='#e6e6e6' /> 
					<param name='allowfullscreen' value='true' /> 
					<param name='scale' value='showall' /> 
					<param name='allowscriptaccess' value='always' /> 
					<param name='flashvars' value='autostart=true&showstartscreen=false&showendscreen=false&color=0x1A1A1A,0x1A1A1A' />
				<!--<![endif]--> 
					<div id='noUpdate'> 
						<p>If you are using a browser with JavaScript disabled please enable it now. Otherwise, please update your version of the free Adobe Flash Player by <a href='http://www.adobe.com/go/getflashplayer'>downloading here</a>. </p>
					</div> 
				<!--[if !IE]>-->
				</object>
				<!--<![endif]-->
			</object>
		`		
	}



}



function ShowAlert(msgObj){
	const {message, time, msgType } = msgObj

	const alertMessage = document.getElementById('alertMessage')

	let alertClass = 'alert-primary'
	if (msgType == 'E') {
		alertClass = 'alert-danger'
	} else if (msgType == 'W') {
		alertClass = 'alert-warning'
	} 

	
	alertMessage.innerHTML += `
		<div class="alert ${alertClass} alert-dismissible fade show" role="alert">
			<strong>${message}</strong>
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	`
	
	setTimeout(function() {
		$('.alert').alert('close')
	}, time ? time : 5000 )
}

