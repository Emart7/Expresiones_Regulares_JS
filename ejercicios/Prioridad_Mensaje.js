// Enunciado: Nuestro sistema conversa con un sistema de catalogo de productos usando SOAP, 
// podemos ver un ejemplo de uno de los mensajes abajo:

<soap:Envelope xmlns:soap="http://www.w3.org/2001/12/soap-envelope" 
               soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

<soap:Body xmlns:m="http://www.caelum.com.br/produto">
  <m:GetStock>
    <p1> ... </p1>
  </m:GetStock>
</soap:Body>

</soap:Envelope>

// Esos mensajes serán leídos por una fila de mensajes que las ordenarán por la tag de
// prioridad (p1,p2,p3, etc). Necesitamos crear un filtro que valide esa tag de prioridad y una de las 
// cosas que ese filtro necesitará verificar es si la tag que abre es la misma de la tag que cierra, 
// evitando situaciones como: <p1>...</p3>.

// Las prioridades van de 1 (menor prioridad) hasta 9 (mayor prioridad). ¿Qué expresión regular podemos 
// utilizar para garantizar el cierre de una tag de cualquier prioridad?

// <(p[1-9])>.*<\/\1>