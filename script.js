let slider = document.querySelector(".slider");
const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn')

nextBtn.onclick = () => {
    slider.append(slider.querySelector('div:first-child'));
}

previousBtn.onclick = () => {
    slider.prepend(slider.querySelector('div:last-child'));
}

// console.log(slider)