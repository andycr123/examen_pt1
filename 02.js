//No modificar el nombre de la función
function palabraPalindromo(palabra) {
  /* 
    Esta función "palabraPalindromo" recibe como parametro un string llamado palabra y 
    su deber es validar la palabra que sea palindromo ( se lee
    de igual manera de izquierda a derecha y de dercha a izquierda).
    esta función debe retornar true si la plabra es palindromo y false si no lo es
    */
  // Código debajo de esta línea --------


  palabra = palabra.toLowerCase();


  palabra = palabra.replace(/\s/g, '');

  return palabra === palabra.split('').reverse().join('');
}

module.exports = { palabraPalindromo };

