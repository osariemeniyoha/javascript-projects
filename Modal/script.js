'use strict';''
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal')

const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i<btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener
('click', openModal)


// for (let i = 0; i<btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener
// ('click', function(){
//     modal.classList.remove('hidden')
//     overlay.classList.remove('hidden')
// })



btnClosedModal.addEventListener
('click', closeModal)



// btnClosedModal.addEventListener
// ('click', function(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// })


overlay.addEventListener
('click', closeModal)

// overlay.addEventListener
// ('click', function(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// })

document.addEventListener('keydown', function(event){
    console.log(event.key)
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
       closeModal()
    }
})

