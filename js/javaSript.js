document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
  function validateForm() {
    // Get input values    
    let email = document.getElementById('email').value;
    let dni = document.getElementById('dni').value;  
    let phone = document.getElementById('phone').value;   
    
    // Email validation  
    const emailRegEx = /^\S+@\S+\.\S+$/;  
    if(!emailRegEx.test(email)) {
      alert('Please enter a valid email address');
      return false;    
    }
    
    // DNI must be 8 digits 
    if (!/^\d{8}$/.test(dni)) {
      alert('Please enter a valid 8 digit DNI');    
      return false;
    }
    
    // Phone number validation 
    const phoneRegEx =  /^\+?(\d[\d\-]{7,15})$/;  
    if(!phoneRegEx.test(phone)){   
      alert('Please enter a valid phone number with country code');
      return false;
    }
    
    // If all validation passes  
    return true;
  }   
