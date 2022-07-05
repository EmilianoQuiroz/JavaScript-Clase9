/*
******************
*     EVENTOS    *
******************
*/
/*
Objetivos de la clase:
-Comprender qué son los eventos y para qué sirven.
-Aprender cuáles son las tres opciones para definir eventos.
-Entender cómo escuchar un evento sobre el DOM. 
-Conocer los eventos más comunes.
-Identificar qué es la información del evento.
*/

//--- ¿QUÉ ES UN EVENTO? ---//
/*
Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.
Con Javascript es posible definir qué sucede cuando se produce un evento, por ejemplo, cuando se realiza un clic en cierto elemento o se inserta un texto en un determinado campo.
*/

//--- ¿CÓMO FUNCIONA? ---//
/*
JavaScript permite asignar una función a cada uno de los eventos. Reciben el nombre de event handlers o manejadores de eventos.
Así, ante cada evento, JavaScript asigna y ejecuta la función asociada al mismo.
Hay que entender que los eventos suceden constantemente en el navegador.
JavaScript lo que nos permite hacer es escuchar eventos sobre elementos seleccionados. Cuando escuchamos el evento que esperamos, se ejecuta la función que definimos en respuesta. 
A esta escucha se la denomina "addEventListener".
*/

//--- ¿CÓMO DEFINIR EVENTOS EN JS? ---//
//--- OPCIÓN 1 ---//
/*
El método addEventListener() permite definir qué evento escuchar sobre cualquier elemento seleccionado.
El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.

<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Coder House</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.addEventListener("click", respuestaClick)
      function respuestaClick(){
        console.log("Respuesta evento");
      }
    </script>
  </body>
</html>
*/

//--- OPCIÓN 2 ---//
/*
Emplear una propiedad del nodo para definir la respuesta al evento. Las propiedades se identifican con el nombre del evento y el prefijo on.
También es posible emplear funciones anónimas para definir los manejadores de eventos.

<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Coder House</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.onclick = () =>{console.log("Respuesta 2")}
    </script>
  </body>
</html>
*/

//--- OPCIÓN 3: SINTAXIS ---//
/*
Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML. La denominación del atributo es idéntica al de la propiedad de la opción 2 (prefijo on).

<input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />

La función puede declararse entre la comillas o bien tomarse una referencia existen en el script.
*/
//001835