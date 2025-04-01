function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  const outer= document.querySelector("outer");

  if (myTemp < 10) {
    console.log(" it is freezing");
    body.style.background = "gray";
    outer.style.background = "White";
    
  }
  else if (myTemp.value >=10 && myTemp.Vaule <20)
  {
    console.log("it is a pleasant weather")
    body.style.background = "blue";
    outer.style.background = "green";
  }
  else if (myTemp.vaule >=20 && myTemp.vaule <30) {
    console.log(" It is nice and sunny");
    body.style.background = "yellow";
    outer.style.background = "orange";

  } else if (myTemp.vaule>= 30) {
    console.log(" it is burning hot");
    body.style.backgroundColor = "crimson";
  }
}
