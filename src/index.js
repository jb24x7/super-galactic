import Dateclass from './../src/date';


window.addEventListener("load", function () {

  let year = document.getElementById("text3");
  let planet = document.getElementById("planet");
  let text = this.document.getElementById("text");

  planet.addEventListener("change", function () {
    
    const Obj = new Dateclass(year.value);
    let planetString = planet[planet.selectedIndex].value;
    text.innerText = Obj.checkDate(planetString);

  });

});

