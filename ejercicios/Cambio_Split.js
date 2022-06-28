

var arquivo = '100,200-150,200;20';

var valores = arquivo.split(',');

console.log(valores);

var exp = /[,;-]/;

var valores = arquivo.split(exp);

console.log(valores);
