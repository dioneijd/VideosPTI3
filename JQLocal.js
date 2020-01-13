
$(function () {
	DrawAccordion(curses)
	CheckCurseParamOnUrl()
});




function FilterCurses(curses, filterData){
	return curses.filter(curse => {
		filterData.toLowerCase()

		if (curse.titulo.toLowerCase().includes(filterData)){
			return true
		}
		return false
	})
}





function DrawAccordion(curses){
	const accordion = document.getElementById('accordion')

	accordion.innerHTML = ''

	cursesGroups.forEach(grp => {
		accordion.innerHTML += `<h2 id="grpH2_${grp.id}">${grp.desc.toUpperCase()}</h2>`
		accordion.innerHTML += `<div><ul id='grpUl_${grp.id}' class='T2'></ul></div>`
		grp.count = 0		
	})

	curses.forEach((curse, id) => {
		const grpCurse = document.getElementById(`grpUl_${curse.curseGrpId}`)

		if (grpCurse != null && curse.active){
			//const curseUrl = GetCurseUrl(curse.id)
			//connsole.log(curse.id)
			//console.log(curseUrl)
			grpCurse.innerHTML += `<li onClick='LoadCursePanel(GetCurseById(${curse.id}))'>${curse.titulo}</li>`

			cursesGroups.find(grp => grp.id == curse.curseGrpId).count += 1
			//grpCurse.innerHTML += `<li onClick="window.location='${curseUrl}'">${curse.titulo}</li>`
		}
	})
	
	cursesGroups.forEach(grp => {
		if (grp.count != 0){
			const h2 = document.getElementById(`grpH2_${grp.id}`)
			h2.innerHTML += `<span class="bagNumCurses">${grp.count}</span>`
		}
	})

	$("#accordion").accordion({
		heightStyle: "content",
		collapsible: true
	})   

	$( "#accordion").accordion("refresh")

}



function CheckCurseParamOnUrl(){
	var urlParams = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        urlParams[key] = value;
	});

	if(urlParams.id){
		const curse = GetCurseById(urlParams.id)

		if (curse){
			LoadCursePanel(curse)
		}
	}

}

function GetCurseUrl(curseId){
	return `${document.location.origin}${document.location.pathname}?id=${curseId}`	
}

function CopyTextToClipboard(text){	
	const el = document.createElement('textarea');
	el.value = text;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

function ClearCursePanel() {
	$("#titulo").text("");
	$("#subTitulo").text("");	
	$(".video").remove();
	$("#listagem li").remove();	
}

function GetCurseById(curseId){
	return curses.find(curse => curse.id == curseId)
}

function LoadCursePanel(curse){
	ClearCursePanel();

	console.log(curse)

	$("#linkImg").click(() => {
		const curseUrl = GetCurseUrl(curse.id)
		CopyTextToClipboard(curseUrl)
	})

	$("#titulo").text(curse.titulo);
	$("#subTitulo").text(curse.subTitle);		
	
	for (topico in curse.topicos){
		$("#listagem").append(`<li>${curse.topicos[topico]}</li>`);
	}

	if (curse.video.type == 'swf')
	{
		$("#media").prepend(
			"<object class='video' classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' id='csSWF'> " +
				"<param name='movie' value='" + curse.video.url + "' /> " +
				"<param name='quality' value='best' /> " +
				"<param name='bgcolor' value='#e6e6e6' /> " +
				"<param name='allowfullscreen' value='true' /> " +
				"<param name='scale' value='showall' /> " +
				"<param name='allowscriptaccess' value='always' /> " +
				"<param name='flashvars' value='autostart=true&showstartscreen=false&showendscreen=false&color=0x1A1A1A,0x1A1A1A' /> " +
				"<!--[if !IE]>--> " +
				"<object class='video' type='application/x-shockwave-flash' data='" + curse.video.url + "' > " +
					"<param name='quality' value='best' /> " +
					"<param name='bgcolor' value='#e6e6e6' /> " +
					"<param name='allowfullscreen' value='true' /> " +
					"<param name='scale' value='showall' /> " +
					"<param name='allowscriptaccess' value='always' /> " +
					"<param name='flashvars' value='autostart=true&showstartscreen=false&showendscreen=false&color=0x1A1A1A,0x1A1A1A' /> " +
				"<!--<![endif]--> " +
					"<div id='noUpdate'> " +
						"<p>If you are using a browser with JavaScript disabled please enable it now. Otherwise, please update your version of the free Adobe Flash Player by <a href='http://www.adobe.com/go/getflashplayer'>downloading here</a>. </p> " +
					"</div> " +
				"<!--[if !IE]>--> " +
				"</object> " +
				"<!--<![endif]--> " +
			"</object>"
		);
	}
	if (curse.video.type == 'mp4'){		
		$("#media").prepend(
			`<video class='video' controls autoplay>
			<source src="${curse.video.url}" type="video/mp4">
			</video>`
		)
	}
	if (curse.video.type == 'youtube'){		
		$("#media").prepend(
			`<iframe 
				src="${curse.video.url}"
				frameborder="0" 
				allow="autoplay; 
				encrypted-media" 
				allowfullscreen>
			</iframe>`
		)
	}
}	

