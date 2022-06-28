// En nuestra clase hemos creado un pequeño “monstruo” para definir la expresión de la fecha:

// [0123]?\d\s+de\s+[A-Z][a-zç]{1,8}\s+de\s+[12]\d{3}

//Para organizar lo anterior definimos variables para cada elemento de la expresión:

var DIA  = "[0123]?\d"; 
var _DE_ = "\s+de\s+";
var MES  = "[A-Za-z][a-zç]{1,8}";
var AÑO  = "[12]\d{3}";

//Y ahora definimos la expresión regular:
var stringRegex = DIA + _DE_ +  MES + _DE_ + AÑO;

//Y ahora probamos la expresion regular para la regex enginne de JavaScript:
var objetoRegex  = new RegExp(stringRegex, 'g');