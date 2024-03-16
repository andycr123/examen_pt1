
  palabra = palabra.toLowerCase();


  palabra = palabra.replace(/\s/g, '');

  return palabra === palabra.split('').reverse().join('');
