$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    event.preventDefault();
    const show = parseInt($("input:radio[name=show]:checked").val());
    const movie = parseInt($("input:radio[name=movie]:checked").val());
    const smell = parseInt($("input:radio[name=smell]:checked").val());
    const color = parseInt($("input:radio[name=color]:checked").val());
    const grow = parseInt($("input:radio[name=color]:checked").val());
    let result = (show + movie + smell + color + grow);
    let progLang;
    if (result >= 5 && result <= 11) {
      progLang = "JavaScript";
    } else if (result >= 12 && result <= 18) {
      progLang = "Go";
    } else if (result >= 19 && result <= 25) {
      progLang = "Python";
    }
    $("#language").text(progLang);
    $("#output").show();
  })
})