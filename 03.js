//No modificar el nombre de la función
function verificarContraseña(contraseña) {
  /* 
    Esta función "verificarContraseña" recibe como parametro un string llamado contraseña y 
    su deber es validar la contraseña que sea valida ( para hacer valida la contraseña debe de contener
    minimo 8 caracteres, minimo 1 mayuscula, minimo un caracter especial y minimo un carcater especial )
    si es valida devuelve un true si no un false
  */
   // Código debajo de esta línea --------

   /* Inicio de Contraseñas*/
  if (contraseña.length < 8) {
    return false;
  }
  var tieneMayuscula = /[A-Z]/.test(contraseña);
  if (!tieneMayuscula) {
    return false;
  }
  var tieneCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(contraseña);
  if (!tieneCaracterEspecial) {
    return false;
  }

  var tieneNumero = /\d/.test(contraseña);
  if (!tieneNumero) {
    return false;
  }

  return true;
}
/* Fin contraseñas */
module.exports = { verificarContraseña };

