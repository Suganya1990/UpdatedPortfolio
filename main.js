function showSidebar(){

    let sidebar = document.querySelector('.nav__wrapper-links')
    sidebar.style.display='flex';

    showIcon('.nav__link-close')
    hideIcon('.nav__link-menu')

}

function hideSidebar(){

  
     let sidebar = document.querySelector('.nav__wrapper-links')
    sidebar.style.display='none';
    hideIcon(".nav__link-close")
    showIcon('.nav__link-menu')

}


function hideIcon(classSelector){
    let icon = document.querySelector(classSelector)
    icon.style.display = 'none'
}
function showIcon(classSelector, attribute="flex"){
    let icon = document.querySelector(classSelector)
    icon.style.display = attribute
}
