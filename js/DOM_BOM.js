
"use strict"

/*           DOM (DOCUMENT OBJECT MODEL) Y BOM (BROWSER OBJECT MODEL) 

Trabajaremos con el archivo indexV2.html para esta seccion

QUES ES DOM:
Una de las tareas habituales en la programación de aplicaciones web con JavaScript consiste en la manipulación de las
páginas web. De esta forma, es habitual obtener el valor almacenado por algunos elementos (por ejemplo los elementos de
un formulario), crear un elemento (párrafos, <div>, etc.) de forma dinámica y añadirlo a la página, aplicar una animación
a un elemento (que aparezca/desaparezca, que se desplace, etc.). Todas estas tareas habituales son muy sencillas de reali-
zar gracias a DOM. Sin embargo, para poder utilizar las utilidades de DOM, es necesario "transformar" la página original. 
Una página HTML normal no es más que una sucesión de caracteres, por lo que es un formato muy difícil de manipular.
Por ello, los navegadores web transforman automáticamente todas las páginas web en una estructura más eficiente de mani-
pular. Esta transformación la realizan todos los navegadores de forma automática y nos permite utilizar las herramientas
de DOM de forma muy sencilla. El motivo por el que se muestra el funcionamiento de esta transformación interna es que
condiciona el comportamiento de DOM y por tanto, la forma en la que se manipulan las páginas. DOM transforma todos los
documentos XHTML en un conjunto de elementos llamados nodos, que están interconectados y que representan los contenidos
de las páginas web y las relaciones entre ellos. Por su aspecto, la unión de todos los nodos se llama "árbol de nodos".

TIPOS DE NODOS O METODOS DEL DOM
La especificación completa de DOM define 12 tipos de nodos, aunque las páginas XHTML habituales se pueden manipular
manejando solamente cuatro o cinco tipos de nodos:

--DOCUMENT: nodo raíz del que derivan todos los demás nodos del árbol.
--ELEMENT: representa cada una de las etiquetas XHTML. Se trata del único nodo que puede contener atributos y el único del que pueden derivar otros nodos.
--ATTR: se define un nodo de este tipo para representar cada uno de los atributos de las etiquetas XHTML, es decir, uno por cada par atributo=valor.
--TEXT: nodo que contiene el texto encerrado por una etiqueta XHTML.
--COMMENT: representa los comentarios incluidos en la página XHTML.
--Los otros tipos de nodos existentes que no se van a considerar son DocumentType, CDataSection, DocumentFragment,
 Entity, EntityReference, ProcessingInstruction y Notation.

 TODOS LOS METODOS EN: https://www.arkaitzgarro.com/javascript/capitulo-13.html
*/

//   GET ELEMENT BY ID()--TagName()--ClassName() Accediendo a un elemento a traves de su id,class,tag

let title = document.getElementById('title');
console.log(title);
title.textContent = 'DOM Y BOM CON JAVA SCRIPT'  //Gracias a textContent podemos modificar partes de html, en este caso el
//h1 de la pagina
var todosLosParrafos = document.getElementsByTagName('p');//Este metodo nos permite identificar todos los elementos con 
//la etiqueta <p>
var parrafoPorClase = document.getElementsByClassName("parrafo");//Este metodo indentifica a traves de la clase, y 
//devuelve un arreglo.
// Si posteriormente queremos acceder a uno de los elementos de dicho array, usaremos [] y la posicion del arreglo
var chooseParrafo =document.getElementsByClassName("parrafo")[1].textContent;//Se muestra el segundo parrafo


//   QUERY SELECTOR y QUERY SELECTOR ALL  Accediendo a traves de un selector CSS

const parrafo = document.querySelector('.parrafo');
console.log(parrafo);
//console.log('Texto del primer parrafo: ' + parrafo.textContent);

//Si queremos ver el otros parrafos del text usaremos lo siguiente

const parrafs = document.querySelector('.parrafo:nth-child(3)');//Tercer parrafo
//console.log(`Texto del parrafo: ${parrafs.textContent}`);

//Podemos acceder a un elemento dentro de otro elemento (mi ejemplo de html <p>....<span>hola</span>.....</p>);
const ele_parrafo = parrafo.querySelector('span');
//console.log('Texto de elemento span: ' + ele_parrafo.textContent);

//O tambien podemos hacer lo siguiente y obtenemos el mismo resultado(En este caso a traves del id del div)
const span = document.getElementById('textos').querySelector('span');
//console.log(span)

//Si usamos QUERY SELECTOR ALL nos devuelve un nodeList 

const parrafos = document.querySelectorAll('.parrafo');
console.log(parrafos);

/*Vemos un ejemplo de como modificar el color de los textos, vemos que cada uno se selecciona como si fuese un array
(aunque un nodeList no es un Array). No es recomendable modificar los estilos con JS excepto en algunos casos,
esto solo es un ejemplo  */
parrafos[0].style.color = 'red';
parrafos[1].style.color = 'blue';
parrafos[2].style.color = 'red';
parrafos[3].style.color = 'blue';

//Para trabajar con querySelectorAll en forma de Array usamos FROM()

const parrafosArray = Array.from(document.querySelectorAll('.parrafo'));

parrafosArray.map(pA=>pA.style.color = 'black');

/*                  ATRIBUTOS Y CLASES


               GET ATTRIBUTE Y SET ATTRIBUTE                                                */

const miTitulo = document.getElementById('titulo');
const name = document.getElementById('input');

console.log(`Funcion getAttribute de name('type'): ${name.getAttribute('type')}`);
name.setAttribute('type', 'number'); //Con esta funcion podemos cambiar el tipo de atributo en html, por ejemplo tipo
//number, radio, date..
console.log(`Funcion getAttribute de name('type'): ${name.getAttribute('type')}`);

/*                  CLASS LIST

Vamos a trabajar con las siguientes funciones:
-ClassList.add('class', 'class', '...)
-ClassList.remove('class', 'class', '...)
-ClassList.constains('class)
-ClassList.replace('old class', 'new class')               */

const tittuul = document.getElementById('titulo');
const namme = document.getElementById('input');

tittuul.classList.add('TiTuLo', 'TITLE'); //Agregamos dos clases al titulo de html
tittuul.classList.remove('TiTuLo')//Las eliminamos

console.log(namme.classList.contains('input'))//Preguntamos si el elemento contiene una clase y devuelve true o false
tittuul.classList.replace('TITLE', 'new-class-add-by-me')
console.log(tittuul)

const botbot = document.getElementById('boToN');



/*          USO DE ATRIBUTOS DIRECTOS            

Los siguientes son los mas usados:   */

const tit = document.getElementById('titulo');
const nam = document.getElementById('input');

console.log(tit.id)
console.log(tit.className)
console.log(tit.innerHTML)//devuelve una lista de todas las etiquetas de un elemento y texto si existe
console.log(tit.textContent)//devuelve el texto del elemento
console.log(nam.value)




//     ADD EVENT LISTENER()

/*Esta es la forma que tiene de escuchar peticiones o acciones JavaScript de html, su sintaxis es muy secilla 

Element.addEventListener('event', Callback)

Vamos a ver diferentes ejemplos:    */

const botonSport = document.getElementById("botonSport"); 
botonSport.addEventListener('click',()=>{  
    window.location.href = "http://www.sport.es";
})

var buto = document.getElementById("botoon");

//Aqui creamos el addEventListener()y cada vez que pulsemos el boton se ejecutaran las siguientes ordenes
buto.addEventListener('click',()=>{
  console.log(todosLosParrafos)
  console.log(parrafoPorClase)
  buto.style.color = "blue"; //aqui hacemos cambiar el boton de color y tamanyo
  buto.style.background = "orange";
  buto.style.width = "500px";
});

//Otro ejemplo de como podemos trabajar con el dom es el metodo createElement()

const zonaFoto = document.getElementById('messi')
const tituloFo = document.getElementById('TituloFotos')
const aplausos = document.getElementById('audio')

const PRESENTE = document.createElement('label')
PRESENTE.className = 'presente'
PRESENTE.textContent = 'PRESENTE!'
tituloFo.appendChild(PRESENTE)

const FUTURO = document.createElement('label')
FUTURO.className = 'futuro'
FUTURO.textContent = 'FUTURO!!!'


const fotoMessi = document.createElement("img")
fotoMessi.src = "fotos/messi2.jpg";
fotoMessi.width = 550;
zonaFoto.appendChild(fotoMessi);

const fotoAnsu = document.createElement('img')
fotoAnsu.src = 'fotos/ansu.jpg'
fotoAnsu.width = 550

zonaFoto.addEventListener('mouseover',()=>{
    tituloFo.children[0].replaceWith(FUTURO)
    zonaFoto.children[0].replaceWith(fotoAnsu)
    aplausos.src = 'sonidos/aplausos.mp3'
    aplausos.play()
    
    zonaFoto.addEventListener('mouseleave',()=>{
    tituloFo.children[0].replaceWith(PRESENTE)
    zonaFoto.children[0].replaceWith(fotoMessi)
    aplausos.src = 'sonidos/chiflidos.mp3'
    aplausos.play()
    
})
})
window.addEventListener('click',()=>{ 
    aplausos.pause()
   })

/* Propiedades y metodos del BOM

QUE ES BOM
Mediante BOM, es posible redimensionar y mover la ventana del navegador, modificar el texto que se muestra en la barra
de estado y realizar muchas otras manipulaciones no relacionadas con el contenido de la página HTML.El mayor inconvenien-
te de BOM es que, al contrario de lo que sucede con DOM, ninguna entidad se encarga de estandarizarlo o definir unos
mínimos de interoperabilidad entre navegadores.

Algunos de los elementos que forman el BOM son los siguientes:

-Crear, mover, redimensionar y cerrar ventanas de navegador.
-Obtener información sobre el propio navegador.
-Propiedades de la página actual y de la pantalla del usuario.
-Gestión de cookies.
-Objetos ActiveX en Internet Explorer.

El BOM está compuesto por varios objetos relacionados entre sí. 
El siguiente esquema muestra los objetos de BOM y su relación:

*WINDOWS===>DOCUMENT===>ANCHORS/FORMS/IMAGES/LINKS/LOCATION
        ===>FRAMES
        ===>HISTORY
        ===>LOCATION
        ===>NAVIGATOR
        ===>SCREEN

 TODOS LOS METODOS: https://www.arkaitzgarro.com/javascript/capitulo-14.html  

    Algunos ejemplos de metodos del DOM   */
  
   const muestraMensaje = ()=> {
    console.log("Han transcurrido 3 segundos desde que he cargado la pagina");
  }
   
  setTimeout(muestraMensaje, 1000); // el setTimeout que ya habiamos visto

  var botona = document.getElementById("botonazo");

  botona.addEventListener('click', function(){
   
        document.title = "Aprendiendo JS";    //Cmbiar el titulo de la pagina dinamicamente
    });

    console.log(window.location.href);//Mostrar la url de la pagina actual
    console.log(window.navigator.language);//Muestra que idioma usa el navegador
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);//Medidas totales disponibles para las ventanas


//        THIS en JS

const BOT = document.getElementById('pulsar')

//Aqui usaremos this. con algun metodo de ejemplo
BOT.addEventListener("click",()=>{
    console.log(this.innerWidth); //Nos el tamanyo de la ventana
    console.log(this.navigator);//Info acerca de mi navegador
})

/* Pero si ejecutamos un this pelado, nos aparece en consola una lista enorme de metodos,
algunos de ellos muy utiles como el this.location */

BOT.addEventListener("click",() =>{
    console.log(this);
//this.location = "http://www.google.com";
 }) 


 /*          EVENTOS EN JS

 Los eventos en JS son todas las interacciones que hay dentro de una pagina web, pulsar una tecla, salir de la pagina,
mover el raton, pulsar un boton, ver un video, etc....Vamos  a ver algunos ejemplos
*/


 //Eventos de MOUSE o RATON 

 const boton = document.querySelector('.boton');

 boton.addEventListener("click", () =>{
    console.log("Has pulsado el boton");
    boton.classList.add('rosa');
    if(boton.classList.contains('marron')){
        boton.classList.remove('marron');
    } 
});
boton.addEventListener('dblclick', ()=>{
    console.log('Has dado doble click')
    boton.classList.add('marron')});

boton.addEventListener('mousedown', ()=>{
    boton.classList.add('crecer')
    console.log('ESTAS MANTENIENDO EL BOTON PULSADO')
    setTimeout(()=>{
        boton.classList.remove('crecer')
    },1000)
})    

boton.addEventListener("mouseover", function(){
    console.log("El puntero esta sobre el boton"); 
})
boton.addEventListener("mouseout", () =>{
    console.log("El puntero esta fuera del boton"); 
})


//Eventos de TECLADO   
/*

window.addEventListener("keydown", (event)=>{
    console.log("Estas pulsando la tecla " + String.fromCharCode(event.keyCode)); 
})
window.addEventListener("keypress", ()=>{
    console.log("Tecla pulsada"); 
})
window.addEventListener("keyup", ()=>{
    console.log("Tecla liberada"); 
})
*/
//Evento CARGA DE DOCUMENTOS

window.addEventListener("load", function(){
    console.log("El contenido de la ventana se ha cargado"); 
})


//Eventos MULTIMEDIA

//Con el video de la pagina HTML lo vamos a ir comprobando en consola 

var video = document.querySelector(".miVideo");

video.addEventListener("play", function(){
  console.log("El video se ha iniciado"); 
})
video.addEventListener("ended", function(){
    console.log("El video ha finalizado"); 
})
video.addEventListener("seeking", function(){
    console.log("Se esta buscando en el video el minuto exacto para reproducir"); 
}) 

//      TRABAJANDO CON EL OBJETO EVENT

const input = document.getElementById('input');
const form = document.getElementById('form');

//Con este ejemplo vemos que estamos trabajando sin el objeto event y simplemente se imprime el contenido que 
//se escribe en el input del html

input.addEventListener('keyup', ()=>{
    console.log(input.value);  
})
input.addEventListener('keyup', (ev)=>{
    console.log(ev);  //ev('es' == event), ahora se nos muestra en consola una larga lista de informacion del evento
    //despues de pulsar una tecla, incluidos muchos metodos que pueden ser muy utiles
})
input.addEventListener('keyup', (ev)=>{
    console.log(ev.code);
})

//          TARGET        ES LA FUENTE DE INFORMACION MAS EXTENSA SOBRE UN EVENTO CUANDO TRABAJAMOS CON ESTOS


const teclado =document.getElementById('gallery');

teclado.addEventListener('click', (ev)=>{
    console.log(`Has pulsado la tecla ${ev.target.textContent}`) //Con event.target.contentText podemos conocer exactamente donde se esta
    // pulsando en la pantalla y mostrar la informacion referente a ello como en este caso una tecla de calculadora
})


/*      TEMPORIZADORES o TIMERS en JS

        

/*    CREACION E INSERCION DE ELEMENTOS HACIA HTML

-Crear un elemento ==> document.creatElement('elemento')
-Escribir texto en un elemento ==> element.textContent = 'texto'
-Escribir etiquetas en elementos html ==> element.innerHtml = codigo html

-Agregar un elemento al DOM ==> parent.appendChild('element')

-Fragmentos de codigo ==> document.createDocumentFragmetn()
*/

const arrDias = ['lunes', 'martes', 'miercoles' ,'jueves', 'viernes', 'sabado', 'domingo'];

const titulo2 = document.getElementById('titulo2')
const UL = document.getElementById('ul-dias')
const select = document.getElementById('select-dias')

//Ejemplo de como insertar un texto en una lista:

const item = document.createElement('li');//Cremos un elemento de tipo lista
item.textContent = 'lunes' //Le asiganmos un texto
UL.appendChild(item) //Lo insertamos donde tenemos la etiqueta <ul> 

//Ejemplo de como insertar una etiqueta 

titulo2.innerHTML = '<span>Crear e insertar elementos desde js<span>';
console.log(titulo2); //Al ejecutar la pagina vemos que dentro del titulo han aparecido las etiquetas <span>

//Ejemplo de como insertar una lista de array a un elemento <ul> de html con createDocumentFragment()

const fragment = document.createDocumentFragment()

for(let dia of arrDias){
 const semana = document.createElement('li')
 semana.textContent =  dia
 fragment.appendChild(semana)
 }
 UL.appendChild(fragment)

 //Ejemplo de como insertar una lista de array a un elemento <select> de html con createDocumentFragment()

 const fragment2 = document.createDocumentFragment()

for(let dia of arrDias){
 const semana = document.createElement('option')
 semana.setAttribute('value', dia.toLowerCase())
 semana.textContent =  dia
 fragment.appendChild(semana)
 }
 select.appendChild(fragment)


 /*   DOM TRAVERSING     Recorriendo elementos de html

 * Nodos PADRES / PARENTS (Nodos que indican de donde desciende):

 -parentNode ==> Devuelve el nodo padre
 -parentElement ==> Devuelve el nodo elemento padre

 nota: Los nodos de tipo document o documentFragmet nunca van a tener un elemento padre, parentNode devolvera siemrpe null

 * Nodos HIJOS / CHILDREN (Nodos que descienden de un padre)

 -childNodes ==> Devuelve todos los nodos hijos
 -children ==>Devuelve todos los nodos elementos hijos en un nodeList
 -firtsChild ==> Devuelve el primer nodo hijo
 -firtsElementChild ==> Devuelve el primer nodo elemento hijo
 -lastChild ==> Devuelve el ultimo nodo hijo
 -lastElementChid ==> Devuelve el ultimo nodo elemento hijo
 -hasChildNodes() ==> Devuelve true o false dependiendo si tiene hijos o no

 * Nodos HERMANOS / SIBLINGS (Nodos al mismo nivel)

 -nextSibling ==> Devuelve el siguiente nodo hermano
 -nextElementSibling ==> Devuelve el seguiente nodo elemento hermano
 -previousSiblimg ==> Devuelve el nodo hermano previo
 -previousElementSibling ==> Devuelve el nodo elemento hermano previo

 * Nodo closest(selector) ==> Devuelve el nodo mas cercano que cumpla con el selector...Todavia esta en fase 
 experimental
*/

const parent = document.getElementById('parent');

console.log('LISTA DE EJEMPLOS PADRES E HIJOS (ELEMENTOS)')
console.log(`ParentNode:`)
console.log(parent.parentNode);
console.log('ParentElement: ');
console.log(parent.parentElement);
console.log('ChildNodes: ')
console.log(parent.childNodes);
console.log('Children: ')
console.log(parent.children);
console.log('FirstChild: ')
console.log(parent.firstChild);
console.log('FirstElementChild: ')
console.log(parent.firstElementChild);
console.log('LastChild: ');
console.log(parent.lastChild);
console.log('LastElementChild: ')
console.log(parent.lastElementChild);
console.log('hasChildNodes: ')
console.log( parent.hasChildNodes());
console.log('NextSibling: ')
console.log(parent.nextSibling);
console.log('NextElementSibling: ')
console.log(parent.parentElement.nextElementSibling); //Buscamos con parentElement para referenciarnos desde <nav>
console.log('PreviousSibling: ');
console.log(parent.parentElement.previousSibling);
console.log('previousElementSibling: ');
console.log(parent.parentElement.previousElementSibling);


//         INSERTAR Y ELIMINAR ELEMENTOS DE HTML

const listado = document.getElementById('lis')

//  INSERTANDO ELEMENTO CON APPEND CHILD()  (Visto anteriormente, el elemento siempre se agrega al final)

const newE = document.createElement('li')
newE.textContent = 'My name is Sergio'
listado.appendChild(newE)

//  INSERTANDO ELEMENTO CON INSERT BEFORE()

listado.insertBefore(newE, listado.children[0]) //Con este metodo podemos colocar el un nuevo elemento en la posicion
//deseada gracias a que children[] nos devuelve una nodeList de los hijos de la referencia

//INSERTANDO ELEMENTO CON INSERT ADJACENT ELEMENT()

const n1 = document.createElement('li')
n1.textContent = 'I am 31';
listado.insertAdjacentElement('beforebegin', n1); //Inserta un hermano anterior
const n2 = document.createElement('li')
n2.textContent = 'Next month I will come back to Spain';
listado.insertAdjacentElement('afterbegin', n2); //Inserta despues de empezar un hijo nuevo
const n3 = document.createElement('li')
n3.textContent = "I've been living in Leeds around 1 year and 6 months";
listado.insertAdjacentElement('beforeend',n3)//Inserta un ultimo hijo
const n4 = document.createElement('li')
n4.textContent = 'I can not wait to see my family again';
listado.insertAdjacentElement('afterend',n4) //Inserta un hermano a continuacion


// REEMPLAZAR UN HIJO CON OTRO 


const n5 = document.createElement('li')
n5.textContent = "I've learned a lot of things about cooking";
listado.replaceChild(n5,listado.children[3])

// MANIPULACION DE ELEMENTOS CON METODOS JQUERY

//Estos metodos son similares a insertAdjacentElement

const listado2 = document.getElementById('lica')

const m1 = document.createElement('li')
m1.textContent = "Before()"
listado2.before(m1) //Inserta un hermano anterior 

const m2 = document.createElement('li')
m2.textContent = 'prepend()'
listado2.prepend(m2) //Inserta despues de empezar un primer hijo

const m3 = document.createElement('li')
m3.textContent = 'append()'
listado2.append(m3) //Inserta un hijo nuevo al final

const m4 = document.createElement('li')
m4.textContent = 'after()'
listado2.after(m4) //Inserta un hermano a continuacion 

//REEMPLAZAR ELEMENTO CON REPACLE WITH()

const m5 = document.createElement('li')
m5.textContent = 'replaceWith()'

listado2.children[1].replaceWith(m5)

//CLONAR Y ELIMINAR 

listado2.append(listado2.cloneNode(true)) //Indicamos donde queremos clonar la lista (en este caso append) y despues
//usamos el metodo cloneNode(true)

//listado2.remove() Elimina toda la lista
listado2.removeChild(listado2.children[2]) //Elimina el hijo de la posicion indicada

//  OBJETOS NATIVOS Y TIMERS 

//Ventanas de alertas, introduccion de datos y confirmacion. No se suelen usar ya que estas no pueden tener estilos CSS
//asi que se usan ventanas modales (creadas desde cero) pera estos cometidos, sin embargo su uso es igualmente valido

/*
-ALERT
alert('Texto introducido erroneo')

-PROMPT 
prompt('Escribe tu nombre') 

-CONFIRM()         */

const vid = document.getElementById('miVideo');

vid.addEventListener("ended", ()=>{
let result = confirm("Desea reproducir de nuevo?"); //Usamos la palabra confirm  y asi 
//se muestra la ventana de confirmacion
if(result){
    vid.play();
}else{
    window.location = "index.html"
}
}) 
//- Objeto    CONSOLE             (nota: con clg y clog tenemos los snippers de console.log)

console.log('Hola');
console.dir('Soy similar a console.log')
console.error('ERROR!!!')//Nos imprime el mensaje con simbolo de error
const persona = [{nombre:'Sergio', apellido: 'Berdiell', edad: 31}]
console.table(persona) //nos imprime una tabla del array con el objeto persona 


//-Objeto LOCATION

console.log(`Location.href: ${location.href}`); //Nos da la url de mi pagina
//Ademas nos sirve para redirigirnos a otra pagina web desde JS (location.href = "http://www.3djuegos.com")
console.log(`Location.protocol: ${location.protocol}`) //Nos indica si la pagina es un http, file etc..
console.log(`Location.host: ${location.host}`); // Nos dice el dominio de la pagina
console.log(`Location.pathname: ${location.pathname}`); //Nos dice la ruta hasta el archivo html
//console.log(`Location.reload: ${location.reload()) recarga la pagina, se suele usar con un if 

//-Objeto HISTORY

/*  history.back() Nos retorna a la pagina anterior 
    history.go(1 o -2) La primera opcion nos manda a un pagina adelante, la segunda dos hacia atras, podemos poner los 
    valores al gusto
    history.forward() Nos manda a la siguiente pagina 
    history.lenght Nos dice el numero de paginas abiertas en nuestro historial en esa misma sesion
    */

//-Objeto    DATE

//Todos los metodos con ejemplos en el siguiente link: http://w3schools.com/jsref_obj_date.asp


const date = new Date();

console.log(date) //Fecha y hora del dia
console.log(date.getDate()); //Devuelve el dia del mes del 1/31
console.log(date.getDay()); //Devuelve el dia de la semana del 0 domingo / 6 sabado
console.log(date.getHours()); //Devuelve la hora sin los minutos 0/23
console.log(date.getMonth()); //Devuelve el mes del year 0 diciembre / 11 noviembre
console.log(date.toTimeString()); //Devuelve una string de la hora completa 


//setInterval o setTimeout

/*Vamos a explicar el siguiente ejercicio:
-Creo una funcion llamada temporizador, esta usara setInterval e invoca la funcion setColor(), cada 1 segundo
-Posteriormente creo la funcion setColor(); esta asigna la varible pagina al body de nuestro html y luego lo modifica
de colores
-Ademas creo otra funcion   llamada white que llama a la funcion blanco(); cada 6 segundos
-Al igual que antes creo aparte la funcion blanco(); esta modifica el background del body a blanco
-Por ultimo hay otra funcion que su labor es detener el proceso de modificar el color del body, dejando este en el
ultimo color (Como funciona por tiempo, el color puede ser azul o verde), para eso usamos clearInterval() de tempori-
zador, la funcion que empieza todo
*/

/*
const  temporizador = setInterval(()=>{
setColor();
}, 1000);

let setColor = () =>{
    var pagina = document.body
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue"? "green": "blue";
}
var white = setInterval( ()=>{
blanco();
},6000);

let blanco = ()=>{
var pagina2= document.body;
pagina2.style.backgroundColor = pagina2.style.backgroundColor == "blue"? "white": "white";
}
let stopColor = setTimeout( ()=>{
clearInterval(temporizador)
},5000)
*/
//Ejemplo de un cronometro usando el addEventListener y un timer

const btn =document.getElementById('iniciar')
const bt =document.getElementById('parar')
const segu = document.getElementById('seg')
const min = document.getElementById('min')
const hor = document.getElementById('hor')
let segundos = 0
let minuts = 0
let horas = 0
let cronometro;
let activo = false

const reiniciar = ()=>{
    if(activo == true){
        clearInterval(cronometro)
        segundos = 0
        minuts = 0
        horas = 0
            }
     if(activo ==false && segundos != 0 || minuts != 0 || horas !=0){
         clearInterval(cronometro)
         segundos = 0
         minuts = 0
         horas =0}
         segu.textContent = segundos
         min.textContent = minuts
         hor.textContent =horas
     }
        
const pausar = ()=>{
    if(activo == true)
    clearInterval(cronometro)
    activo =false
}
const iniciar = ()=>{
    if(activo == false){
    cronometro = setInterval(()=>{
    segundos++
    activo = true
    if(segundos == 60){
    segundos = 0
    minuts ++}
    if(minuts == 60){
        minuts = 0
        horas++
    }
    if(horas == 24){
        horas = 0
    }
    segu.textContent = segundos
    min.textContent = minuts
    hor.textContent = horas
    },1000)
    }}

btn.addEventListener('click', ()=>{
    iniciar()
})
btn.addEventListener('click', ()=>{
    pausar()
})
bt.addEventListener('click', ()=>{
    reiniciar()
})
        

           

/*        VENTANAS EN JS

      Ventana de confirmacion (Ejemplos con videos) */



//       Ventana de insercion de datos 

const vid1 = document.querySelector('.dj');

vid1.addEventListener("ended", function(){
let email = prompt("Escribe tu email para continuar viendo mas videos", "data@info.com")//Usamos la palabra prompt para la 
//funcion anonima y asi nos muestra la ventana con su input, si no mandamos nada nos regresa null. Por lo tanto 
//evaluamos con un if else 
if(email == null || email == ""){
    console.log("Sin datos del usuario");
}else{
    console.log(email);
    alert("Email confirmado! \nPuede seguir navegando")
}
})



