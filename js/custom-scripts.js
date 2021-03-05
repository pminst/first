; (function () {
  $(document).ready(function () {

    $('a').click(function(event) {

      if ($(this).hasClass('nav-link') || $(this).hasClass('navbar-brand')) {
        event.preventDefault();
        var url = $(this).attr('href')
        $("html, body").animate({
          opacity: 0
        }, 300, function() {
          window.location.href = url;
        })
      }
    })

    $(".navbar-toggler").click(function() {
      var navbar = $(".navbar-collapse");
      if (navbar.hasClass("opened")) {
        navbar.removeClass("opened");
        $("body").removeClass("navOpened");
        $(".navbar-toggler").removeClass("toggle-clicked");
      } else {
        navbar.addClass("opened");
        $("body").addClass("navOpened");
        $(".navbar-toggler").addClass("toggle-clicked");
      }
    });

    $('.navbar-brand').on("click", function (e) {
      $('.modal').modal('hide');
    });

    $('.projects-slide').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow:'<a class="carousel-control-next-icon nextArrow" aria-hidden="true"></a>',
      prevArrow:'<a class="carousel-control-prev-icon prevArrow d-none d-md-block" aria-hidden="true"></a>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".nav").find(".active").removeClass("active");
    $('a[href="' + location.pathname + '"]').addClass("active");
    $('a[href="' + location.pathname + '"]').parent().addClass("active");
    if (location.pathname === '/') {
      $('body > .container').addClass('homepage')
    }

  });
})();