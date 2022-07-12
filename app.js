const fixedBtn = document.querySelector("#fixed-btn");

fixedBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
  })