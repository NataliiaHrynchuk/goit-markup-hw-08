(() => {
  const refs = {
    openNavBtn: document.querySelector('.nav__open'),
    closeNavBtn: document.querySelector('.nav__close'),
    modal: document.querySelector('.nav__container'),
  };

  refs.openNavBtn.addEventListener('click', toggleNav);
  refs.closeNavBtn.addEventListener('click', toggleNav);

  function toggleNav() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
