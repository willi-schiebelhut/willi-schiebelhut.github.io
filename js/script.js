'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        // // Optional parameters
        // direction: 'vertical',
        loop: true,
      
        // // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          renderFraction: function(currentClass, totalClass) {
            return 'Проект <span class= "' + currentClass + '"></span>' +
            ' / ' +
            '<span class="' + totalClass + '"></span>';
          }
        },
        // // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next'
        },
        effect: 'flip',
        flipEffect: {
          slideShadows: false
        }
      });
      
          //Mail send

    $('form').submit(function (e) {
      e.preventDefault();
      if (!$(this).valid()) {
        return;
    }
      $('.loader').show();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function () {
        $('.loader').hide();
        $('.done').show();
        $(this).find("input").val("");
        $('form').trigger('reset');
      });
      
      return false;
    });
//Scroll
    $(function(){
      $("a[href^='#']").click(function(){
              var _href = $(this).attr("href");
              $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
              return false;
      });
});

const modalTrigger = document.querySelector('.hero__button'),
        modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay'),
        modalClose = document.querySelector('.modal__close');
        modalTrigger.addEventListener('click', showModal);

        function showModal() {
          overlay.style.display = 'block';
          modal.style.display = 'block';
        }

        function closeModal() {
          overlay.style.display = 'none';
          modal.style.display = 'none';
        }
        modalClose.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape') {
            closeModal();
          }
        });

});