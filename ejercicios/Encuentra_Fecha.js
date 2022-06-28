// ¿Cuál de las regex abajo capturaría exactamente las string de fecha que siguen el modelo 
// *Fecha: dia/mes/año* o *Fecha:dia/mes/año*?


// ^Fecha:[\s]?[0-9]{2}\/[0-9]{2}\/[0-9]{4}$

// La regex para agarrar la fecha es muy simple, [0-9]{2}\/[0-9]{2}\/[0-9]{4}. 
// Pero también queremos la expresión Fecha: y un espacio en blanco (por ejemplo: \s) 
// entre ellos, que es opcional, o sea, tenemos que utilizar el signo de interrogación (?). 
// Además, queremos exactamente esa string, por eso necesitamos poner las anclas (^) y ($) al principio 
// y al final de la string, respectivamente: ^Fecha:[\s]?[0-9]{2}\/[0-9]{2}\/[0-9]{4}$