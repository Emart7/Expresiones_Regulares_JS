// Queremos usar una Regex que pueda encontrar una línea y separarla en dos grupos, 
// Causa y Descripción para simplificar la lectura:

// Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure


// podemos hacer una regex para la string completa:
// Caused[\s\w:.]+:[\w\s]+

// Ahora, los dos grupos separados
// (Caused[\s\w:.]+):([\w\s]+)