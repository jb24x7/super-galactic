import Date from './../src/date';


window.addEventListener("load", function () {

  let year = document.getElementById("text3");
  let planet = document.getElementById("planet");

  planet.addEventListener("change", function () {
    let newObj = new Date(year.value);
    let planetString = planet[planet.selectedIndex].value;
    checkdate(planetString, newObj);

  });

});

