var Retina;

Retina = {
  init: function() {
    var pixelRatio;
    pixelRatio = (!!window.devicePixelRatio ? window.devicePixelRatio : 1);
    if (pixelRatio > 1) {
      $("img").each(function(idx, el) {
        el = $(el);
        if (el.attr("data-src2x")) {
          el.attr("data-src-orig", el.attr("src"));
          el.attr("src", el.attr("data-src2x"));
        }
      });
    }
  }
};

Retina.init();

jQuery(document).ready(function($) {
  $('a.play-button').on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    return $($(this).attr('href')).removeClass('hide').show();
  });
  return $("#how-it-works").on("hidden.bs.modal", function(e) {
    $("#how-it-works iframe").attr("src", $("#how-it-works iframe").attr("src"));
  });
});
