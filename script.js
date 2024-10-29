const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('list-items')
menuList.style.visibility = 'hidden';
// console.log(menuList.style.visibility)

menuBtn.onclick = () => {
    if(menuList.style.visibility == 'hidden'){
        menuList.style.visibility = 'visible';
        // console.log(menuList.style.visibility)
    }else{
        menuList.style.visibility = 'hidden';
    }
}

let slider = document.querySelector(".slider");
const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn')

nextBtn.onclick = () => {
    slider.append(slider.querySelector('div:first-child'));
}

previousBtn.onclick = () => {
    slider.prepend(slider.querySelector('div:last-child'));
}
