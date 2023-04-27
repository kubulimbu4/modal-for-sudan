const modal= document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');
const closeModal2 = document.querySelector('.close-button2');


openModal.addEventListener('click', () => {
  modal.showModal();
})
closeModal.addEventListener('click', () => {
  modal.close();
})
closeModal2.addEventListener('click', () => {
  modal.close();
})