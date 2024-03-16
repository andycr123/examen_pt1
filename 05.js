//No modificar el nombre de la función
  /* 
    Esta función "resolverPromesa" recibe por parametros una promesa (promesa).
    si la promesa se resuelve entonces la función debe devolver un string "Promesa resuelta",
    si es rechazada debe devolver "Promesa no resuelta".
    NOTA: la promesa es una función promesa por lo tanto para llamarla la defines "promesa()"
  */
  //Codigo debajo de esta linea --------


  /* Inicio resolver promesa */
  const resolverPromesa = async function resolverPromesa(promesa) {
    try {
      await promesa();
      return "Promesa resuelta";
    } catch (error) {
      return "Promesa no resuelta";
    }

}
 /* Fin promesa */
  module.exports = { resolverPromesa };
  
