const upBottom = document.querySelector('.up-button')
const DownBottom = document.querySelector('.down-button')
const sideBar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount=mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0
sideBar.style.top = `-${(slidesCount -1 )*100}vh`

upBottom.addEventListener('click',()=> {
    changeSlide('up')
})

DownBottom.addEventListener('click',()=> {
    changeSlide('down')

})

document.addEventListener('keydown',() =>{
    if (event.key=== 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide (direction)
{
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if(direction==='down')
    {
        activeSlideIndex--
        if(activeSlideIndex < 0)
        {
            activeSlideIndex = slidesCount -1
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform= `translateY(-${activeSlideIndex*height}px)`

    sideBar.style.transform= `translateY(${activeSlideIndex*height}px)`


}
