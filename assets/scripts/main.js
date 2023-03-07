'use strict'
const rightArrow  = document.querySelector(".home .container .products-slide .right-arrow");
const leftArrow  = document.querySelector(".home .container .products-slide .left-arrow");
const rightShape = document.querySelector(".home .container .products-slide .right-shape")
const leftShape = document.querySelector(".home .container .products-slide .left-shape")
const locationWindow = document.getElementsByClassName("location-window")[0]
let chooseCountry = document.getElementsByClassName("deliver-to")[0]
let i = 1;
let leftLength = 0;
function goLeft() {
    if (i < 7) {
    i++   
    leftLength += 100;
    const images = document.querySelector(`.home .container .products-slide .image-slide img:nth-child(${i})`)
    const previousImage = document.querySelector(`.home .container .products-slide .image-slide img:nth-child(${i-1})`)
    const lines = document.querySelector(`.home .container .products-slide .lines .line:nth-child(${i})`)
    const previousLine = document.querySelector(`.home .container .products-slide .lines .line:nth-child(${i-1})`)
    images.style.transform = `translateX(${leftLength}%)`
    images.classList.add("transition")
    previousImage.style.visibility = "hidden"
    lines.classList.add("active")
    previousLine.classList.remove("active")
    }
}    
function goRight() {
if(i >= 2) {
    leftLength -= 100
    const images = document.querySelector(`.home .container .products-slide .image-slide img:nth-child(${i})`)
    const lines = document.querySelector(`.home .container .products-slide .lines .line:nth-child(${i-1})`)
    const previousLine = document.querySelector(`.home .container .products-slide .lines .line:nth-child(${i})`)
    images.style.transform = `translateX(${-leftLength}%)`
    lines.classList.add("active")
    previousLine.classList.remove("active")
    const previousImage = document.querySelector(`.home .container .products-slide .image-slide img:nth-child(${i-1})`)
    previousImage.style.visibility = "visible"
    i--
}

}
    rightArrow.addEventListener("click",goLeft);
    leftArrow.addEventListener("click",goRight);

    rightArrow.onmouseenter = function() {
        rightShape.style.width = "20%"
        rightArrow.style.right = "0"
        rightArrow.style.backgroundColor = "#fff"

    }

    rightArrow.onmouseout = function() {
        rightShape.style.width = "5%"
        rightArrow.style.right = "2%"
        rightArrow.style.backgroundColor = "rgba(255, 255, 255, 0.474)"
    }

    leftArrow.onmouseenter = function() {
        leftShape.style.width = "20%"
        leftArrow.style.left = "0"
        leftArrow.style.backgroundColor = "#fff"

    }

    leftArrow.onmouseout = function() {
        leftShape.style.width = "5%"
        leftArrow.style.left = "2%"
        leftArrow.style.backgroundColor = "rgba(255, 255, 255, 0.474)"
    }
    chooseCountry.onclick = function() {
        locationWindow.style.visibility = "visible";
    }
    document.body.addEventListener("click",function(e) {
        if(e.target != chooseCountry) {
            locationWindow.style.visibility = "hidden"
        }
    })