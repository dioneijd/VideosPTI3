let State = {
	groupers,
    curses,
    filterData: '',
    filteredCurses: curses,
	activeGrouper: {},
    // activeCtgId: 0,
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
        const textToFilter = filterData.toLowerCase()

        if (curse.title.toLowerCase().includes(textToFilter)){
            return true
        }

        if (curse.subTitle && curse.subTitle.toLowerCase().includes(textToFilter)){
            return true
        }

        if (curse.author && curse.author.toLowerCase().includes(textToFilter)){
            return true
        }

        if (curse.id && curse.id == textToFilter){
            return true
        }
        
        return false
    })
    return curses
}

function CheckCurseParamOnUrl(){
	var urlParams = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        urlParams[key] = value;
	});

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

