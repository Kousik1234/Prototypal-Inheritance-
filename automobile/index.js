
// using Inheritace
var autoMobi={
    brand:"tata",
     tyre:"four",
     window:"four",
     storespace:"one",
     wipper:"two",
     gear:"one"
}
var p=Object.create(autoMobi)
p.brand="Honda"
console.log(p)
console.log(autoMobi)

  function autoMobile1(br,ty,wi,st,wi,ge)
  {
      this.brand=br;
      this.tyre=ty;
      this.window=wi;
      this.storespace=st;
      this.wipper=wi;
      this.gear=ge;
  }
  let car=new autoMobile1("Tesla","four","four","one","two","one");
  console.log(car)

  let van=Object.create(car)
  van.brand="Tata Motors"
  console.log(van)