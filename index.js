const listImages = document.querySelector('.list-images');
const images = listImages.getElementsByTagName('img');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');


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

let handleEventChangeSlide = setInterval(handleChangeSlide, 3000);

btnLeft.addEventListener('click', function () {
    clearInterval(handleEventChangeSlide);
    if (current === 3) {
        current = 0;
    } else {
        current++;
    }
    let width = images[0].offsetWidth;
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000);
})

btnRight.addEventListener('click', function () {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000);
})