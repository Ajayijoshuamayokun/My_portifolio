let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + "+";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
     faq.addEventListener('click', () => {
        faq.classList.toggle('open');

       // change icon
       const icon = faq.querySelector('.faq__icon i');
       if(icon.className === 'uil uil-plus') { 
           icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
}) 


// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";

})
    // close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


 