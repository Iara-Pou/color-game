function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}

function pickColor(cantidad) {
  return Math.floor(Math.random() * cantidad);
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * (1 + 255))}, ${Math.floor(Math.random() * (1 + 255))}, ${Math.floor(Math.random() * (1 + 255))})`;
}

function generateRandomColors(longitud) {
  let arrayNuevo = [];
  for (let i = 0; i < longitud; i++) {
    arrayNuevo[i] = randomColor();
  }
  return arrayNuevo;
}

let cuadrados = document.querySelectorAll(".square");
let mensaje = document.querySelector("#message");
let boton = document.querySelector("button");
let span = document.querySelector("#colorDisplay");

let colors = generateRandomColors(6);
let pickedColor = colors[pickColor(colors.length)];
span.textContent = " " + pickedColor;

//juego default
for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.backgroundColor = colors[i];
  cuadrados[i].addEventListener("click", function () {
    let clickedColor = colors[i];
    boton.textContent = "Nuevos colores";

    if (pickedColor == clickedColor) {
      mensaje.textContent = "¡Correcto! ";
      document.querySelector("h1").style.color = clickedColor;
      changeColors(clickedColor);
      boton.textContent = "Play again?"
    } else {
      cuadrados[i].style.backgroundColor = "#232323";
      mensaje.textContent = "No es este, ¡Intentalo nuevamente! ";
    }
  });
}

//boton nuevos colores
boton.addEventListener("click", function () {

  boton.textContent = "Nuevos colores";
  document.querySelector("h1").style.color = "white";
  mensaje.textContent= "";

  if(facil.classList.contains("selected")){
    colors = generateRandomColors(3);
  } else {
  colors = generateRandomColors(6);
  }

  pickedColor = colors[pickColor(colors.length)];
  span.textContent = " " + pickedColor;
   
  for (let i = 0; i < cuadrados.length; i++) {
    //asignacion colores
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener("click", function () {
      let clickedColor = colors[i];

      if (pickedColor == clickedColor) {
        mensaje.textContent = "¡Correcto! ";
        document.querySelector("h1").style.color = clickedColor;
        changeColors(clickedColor);
        boton.textContent = "Play again?"

      } else {
        cuadrados[i].style.backgroundColor = "#232323";
        mensaje.textContent = "No es este, ¡Intentalo nuevamente! ";
      }

    }
    );

  }
}
)

document.querySelector("#facil").addEventListener("click", function () {
  this.classList.add("selected");
  dificil.classList.remove("selected");
  document.querySelector("h1").style.color = "white";
  mensaje.textContent= "";

  colors = generateRandomColors(3);
  let pickedColor = colors[pickColor(colors.length)];
  span.textContent = " " + pickedColor;

  for (let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style.backgroundColor = colors[i];
      cuadrados[i].addEventListener("click", function () {
        let clickedColor = colors[i];
        boton.textContent = "Nuevos colores";

        if (pickedColor == clickedColor) {
          mensaje.textContent = "¡Correcto! ";
          document.querySelector("h1").style.color = clickedColor;
          changeColors(clickedColor);
          boton.textContent = "Play again?"
        } else {
          cuadrados[i].style.backgroundColor = "#232323";
          mensaje.textContent = "No es este, ¡Intentalo nuevamente! ";
        }

      }
      );
    } else {
      cuadrados[i].classList.add("hide");
    }
  }
}
);

document.querySelector("#dificil").addEventListener("click", function () {
    this.classList.add("selected");
    facil.classList.remove("selected");
    document.querySelector("h1").style.color = "white";
    mensaje.textContent= "";

    colors = generateRandomColors(6);
    let pickedColor = colors[pickColor(colors.length)];
    span.textContent = " " + pickedColor;
    
    for (let i = 0; i < cuadrados.length; i++) {
      if (colors[i]) {
        cuadrados[i].classList.remove("hide")
        cuadrados[i].style.backgroundColor = colors[i];
        cuadrados[i].addEventListener("click", function () {
          let clickedColor = colors[i];
          boton.textContent = "Nuevos colores";
  
          if (pickedColor == clickedColor) {
            mensaje.textContent = "¡Correcto! ";
            document.querySelector("h1").style.color = clickedColor;
            changeColors(clickedColor);
            boton.textContent = "Play again?"
          } else {
            cuadrados[i].style.backgroundColor = "#232323";
            mensaje.textContent = "No es este, ¡Intentalo nuevamente! ";
          }
  
        }
        )    

  }
}
  })





