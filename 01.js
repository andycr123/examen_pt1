//No modificar el nombre de la función
function multiplicaciónArrays(_array) {
  /* 
    Esta función "multiplicacionArrays" recibe como parametro un array de numero enteros
    Esta función debe de retornar la multiplicación de todos sus numeros ejemplo:
    [1,2,3,4]  retorna 24
    */
  // Codigo debajo de esta linea --------
  
  /* Inicio de array multiplicado*/
  let multiplicado = 1;
  for (let i = 0; i < _array.length; i++) {
    multiplicado *= _array[i];
  }
  return multiplicado;
  /* Fin de array multiplicado*/

}

module.exports = { multiplicaciónArrays };
