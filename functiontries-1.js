var bodyElement = document.getElementById("Bodyprueba");
var divElement = document.createElement("div");

window.addEventListener("hashchange", () =>{
    var  winHash = window.location.hash
switch(winHash){
    case "#/":
        console.log("Estamos en home")
        break;
    case "#/product":
        //bodyElement.removeChild(divElement);
        bodyElement.appendChild(crearHome());    
        break;
    case "#/adrres":
        //bodyElement.removeChild(divElement);
        bodyElement.appendChild(crearForm());
        break;
}
});

function crearHome(){
        const views = `
        <ul>
                <li>Val 1</li>
                <li>Val 2</li>
                <li>Val 3</li>
        </ul>
        <p>precio</p>
    <a href="#/adrres"><button id = "product"> buy</button></a>
                `;
        divElement.innerHTML = views;
        console.log(divElement)
    return divElement;
}

function crearForm(){
        const views = `
        <ul >
                <li>Vghjghj1</li>
                <li>ghhg</li>
                <li>ddd</li>
        </ul>
        <p style="color:red";>precio</p>
    <a href="#/product"><button id = "product"> buy</button></a>
                `;
        divElement.innerHTML = views;
        console.log(divElement)
    return divElement;
}