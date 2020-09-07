let State = {
	groupers,
    curses,
    filterData: '',
    filteredCurses: curses,
	activeGrouper: {},
    activeCategory: {},
	activeCurse: {
        id: 0,
        active: false,
        title: '',
        subTitle: '',
        topics: [''],
        video: {
            url: 'Videos/',
            type: 'mp4'
        },
        author: '',
        lang: ['EN'],
        postedOn: 'yyyy-mm-dd'
    },
}



function setFilterData(filterData) {
    State.filterData = filterData
    const curses = FilterCurses(filterData)
    setFilteredCurses(curses)
}

function setFilteredCurses(curses){
    State.filteredCurses = curses

    DrawMenu()
    DrawAccordion()
}

function setActiveGrouper(grouperId) {
    const grouper = State.groupers.find(grp => grp.id == grouperId)
    
    if (grouper) {
        State.activeGrouper = grouper
        DrawMenu()
        DrawAccordion()
    }
}

function setActiveCategory(CtgId) {    
    const ctg = State.activeGrouper.categories.find(ctg => ctg.id == CtgId)
    
    if (ctg) {
        State.activeCategory = ctg
        //DrawAccordion()
    }
}

function setActiveCurse(CurseId) {
    const curse = State.curses.find(curse => curse.id == CurseId)
    
    if (curse) {
        State.activeCurse = curse
        DrawCurseContent()
    }
}


function Initial(){

    CheckCurseParamOnUrl()

    if (!State.activeGrouper.id) {
        setActiveGrouper(1)
    }

    if (State.activeCategory.id) {
        setActiveCategory(1)
    }

}



function FilterCurses(filterData) {
    const curses = State.curses.filter(curse => {
        let textToFilter = ReplaceSpecialChar(filterData.toLowerCase())

        if (ReplaceSpecialChar(curse.title.toLowerCase()).includes(textToFilter)){
            return true
        }

        if (curse.subTitle && ReplaceSpecialChar(curse.subTitle.toLowerCase()).includes(textToFilter)){
            return true
        }

        if (curse.author && ReplaceSpecialChar(curse.author.toLowerCase()).includes(textToFilter)){
            return true
        }

        if (curse.id && curse.id == textToFilter){
            return true
        }
		
        if (curse.video.url && curse.video.url.toLowerCase().includes(textToFilter)){
            return true
        }

        if (curse.topics) {
            const res = curse.topics.find( topic => ReplaceSpecialChar(topic.toLowerCase()).includes(textToFilter))
            if (res) return true
        }
        
        if (curse.processTree) {
            const res = curse.processTree.find( process => ReplaceSpecialChar(process.toLowerCase()).includes(textToFilter))
            if (res) return true
        }
        
        return false
    })
    return curses
}

function CheckCurseParamOnUrl(){
	var urlParams = {}
    
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        urlParams[key] = value;
	})

    if (urlParams.grpId) {
        setActiveGrouper(urlParams.grpId)
    }

    if (urlParams.ctgId) {
        setActiveCategory(urlParams.ctgId)
    }

    if (urlParams.curseId) {
        setActiveCurse(urlParams.curseId)
    }
    
}

function GetCurseUrl(){
    let params = `grpId=${State.activeGrouper.id}&ctgId=${State.activeCategory.id}&curseId=${State.activeCurse.id}`    
    
    return `${document.location.origin}${document.location.pathname}?${params}`
}

function CopyTextToClipboard(text){	
	const el = document.createElement('textarea');
	el.value = text;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
}

function CopyCurseLink(){
    const curseUrl = GetCurseUrl()
    
    if (curseUrl) {
        CopyTextToClipboard(curseUrl)
        ShowAlert({message: 'Link was copied'})
    } else {
        ShowAlert({message: 'ERROR: it was not possible to create the link', msgType:'E'})
    }
}

function ReplaceSpecialChar(text){
    let newText = text

    newText = newText.replace('ç', 'c')
    newText = newText.replace('ã', 'a')
    newText = newText.replace('õ', 'o')
    newText = newText.replace('ñ', 'n')
    newText = newText.replace('à', 'a')
    newText = newText.replace('è', 'e')
    newText = newText.replace('ì', 'i')
    newText = newText.replace('ò', 'o')
    newText = newText.replace('ù', 'u')
    newText = newText.replace('á', 'a')
    newText = newText.replace('é', 'e')
    newText = newText.replace('í', 'i')
    newText = newText.replace('ó', 'o')
    newText = newText.replace('ú', 'u')
    newText = newText.replace('ü', 'u')

    return newText

}

function ShowCurseDetails() {
    const curse = State.activeCurse
    
    let text = `    
        ID: ${curse.id}
        </br>
        Title: ${curse.title}
        </br>
    `

    ShowAlert({message: JSON.stringify(curse, undefined, 4)})

}