$(document).on("click", ".agree-button", function () {
  $.ajax({
    url: "cookies.php",

    type: "GET",

    success: function (code_html, statut) {
      $("#cookie").fadeOut(800);
    },
  });
  $("#cookie").fadeOut(800);
});
