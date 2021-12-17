(() => {
  const navBtnRef = document.querySelector('[data-nav-button]');
  const mobilemenuRef = document.querySelector('[data-menu]');

  navBtnRef.addEventListener('click', () => {
    const expanded =
      navBtnRef.getAttribute("aria-expanded") === "true" || false;
  
    navBtnRef.classList.toggle('is-open');
    navBtnRef.setAttribute("aria-expanded", !expanded);

    mobilemenuRef.classList.toggle('is-open');

});
})();
