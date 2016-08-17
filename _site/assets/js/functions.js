(function ($) {
//  "use strict"

  var $mobileNavToggleBtn = $(".mobile-nav-toggle")
      $blankATags = $("a[href^='#']"),
      $body = $("html, body"),
      settings = {
        duration: 300
      };

  function onBtnClick (e) {
    var $this = $(this),
        $selectors = $(".mobile-nav");

    $this.toggleClass("is-open");
    $selectors.toggleClass("is-open");
  }

  function onBlankAClick (event) {
    var $this = $(this),
        href = $this.attr("href"),
        $target = $(href);

        if( $target.length > 0) {
          event.preventDefault();
          $body.animate({
            scrollTop: $target.offset().top
          }, settings.duration);
        }
  }

  function thumbnailScroll() {
    var wScroll = $(window).scrollTop();

    $(".thumbnail-strip").css("background-position", "center -" + wScroll + "0px");
  }

  $(document).ready(function () {
      $mobileNavToggleBtn.on("click", onBtnClick);
      $blankATags.on("click", onBlankAClick);
      $(window).scroll(function() {
        thumbnailScroll();
      });
  });


})(jQuery);
