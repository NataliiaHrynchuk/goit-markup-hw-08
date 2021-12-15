(() => {
  const navBtnRef = document.querySelector('[data-nav-button]');

navBtnRef.addEventListener('click', () => {
  
 navBtnRef.classList.toggle('is-open');
});
})();
