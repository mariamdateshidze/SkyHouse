const fixedBtn = document.querySelector("#fixed-btn");
const moreBtn = document.querySelector(".moreinfo-button");
const moreInfo = document.querySelector(".more-info");
const sendInfo = document.querySelector(".send-button");


const form = document.querySelector('.form-box');
const emailInput = document.querySelector('input[name="email"]');
const mobileInput = document.querySelector('input[name="mobile_number"]');

const myModal = document.querySelector('.modal');
const content = document.querySelector('.main-cont')

const modalbtn = document.querySelector('.sendbut')
const audio = document.getElementById('audio');


let myInterval=null;
let activeIndex = 0;

setTimeout(
	function(){
        openModal();
    }
  ,6000 
);
  
function openModal(){
    myModal.classList.add('visible');
    content.classList.add('blured')
}

const closeBtn = document.querySelector('.modal-close');

closeBtn.addEventListener('click', () => {
    myModal.classList.remove('visible');
    content.classList.remove('blured')
    });

modalbtn.addEventListener('click', () => {
    playAudio();
    alert("თქვენ გამოიწერეთ გვერდი")
    myModal.classList.remove('visible');
    content.classList.remove('blured')
    });

function playAudio()  {
  audio.play();
}

//   form
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
            playAudio();
            alert("თქვენი ინფორმაცია გაგზავნილია")
            form.reset();
        }
    });



// 
fixedBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
    
  });

moreBtn.addEventListener('click', () => {
    moreInfo.classList.toggle('active')
    });







