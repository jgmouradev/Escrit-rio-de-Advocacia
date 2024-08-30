const slideLeft = document.querySelector('.slide.left');
const slideRight = document.querySelector('.slide.right');
const img = document.querySelectorAll('.carousel_img')
slideLeft.addEventListener('click', side_slide)
slideRight.addEventListener('click', side_slide)

addBtnSliders(img)
//autoslide(5000)

function addBtnSliders(img) {

    for (let i = 0; i < img.length; i++) {
        let carousel = img[i].parentElement.parentElement
        let btnSliderDiv = carousel.querySelector('.btn-sliders')
        const span = document.createElement('span')
        span.classList.add('sliderBox')
        span.dataset.index = i;
        btnSliderDiv.append(span)
        span.addEventListener('click', btm_slider)
        if (i == 0) {
            span.style.background = 'white'
        }
    }
}

function btm_slider(e) {
    let carousel = e.target.closest("[data-carousel]")
    const carouselImg = carousel.querySelector('[data-images]')
    const activeImg = carousel.querySelector('[data-active]')
    let indexValue = [...carouselImg.children].indexOf(activeImg)
    let newIndex = e.target.dataset.index
    showImage(carousel, indexValue, newIndex)
}

function side_slide(e) {
    let carousel = e.target.closest("[data-carousel]")
    const carouselImg = carousel.querySelector('[data-images]')
    const activeImg = carousel.querySelector('[data-active]')
    let indexValue = [...carouselImg.children].indexOf(activeImg)
    let newIndex;
    const direction = e.target.dataset.slider;
    const imgLength = carouselImg.children.length
    if (direction === 'right') {
        newIndex = indexValue + 1;
        newIndex >= imgLength ? newIndex = 0 : newIndex
    } else {
        newIndex = indexValue - 1;
        newIndex < 0 ? newIndex = imgLength-1 : newIndex
    }
    showImage(carousel, indexValue, newIndex)
}


function showImage(carousel, indexValue, newIndex) {
    const slider = carousel.querySelectorAll('.btn-sliders span')
    const carouselImg = carousel.querySelector('[data-images]')
    delete carouselImg.children[indexValue].dataset.active
    carouselImg.children[newIndex].dataset.active = true
    slider[newIndex].style.background = 'white'
    slider[indexValue].style.background = 'none'
}