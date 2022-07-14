const fixedBtn = document.querySelector("#fixed-btn");
const moreBtn = document.querySelector(".moreinfo-button");
const moreInfo = document.querySelector(".more-info");
const sendInfo = document.querySelector(".send-button");


const form = document.querySelector('.form-box');
const emailInput = document.querySelector('input[name="email"]');
const mobileInput = document.querySelector('input[name="mobile_number"]');

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



// 
fixedBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
  });

moreBtn.addEventListener('click', () => {
    moreInfo.classList.toggle('active')
    });







