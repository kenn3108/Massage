const listImages = document.querySelector('.list-images');
const images = listImages.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const arrowUp = document.querySelector('.arrow-up');
const exitBtn = document.querySelector('#menu .entry .exit');
const menuModal = document.querySelector('#menu');
const menuBtn = document.querySelector('.menuBtn');

exitBtn.addEventListener('click', function () {
    menuModal.style.display = 'none';
})

menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menuModal.style.display = 'block';
})

document.addEventListener('click', function (e) {
    if ((!menuModal.contains(e.target) && menuModal.style.display === 'block')) {
        menuModal.style.display = 'none';
    }
})

let current = 0;

const handleChangeSlide = () => {
    if (current === 3) {
        current = 0;
    } else {
        current++;
    }
    let width = images[0].offsetWidth;
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
}

let handleEventChangeSlide = setInterval(handleChangeSlide, 1000);

btnLeft.addEventListener('click', function () {
    clearInterval(handleEventChangeSlide);
    if (current === 3) {
        current = 0;
    } else {
        current++;
    }
    let width = images[0].offsetWidth;
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
    handleEventChangeSlide = setInterval(handleChangeSlide, 1000);
})

btnRight.addEventListener('click', function () {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 1000);
})

// window.addEventListener('scroll', function () {
//     const left = document.querySelectorAll('#about .row .left');
//     const right = document.querySelectorAll('#about .row .right');
//     if (window.scrollY >= 700 && window.scrollY <= 950) {
//         left[0].style.animation = `scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
//         right[0].style.animation = `scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
//     } else if (window.scrollY >= 760 && window.scrollY <= 800) {
//         left[1].style.animation = `scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
//         right[1].style.animation = `scale-in-hor-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`;
//     } else {
//         left.forEach(item => {
//             item.style.animation = 'none';
//         })
//         right.forEach(item => {
//             item.style.animation = 'none';
//         })
//     }
// })

window.addEventListener('scroll', function () {
    if (window.scrollY >= 1000) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
})

arrowUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})