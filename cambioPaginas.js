// Set the date we're counting down to
function reloj(){
var countDownDate = new Date().getTime() + 300000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "Te quedan " + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
}

//displays
var displayCilindrada = document.getElementById("displayCilindrada");
var displayColor = document.getElementById("displayColor");
var displayPrecio = document.getElementById("displayPrecio");
var price = "";
var radiovalue ="";
var displayRadioValue = document.getElementById("displayShipping");
var displayMaxShipping = document.getElementById("displayMaxShipping")
var fecha = new Date;
var displayShippingPrice = document.getElementById("displayShippingPrice");
var shippingPrice = "";
var totalPrice = "";
var displayTotalPrice = document.getElementById("displayTotalPrice");



function displayVariables(){
  displayCilindrada.innerHTML = cilindrada;
  displayColor.innerHTML = color;
  if (cilindrada == "900cc"){
    price = "14999";
  }
  else if(cilindrada == "1200cc"){
    price = "16999";
  }
  displayPrecio.innerHTML = price.toLocaleString('en-US');
  fecha.setHours(fecha.getHours() + parseFloat(radiovalue));
  displayRadioValue.innerHTML = fecha.toDateString() + " " + fecha.getHours() + (fecha.getMinutes()<10?':0':':') + fecha.getMinutes();
  displayMaxShipping.innerHTML = fecha.toDateString() + " 18:00";

  if (radiovalue == "72"){
    shippingPrice = "0$";
  }
  else if (radiovalue == "48"){
    shippingPrice = "49.99$";
  }
  else if (radiovalue == "24"){
    shippingPrice = "99.99$";
  }
  displayShippingPrice.innerHTML = shippingPrice;
  totalPrice = parseFloat(price) + parseFloat(shippingPrice);
  displayTotalPrice.innerHTML = totalPrice.toLocaleString('en-US');

}



var cilindrada = "";
var comprar = document.getElementById("buy-button")
comprar.addEventListener("click",cambioClase1)
var color = "";

function cambioClase1 (){
  if (color == ""){
    alert ("no has seleccionado color")
    return;
  }
  const product = document.getElementById("product-page");
  const profile = document.getElementById("profile-page");
  const tituloProduct = document.getElementById("titProduct");
  const tituloProfile = document.getElementById("titProfile");
  product.className = "ocultar";
  profile.className = "mostrar";
  tituloProduct.style.color ="white";
  tituloProfile.style.color ="black";
  cilindrada = document.getElementById("engineCapacity").value;
  console.log(cilindrada);
  console.log(color);
  reloj();
}
var nextProfile = document.getElementById("next-profile");
nextProfile.addEventListener("click",cambioClase2);

function cambioClase2 (){
  const profile = document.getElementById("profile-page");
  const address = document.getElementById("address-page");
  const tituloProfile = document.getElementById("titProfile");
  const tituloForm = document.getElementById("titForm");
  profile.className = "ocultar";
  address.className = "mostrar";
  tituloProfile.style.color ="white";
  tituloForm.style.color ="black";
}

var shippingNext = document.getElementById("Next-Address");
shippingNext.addEventListener("click",cambioClase3);

function cambioClase3 (){
  const address = document.getElementById("address-page");
  const shipping = document.getElementById("shipping-page");
  const tituloForm = document.getElementById("titForm");
  const tituloShipping = document.getElementById("titShipping");
  address.className = "ocultar";
  shipping.className = "mostrar";
  tituloForm.style.color ="white";
  tituloShipping.style.color ="black";
}

var shippingNext = document.getElementById("btnShipping");
shippingNext.addEventListener("click",cambioClase4);

function cambioClase4 (){
  const shipping = document.getElementById("shipping-page");
  const finish = document.getElementById("finish-page");
  const tituloShipping = document.getElementById("titShipping");
  const tituloFinish = document.getElementById("titFinish");
  shipping.className = "ocultar";
  finish.className = "mostrar";
  tituloShipping.style.color ="white";
  tituloFinish.style.color ="black";
  radiovalue = document.querySelector('input[name="send"]:checked').value;
  // document.getElementById('radioBtn1').value;
  console.log(cilindrada);
  console.log(radiovalue);
  displayVariables();
}