const
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    slides = document.querySelectorAll('.slider_main'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlideTurn = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDotTurn = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const activeTurn = (n) =>{
    activeSlideTurn(n);
    activeDotTurn(n);
}
const nextBtn = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeTurn(index);
    }
    else {
        index++;
        activeTurn(index);
    }

}
const prevBtn = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeTurn(index);
    }
    else {
        index--;
        activeTurn(index);
    }

}
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeTurn(index);
    })
})
next.addEventListener('click', nextBtn);
prev.addEventListener('click', prevBtn);

setInterval(nextBtn, 5000);
$(document).ready(function() { 
    var button = $('#button-up');	
    $(window).scroll (function () {
      if ($(this).scrollTop () > 300) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
  });	 
  button.on('click', function(){
  $('body, html').animate({
  scrollTop: 0
  }, 800);
  return false;
  });
  $('.header_burger').click((event) =>{
      $('.header_burger, .header_menu').toggleClass('active');
  })		 
  });
