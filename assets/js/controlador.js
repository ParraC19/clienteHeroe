import { consumirAPI } from "./consumaServicio.js";

//Referencias al formulario

let nombre = document.getElementById("nombre");
let cantidadVida = document.getElementById("cantidadVida");
let ataque = document.getElementById("ataque");
let defensa = document.getElementById("defensa");
let categoria = document.getElementById("categoria");
let sigueVivo = document.getElementById("sigueVivo");
let fotografia = document.getElementById("fotografia");
let fechaCreacion = document.getElementById("fechaCreacion");

let botonFormulario = document.getElementById("botonFormulario");

//Detecto el evento de hacer click al boton

botonFormulario.addEventListener("click", function (evento) {
  evento.preventDefault(); //No permitir el recargar la pagina
  /* 
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>',
  });*/
  let datosEnvioBack = {
    nombre: nombre.value,
    cantidadVida: cantidadVida.value,
    ataque: ataque.value,
    defensa: defensa.value,
    categoria: categoria.value,
    sigueVivo: sigueVivo.checked,
    fotografia: fotografia.value,
    fechaCreacion: fechaCreacion.value,
  };
  let datosListos = JSON.stringify(datosEnvioBack);

  //LLamo al consuma

  consumirAPI(datosListos).then(function (respuesta) {
    Swal.fire({
      title: "Good job!",
      text: "Personaje registrado con exito!",
      icon: "success",
    });
  });
});
