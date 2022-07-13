const fixedBtn = document.querySelector("#fixed-btn");
const moreBtn = document.querySelector(".moreinfo-button");
const moreInfo = document.querySelector(".more-info");
const sendInfo = document.querySelector(".send-button");


let activeIndex = 0;

fixedBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
  });

moreBtn.addEventListener('click', () => {
    moreInfo.classList.toggle('active')
    });

sendInfo.addEventListener('click', () => {
    alert("თქვენი ინფორმაცია გაიგზავნა");
    });






