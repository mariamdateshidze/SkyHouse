const sendInfoSecond = document.querySelector("#secondsend");
const fixedBtn = document.querySelector("#fixed-btn");

const sendInfo = document.querySelector(".send-button");

const rectangles = document.querySelectorAll('.rectangle2');
const services = document.querySelectorAll('.single-serv-box');

const slideItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('#prev-slide-btn');
const nextBtn = document.querySelector('#next-slide-btn');

const form = document.querySelector('.form-box');
const emailInput = document.querySelector('input[name="email"]');
const mobileInput = document.querySelector('input[name="mobile_number"]');

let myInterval=null;
let activeIndex = 0;

// slider
initSlider();
function initSlider(){
    renderSliders();
    startAutoSliding();

}

function startAutoSliding(){
    myInterval = setInterval(showNextSlide, 3000);
  }

function renderSliders() {
    slideItems.forEach((item, i) => {
      if(activeIndex === i){
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    })
  }

function showNextSlide() {
activeIndex = activeIndex + 1;
if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
}
renderSliders();
}

function showPrevSlide(){
    activeIndex = activeIndex - 1;
    if(activeIndex < 0){
      activeIndex = slideItems.length - 1;
    }
    renderSliders();
  }


prevBtn.addEventListener('click', () => {
   showPrevSlide();
});

nextBtn.addEventListener('click', () => {
    showNextSlide();
 });


fixedBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
  });





// rects
rectangles.forEach((rectangle ,rectanglesindex) => {
    rectangle.addEventListener('click', () => {
        handleRecClick(rectanglesindex);
        
    });
});

function sliderButtons() {
    services.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');

    } else {
      item.classList.remove('active');
    }
  })

  rectangles.forEach((item, i) => {
    if(activeIndex === i){
      item.classList.add('active');

    } else {
      item.classList.remove('active');
    }
  })
}

function handleRecClick(nextIndex){
  activeIndex = nextIndex;
  sliderButtons();

}

// form
form.addEventListener('submit', e => {
    e.preventDefault();
    try {
      console.log(emailInput.value);
    } catch (e) {
      console.log('catch error', e);
    }
    const isEmailValid = validateEmail();
    const isMobilenumberValid = validateMobilenumber();
    if(isEmailValid  && isMobilenumberValid  ){
  
    }
  });
  
  function validateEmail(){
    if(!emailInput.value){
      emailInput.classList.add('has-error');
      emailInput.parentNode.querySelector('.error-message').innerText = 'Please enter email';
      return false;
    }
    if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
      emailInput.classList.add('has-error');
      emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
      return false;
    }
    emailInput.classList.remove('has-error');
    emailInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
  }
  
    function validateMobilenumber(){
      if(!mobileInput.value){
          mobileInput.classList.add('has-error');
          mobileInput.parentNode.querySelector('.error-message').innerText = 'Please enter mobile number';
        return false;
      }
      if(mobileInput.value.length !==9 ){
         
          mobileInput.classList.add('has-error');
          mobileInput.parentNode.querySelector('.error-message').innerText = 'Mobile number must include 9 digit';
        return false;
      }
      mobileInput.classList.remove('has-error');
      mobileInput.parentNode.querySelector('.error-message').innerText = '';
      return true;
}

    sendInfo.addEventListener('click', () => {
        if(validateEmail() && validateMobilenumber() ){
            alert("თქვენი ინფორმაცია გაგზავნილია")
            form.reset();
        }
    });
