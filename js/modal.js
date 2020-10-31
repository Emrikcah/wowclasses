const open = document.querySelector('[data-open-btn]');
const close = document.querySelector('[data-close-btn]');
const modal = document.querySelector('[data-modal]');


open.addEventListener('click',()=>{
  modal.classList.toggle('show');
  
})

close.addEventListener('click',()=>{
   modal.classList.toggle('show');
   
})