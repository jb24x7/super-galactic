import Dateclass from './../src/date';


window.addEventListener("load", function () {

  let year = document.getElementById("text3");
  let pastyear = document.getElementById("text1");
  let futureyear = document.getElementById("text2");
  let planet = document.getElementById("planet");
  let text1 = this.document.getElementById("text-1");
  let text2 = this.document.getElementById("text-2");
  let text3 = this.document.getElementById("text-3");

  planet.addEventListener("change", function () {
    
    const Obj = new Dateclass(year.value, pastyear.value, futureyear.value);
    let planetString = planet[planet.selectedIndex].value;
    text1.innerText = Obj.checkDate(planetString);
    text2.innerText = Obj.checkYearsPassed(planetString);
    text3.innerText = Obj.checkYearsFuture(planetString);

  });

});

