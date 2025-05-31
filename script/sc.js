let guessBtn = document.querySelector("#guesBtn");
let probar = document.querySelector("#guess");
let message = document.querySelector("#msg");
let contador = document.getElementById("numConteo");
let reset = document.getElementById("reset");
let conteo = document.getElementById("conteo");


//Para que el número ramdom sea del 1 al 100, lo he multiplicado por 100.
const guess = parseInt(Math.random() * 100);
console.log(guess);

//Para implementar un contador declaro i=0
let i = 0;

//Con esta función activo el evento onclick del botón "Prueba"
function intento() {
    //Aquí incremento a i cada vez que el usuario hace click 
    i++;
    //Esto hace que se modifique el texto en mi html
    contador.innerText = i;
    //Para agregar el historial de los números que vaya probando el usuario
    let list = document.createElement("li");
    document.querySelector("#numbers").appendChild(list)
    list.textContent = +probar.value;
    list.style.listStyleType = "none";




    //Con el condicional if evalúo la respuesta del usuario
    if (probar.value == guess) {
        message.innerHTML = "¡Adivinaste!";
        message.style.fontWeight = "900"
        message.style.color = "green";

    }
    else if (probar.value > guess) {

        message.innerHTML = "Vuelve a intentar con un número mas bajo"

    } else {
        message.innerHTML = "Vuelve a intentar con un número mas alto"

        //Establezco el límite de mi contador y le mando un mensaje al usuario
        if (i === 7) {
            message.innerHTML = "¡Has perdido! El número secreto era:  " + guess + ". Vuelve a empezar.";
            message.style.color = "red";
            message.style.fontWeight = "900"
            contador.fontsize = "20px";
            contador.style.color = "red";
        }


    }


    console.log(i);
    console.log(probar.value);

}


//Le agrego un evento al botón Reiniciar 
reset.addEventListener("click", () => {
    //reinicio el contador a 0 y lo muestro en pantalla
    i = 0;
    contador.innerText = i;
    //Generar un nuevo número aleatorio
    let newGuess = parseInt(Math.random() * 100);
    console.log(newGuess);


    //Al presionar el botón también se eliminan los mensajes
    contador.style = "default"
    message.style = "default"
    message.innerHTML = " ";
    document.querySelector("#numbers").innerHTML = "";

})

