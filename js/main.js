const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    //breakpoints:{
        //320:{
            //slidesPerView: 1,
        //}
    //}
  });

  const modalWindow = document.querySelector('.modal');
  const buttonModal= document.querySelector('.main-display_button');

  buttonModal.addEventListener('click', () => {
      modalWindow.classList.add('active');
  });

  modalWindow.addEventListener('click', (e) => {
      const isModal = e.target.closest('.modal_inner');
      if (!isModal){
        modalWindow.classList.remove('active');
      }
  })