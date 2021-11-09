$(document).ready(function(){
  
    $('.slider').slick();
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
        
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
        
        function updateClock() {
          var t = getTimeRemaining(endtime);
        
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
        
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
        
      var deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000); 
      initializeClock('countdown', deadline);
    
    
  
    const $button = document.querySelector('.promo__button');
    const $btn = document.querySelector('.product__button');
    const $form = document.querySelector('.form__form');
    
    // При клике на кнопку
    $button.addEventListener('click', e => {
      // Прокрутим страницу к форме 
      $form.scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
      });
    });
  
    
    
    // При клике на кнопку
    $btn.addEventListener('click', e => {
      // Прокрутим страницу к форме 
      $form.scrollIntoView({ 
        block: 'nearest', // к ближайшей границе экрана
        behavior: 'smooth', // и плавно 
      });
    });
  });
  