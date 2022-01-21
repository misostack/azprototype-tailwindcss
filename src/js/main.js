import "@/styles/main.scss";
import "jquery";

var Site = Site || {};

(function ($) {
  $(function () {
    /* begin Site.Layout defined */
    Site.Layout = {
      boot: function () {
        Site.Layout.navMenu();
      },
      navMenu: function () {
        $("#nav-menu-toggle").on("click", (e) => {
          e.preventDefault();
          $("#nav-menu").toggleClass("h-0");
        });
      },
    }; /* end Site.Layout defined */
  });
})(jQuery);

$(function ($) {
  Site.Layout.boot();
});
