export async function consumirAPI(datosDelFormulario) {
  //1 Para que backend voy
  let url = "http://localhost:8080/personajes";

  //2 Configuracion de la peticion, a haceer que?
  let peticion = {
    method: "POST", // Se necesita siempre una funcion por metodo
    headers: { "Content-Type": "application/json" },
    body: datosDelFormulario,
  };

  //3 Ir al back (promesas)
  let respuesta = await fetch(
    /* Para donde voy?*/ url,
    /* A hacer que? */ peticion
  );
  return await respuesta.json();
}
