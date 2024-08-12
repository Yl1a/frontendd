
const openModal = document.querySelector('.create_btn');

modal = document.querySelector(".modal_body");
close = document.querySelector(".modal");

openModal.addEventListener('click', ()=>{
    modal.classList.add('active')
    console.log(234234)
})

/* close.addEventListener('click', ()=>{
    modal.classList.remove('active')
}) */

document.querySelector('.acc').onclick = function(event){
    console.log(event);
    event.target.nextElementSibling.classList.toggle('active')
}





        