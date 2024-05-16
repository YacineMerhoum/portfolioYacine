$(document).ready(function(){
  $(window).scroll(function(){

      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }


      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});


  $('.navbar .menu li a').click(function(){

      $('html').css("scrollBehavior", "smooth");
  });


  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });


  var typed = new Typed(".typing", {
      strings: ["développeur web junior", "développeur Front-end junior  ","développeur Back-end junior", "Codeur"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["développeur web junior", "développeur Front-end junior  ","développeur Back-end junior ", "Codeur"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      strings: ["Game Developer", "Designer", "Talented Coder"],
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});

window.addEventListener("scroll", function() {
    var logo = document.getElementById("logo");
    if (window.scrollY > 100) { 
    } else {
        logo.classList.remove("hidden");
    }
});



window.addEventListener('scroll', function() {
    // Récupérer la position de la section "À propos"
    var aboutSection = document.getElementById('about');
    var aboutPosition = aboutSection.offsetTop;
    var aboutHeight = aboutSection.offsetHeight;
    var windowHeight = window.innerHeight;
    var windowScroll = window.scrollY;


    if (windowScroll > aboutPosition - windowHeight && windowScroll < aboutPosition + aboutHeight) {

        var menuLinks = document.querySelectorAll('.menu-btn');
        menuLinks.forEach(function(link) {
            link.style.color = 'black';
        });
    } else {
   
        var menuLinks = document.querySelectorAll('.menu-btn');
        menuLinks.forEach(function(link) {
            link.style.color = '';
        });
    }
});

window.addEventListener('scroll', function() {
    if (window.innerWidth <= 810) {
        var aboutSection = document.getElementById('about');
        var aboutPosition = aboutSection.offsetTop;
        var aboutHeight = aboutSection.offsetHeight;
        var windowScroll = window.scrollY;

        if (windowScroll > aboutPosition - window.innerHeight && windowScroll < aboutPosition + aboutHeight) {
            console.log("Inside 'about' section");
            var menuLinks = document.querySelectorAll('.navbar .menu');
            console.log("menuLinks: ", menuLinks);
            menuLinks.forEach(function(link) {
                link.style.backgroundColor = 'white';
            });
        } else {
            console.log("Outside 'about' section");
            var menuLinks = document.querySelectorAll('.navbar .menu');
            console.log("menuLinks: ", menuLinks);
            menuLinks.forEach(function(link) {
                link.style.backgroundColor = '';
            });
        }
    }
});

window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo');
    if (window.scrollY > 50) { 
        logo.classList.add('hidden'); 
    } else {
        logo.classList.remove('hidden'); 
    }
});
document.addEventListener('scroll', function() {
    const contactSection = document.getElementById('contact');
    const signature = document.querySelector('.signature');
    const contactPosition = contactSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (contactPosition < screenPosition) {
        signature.classList.add('visible');
    } else {
        signature.classList.remove('visible');
        void signature.offsetWidth; 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const targets = document.querySelectorAll('.contactezmoi');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visiblecontactezmoi');
                entry.target.classList.remove('contactezmoi');
            } else {
                entry.target.classList.remove('visiblecontactezmoi');
                entry.target.classList.add('contactezmoi');
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(target => {
        observer.observe(target);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const targets = document.querySelector('.yacine');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visiblecontactezmoi');
                entry.target.classList.remove('contactezmoi');
            } else {
                entry.target.classList.remove('visiblecontactezmoi');
                entry.target.classList.add('contactezmoi');
            }
        });
    }, {
        threshold: 0.1
    });   
        observer.observe(targets);              
});

window.onload = function() {
    document.getElementById('divYm').classList.add('appear');
};
document.addEventListener('DOMContentLoaded', function() {
    const targets = document.querySelector('#photoMoi');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('photoAppear');
                entry.target.classList.remove('photoNoAppear');
            } else {
                entry.target.classList.remove('photoAppear');
                entry.target.classList.add('photoNoAppear');
            }
        });
    }, {
        threshold: 0.6
    });
        observer.observe(targets);              
});


