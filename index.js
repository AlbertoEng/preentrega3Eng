

let flag = false;

botonMenu.addEventListener('click', ( ev )=>{
    if(!flag){
        menu.style.display = 'block';
        menu.classList.add('menu_popup');
        flag = true;
        return;
    }
    menu.classList.remove( 'menu_popup' );
    menu.style.display = 'none';
    flag = false;

})