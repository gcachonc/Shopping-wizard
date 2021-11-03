// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();
      
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
      
//     // Time calculations for days, hours, minutes and seconds
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//     // Output the result in an element with id="demo"
//     document.getElementById("countdown").innerHTML =  minutes + "m " + seconds + "s ";
      
//     // If the count down is over, write some text 
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("countdown").innerHTML = "EXPIRED";
//     }
//   }, 1000);

var comprar = document.getElementById("buy-button")
comprar.addEventListener("click",cambioClase1)

function cambioClase1 (){
  const product = document.getElementById("product-page");
  const profile = document.getElementById("profile-page");
  product.className = "ocultar";
  profile.className = "mostrar";
}
var nextProfile = document.getElementById("next-profile");
nextProfile.addEventListener("click",cambioClase2);

function cambioClase2 (){
  const profile = document.getElementById("profile-page");
  const address = document.getElementById("address-page");
  profile.className = "ocultar";
  address.className = "mostrar";
}

var shippingNext = document.getElementById("Next-Address");
shippingNext.addEventListener("click",cambioClase3);

function cambioClase3 (){
  const address = document.getElementById("address-page");
  const shipping = document.getElementById("shipping-page");
  address.className = "ocultar";
  shipping.className = "mostrar";
}

var shippingNext = document.getElementById("btnShipping");
shippingNext.addEventListener("click",cambioClase4);

function cambioClase4 (){
  const shipping = document.getElementById("shipping-page");
  const finish = document.getElementById("finish-page");
  shipping.className = "ocultar";
  finish.className = "mostrar";
}