'use strict'

const btn  = document.querySelector('.btn')
const mainCon = document.querySelector('.main__con')
const sideCon = document.querySelector('.side__con')
const number = document.querySelector('#number')
const circleCheck = document.querySelectorAll('.circle__check')
let check = 0
btn.addEventListener('click', function(){
mainCon.classList.add('hidden')
sideCon.classList.remove('hidden')
number.textContent = check
})

circleCheck.forEach(el =>{
    el.addEventListener('click', function(){
        el.style.color = 'white'
        el.style.backgroundColor = 'var(--MediumGrey)'
        check = el.textContent
        console.log(el.textContent);
    })
})