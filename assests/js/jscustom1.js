$(document).ready(function() {
  if($(window).width() <= 1024) {
      $('body').removeClass("ast-header-break-point");
  }
});

$('#home_news_slide').slick({
  arrow: true,
  infinite: true,
  autoplay:true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        arrow: true,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrow: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('#table_slide').slick({
  arrow: true,
  infinite: false,
  autoplay:true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  asNavFor: '#book_div_slide',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots:false,
        centerPadding: '0px',
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        padding:0,
        slidesToScroll: 1
      }
    }
  ]
	 // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
});

$('#book_div_slide').slick({
  arrow: true,
  infinite: false,
  autoplay:true,
  autoplaySpeed: 1200,
  speed: 1200,
  slidesToShow:3,
  slidesToScroll: 6,
  centerPadding: '0px',
  asNavFor: '#table_slide',
//   centerMode: true,
//   focusOnSelect: true,
 
});




$('#book_ac_slide').slick({
  arrow: false,
  infinite: false,
  autoplay:false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
   asNavFor: '#book_ac_slide_text',
    centerMode: true,
focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
       
        centerPadding: '20px',
      }
    },
    
  ]
 
});


$('#book_ac_slide_text').slick({
  arrow: false,
  infinite: false,
  autoplay:false,
  speed: 1000,
  slidesToShow: 1,
  fade: true,
  slidesToScroll: 1,
  asNavFor: '#book_ac_slide',
    centerMode: false,
focusOnSelect: false
 
});






/* ------------   -   --------------*/



$('#sp_related_slide').slick({
  arrow: true,
  infinite: true,
  autoplay:true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






$('#sis_gallery_id1').slick({
  arrow: true,
  infinite: true,
  autoplay:false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
 
});


  
$('#sis_gallery_id2').slick({
  arrow: true,
  infinite: true,
  autoplay:false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
 
});

  
$('#sis_gallery_id3').slick({
  arrow: true,
  infinite: true,
  autoplay:false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
 
});


$('#social_gallery_video').slick({
  arrow: true,
  infinite: false,
  autoplay:false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#social_gallery_video_nav',
  responsive: [
  
  
    {
      breakpoint: 767,
      settings: {
      
        dots: false,
      
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 
});


$('#social_gallery_video_nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#social_gallery_video',
  dots: false,
  infinite: true,
  arrow: false,
  //focusOnSelect: true,
//  centerMode: true,
  focusOnSelect: true,
  responsive: [
  
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        dots: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});



 

/*---------  script tab  oparation  service  ----------*/

$('#operation_icon .tab').on('mouseover', function(evt) {
  evt.preventDefault();

  $('#operation_icon .tab').removeClass('active');
  $(this).addClass('active');
  var sel = this.getAttribute('data-toggle-target');
  $('#board_description .tab-content').removeClass('active').filter(sel).addClass('active');
});



/*--------- script tab  marketing service ----------*/

$('#marketing_icons .tab').on('mouseover', function(evt) {
  evt.preventDefault();

  $('#marketing_icons .tab').removeClass('active');
  $(this).addClass('active');
  var sel = this.getAttribute('data-toggle-target');
  $('.content_tab_marketing .tab-content').removeClass('active').filter(sel).addClass('active');
});


 
 
$('.tab-content > .tabcontent:first-child ' ).addClass('active');
  
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

 
	$(window).load(function () {

    function heightDetect() {
      //var h = $(".footer-widget:nth-child(2)").width();
      //$(".footer-widget:nth-child(2)").height(h);
      var h = $(".app-slider-img").width();
      $(".app-slider-img img").height(h);
    };
    heightDetect();

    $(window).resize(function () {
      heightDetect();
      setTimeout(function () {
        heightDetect();
      }, 1000);
    });

    // fix scroll animation
    $(window).scrollTop($(window).scrollTop() + 1);
    $(window).scrollTop($(window).scrollTop() - 1);

    $(window).scroll(function () {

      var delay = '0';
      $(".app-one").each(function () {
        $(this).css("animation-delay", delay + 's');
        delay = parseFloat(delay) + parseFloat('0.15');
      });

      var delay = '0';
      $(".partners-one").each(function () {
        $(this).css("animation-delay", delay + 's');
        delay = parseFloat(delay) + parseFloat('0.15');
      });

      $('body').find('.animate-fadeInUp').each(function (index) {
        var body = $(document),
          elem = $(this),
          scroll_bottom = body.scrollTop() + $(window).height(),
          animation_top1 = elem.offset().top + (elem.height()),
          animation_top2 = elem.offset().top + (elem.height() / 5);
        var class_animation = 'animated fadeInUp visible';
        if (scroll_bottom >= animation_top2) {
          if (body.scrollTop() <= animation_top1) {
            if (!$(this).hasClass('no-scroll-effect')) $(this).addClass(class_animation);
          }
        }
      });

      $('body').find('.animate-fadeIn').each(function (index) {
        var body = $(document),
          elem = $(this),
          scroll_bottom = body.scrollTop() + $(window).height(),
          animation_top1 = elem.offset().top + (elem.height()),
          animation_top2 = elem.offset().top + (elem.height() / 5);
        var class_animation = 'animated fadeIn visible';
        if (scroll_bottom >= animation_top2) {
          if (body.scrollTop() <= animation_top1) {
            if (!$(this).hasClass('no-scroll-effect')) $(this).addClass(class_animation);
          }
        }
      });

      $('body').find('.animate-fadeInLeft').each(function (index) {
        var body = $(document),
          elem = $(this),
          scroll_bottom = body.scrollTop() + $(window).height(),
          animation_top1 = elem.offset().top + (elem.height()),
          animation_top2 = elem.offset().top + (elem.height() / 5);
        var class_animation = 'animated fadeInLeft visible';
        if (scroll_bottom >= animation_top2) {
          if (body.scrollTop() <= animation_top1) {
            if (!$(this).hasClass('no-scroll-effect')) $(this).addClass(class_animation);
          }
        }
      });

      $('body').find('.animate-fadeInRight').each(function (index) {
        var body = $(document),
          elem = $(this),
          scroll_bottom = body.scrollTop() + $(window).height(),
          animation_top1 = elem.offset().top + (elem.height()),
          animation_top2 = elem.offset().top + (elem.height() / 5);
        var class_animation = 'animated fadeInRight visible';
        if (scroll_bottom >= animation_top2) {
          if (body.scrollTop() <= animation_top1) {
            if (!$(this).hasClass('no-scroll-effect')) $(this).addClass(class_animation);
          }
        }
      });

      $('body').find('.animate-circle').each(function (index) {
        var body = $(document),
          elem = $(this),
          scroll_bottom = body.scrollTop() + $(window).height(),
          animation_top1 = elem.offset().top + (elem.height()),
          animation_top2 = elem.offset().top + (elem.height() / 5);
        var class_animation = 'animate-active';
        if (scroll_bottom >= animation_top2) {
          if (body.scrollTop() <= animation_top1) {
            if (!$(this).hasClass('no-scroll-effect')) $(this).addClass(class_animation);
          }
        }
      });


      $('body').find('#home_service').each(function (index) {

        var audio = new Audio("https://freesound.org/data/previews/501/501690_1661766-lq.mp3");

        var body = $(document),

          elem = $(this),
          scroll_bottom = body.scrollTop() + $(window).height(),
          animation_top1 = elem.offset().top + (elem.height()),
          animation_top2 = elem.offset().top + (elem.height() / 5);
        var class_animation = 'animate-active';

        if (scroll_bottom >= animation_top2) {
          if (body.scrollTop() <= animation_top1) {
          //  audio.play();
            
            
          }
        }
      });

    });

  });



/*----------*/
/*
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
  $('#home_service').each(function () {
      if (isScrolledIntoView(this) === true) {
          $(this).addClass('visible');
      }
  });

});*/

/* end sound */
 


$('body').find('.animate-circle').each(function (index) {
  var body = $(document),
    elem = $(this),
    scroll_bottom = body.scrollTop() + $(window).height(),
    animation_top1 = elem.offset().top + (elem.height()),
    animation_top2 = elem.offset().top + (elem.height() / 5);
  var class_animation = 'animate-active';
  if (scroll_bottom >= animation_top2) {
    if (body.scrollTop() <= animation_top1) {
      if (!$(this).hasClass('no-scroll-effect')) $(this).addClass(class_animation);
    }
  }
});



document.addEventListener('DOMContentLoaded', function() {








  
  var typed = new Typed('#typed1', {
    stringsElement: '#typed-strings1',
    typeSpeed: 80,
    backSpeed: 80,
    startDelay: 500,
    loop: true,
    loopCount: Infinity,
    onBegin: function(self) {
      prettyLog('onBegin ' + self);
    },
    onComplete: function(self) {
      prettyLog('onComplete ' + self);
    },
    preStringTyped: function(pos, self) {
      prettyLog('preStringTyped ' + pos + ' ' + self);
    },
    onStringTyped: function(pos, self) {
      prettyLog('onStringTyped ' + pos + ' ' + self);
    },
    onLastStringBackspaced: function(self) {
      prettyLog('onLastStringBackspaced ' + self);
    },
    onTypingPaused: function(pos, self) {
      prettyLog('onTypingPaused ' + pos + ' ' + self);
    },
    onTypingResumed: function(pos, self) {
      prettyLog('onTypingResumed ' + pos + ' ' + self);
    },
    onReset: function(self) {
      prettyLog('onReset ' + self);
    },
    onStop: function(pos, self) {
      prettyLog('onStop ' + pos + ' ' + self);
    },
    onStart: function(pos, self) {
      prettyLog('onStart ' + pos + ' ' + self);
    },
    onDestroy: function(self) {
      prettyLog('onDestroy ' + self);
    }
  });

/* end tying 1 */

  var typed2 = new Typed('#typed2', {
    stringsElement: '#typed-strings2',
    typeSpeed: 80,
    backSpeed: 40,
    startDelay: 500,
    loop: true,
    loopCount: Infinity,
    onBegin: function(self) {
      prettyLog('onBegin ' + self);
    },
    onComplete: function(self) {
      prettyLog('onComplete ' + self);
    },
    preStringTyped: function(pos, self) {
      prettyLog('preStringTyped ' + pos + ' ' + self);
    },
    onStringTyped: function(pos, self) {
      prettyLog('onStringTyped ' + pos + ' ' + self);
    },
    onLastStringBackspaced: function(self) {
      prettyLog('onLastStringBackspaced ' + self);
    },
    onTypingPaused: function(pos, self) {
      prettyLog('onTypingPaused ' + pos + ' ' + self);
    },
    onTypingResumed: function(pos, self) {
      prettyLog('onTypingResumed ' + pos + ' ' + self);
    },
    onReset: function(self) {
      prettyLog('onReset ' + self);
    },
    onStop: function(pos, self) {
      prettyLog('onStop ' + pos + ' ' + self);
    },
    onStart: function(pos, self) {
      prettyLog('onStart ' + pos + ' ' + self);
    },
    onDestroy: function(self) {
      prettyLog('onDestroy ' + self);
    }
  });

 
  

 /* end type 2 */
 
  
 var typed3 = new Typed('#typed3', {
  stringsElement: '#typed-strings3',
  typeSpeed: 80,
  backSpeed: 40,
  startDelay:500,
  loop: false,
  loopCount: Infinity,
  onBegin: function(self) {
    prettyLog('onBegin ' + self);
  },
  onComplete: function(self) {
    prettyLog('onComplete ' + self);
  },
  preStringTyped: function(pos, self) {
    prettyLog('preStringTyped ' + pos + ' ' + self);
  },
  onStringTyped: function(pos, self) {
    prettyLog('onStringTyped ' + pos + ' ' + self);
  },
  onLastStringBackspaced: function(self) {
    prettyLog('onLastStringBackspaced ' + self);
  },
  onTypingPaused: function(pos, self) {
    prettyLog('onTypingPaused ' + pos + ' ' + self);
  },
  onTypingResumed: function(pos, self) {
    prettyLog('onTypingResumed ' + pos + ' ' + self);
  },
  onReset: function(self) {
    prettyLog('onReset ' + self);
  },
  onStop: function(pos, self) {
    prettyLog('onStop ' + pos + ' ' + self);
  },
  onStart: function(pos, self) {
    prettyLog('onStart ' + pos + ' ' + self);
  },
  onDestroy: function(self) {
    prettyLog('onDestroy ' + self);
  }
});
  

/* end typed3 */










  
var typed4 = new Typed('#typed-ipad', {
  stringsElement: '#typed-strings-ipad',
  typeSpeed: 80,
  backSpeed: 40,
  startDelay:500,
  loop: true,
  loopCount: Infinity,
  
});
  /* end typing ipad */




});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}



$(document).ready(function(){

  if($(window).width() <= 1024) {
    // tablet 
          wow = new WOW(
            {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:      -150,          // default
            mobile:       true,       // default
            live:         true        // default
          }
          )

        wow.init();

  } else {

     // desktop 

    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       100,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )

    wow.init();

  }

});





$(function(){
  var hash = window.location.hash;
  hash && $('.tab-header a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});



 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {servicetab()};

// Get the header
var header = document.getElementById("service_tab");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function servicetab() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



