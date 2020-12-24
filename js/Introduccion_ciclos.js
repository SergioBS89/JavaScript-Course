"use strict" //Modo estricto, nos ayuda a detectar los fallos en el codigo Js dentro de la consola

//alert("Hola desde un archivo externo")

/*En JavaScript podemos usar la consola del navegador web para ejecutar nuestro proyecto y analizar si funciona 
correctamente nuestro codigo
*/
console.log('hola consola')

//Creamos ciertas variables con ejemplos:

var miNombre = "Sergio";
console.log("Mi nombre es " + miNombre);

/*Cuando creamos una variable dentro de un bloque o funcion podemos usar la palabra reservada let para usar esa variable 
unicamente en ese mismo bloque, arriba creo la varible miNombre = sergio (variable general) y dentro del bloque la vuelvo
a crear pero con let y no var y cambiando el valor de esta a tamara, mi variable principal sigue siendo sergio pero si 
llamamos al metodo saludo() vemos en la consola que imprime el nombre de Tamara.
*/
var myname = "Monica";

function saludo(){
    let myname = "Celia";
    return myname;
}
console.log(saludo());
console.log(myname);
//En JS tenemos variables constantes, que no pueden modificar su valor 

const pi = 3.1416;
// pi = 34; Nos manda error

//Creo dos variables, una de tipo String y otro del tipo integer y creo un metodo para sumar los valores de ambas
var numero = 100;
var num_string = "100";

function sumar(){
    var resultado = numero + num_string  
    var resultado2 = numero + Number(num_string); // Con la palabra reservada de Number podemos pasar cadenas a enteros
    console.log(resultado)
    console.log(resultado2)
}
sumar()
 

//        FECHAS con js

var fecha = new Date();

//Podemos usar otros metodos para obtener informacion

console.log("Hoy es dia de mes:" + fecha.getDate());
console.log("Hoy es dia de la semana:" + fecha.getDay());
console.log("Hora del dia:" + fecha.getHours());

//        SYMBOL

//En JS existen los Symbols que son asiganciones que damos a ciertas variables para conocer el estado de algo 

var estado_1 = Symbol("En desarrollo");
var estado_2 = Symbol("Acabados");

//Ademas cada simbolo es diferente (valor distinto) al otro aunque no tengo ningun argumento 

var ambiente = Symbol();
var ambiente2 = Symbol();

function Comparar() {
if (ambiente === ambiente2){
    return true;
}else{
    return false;
}}
console.log("Comparacion de simbolos: " + Comparar());

//                 JSON

//En JavaScript los objetos pueden ser tratados con JSON => Java Script Object Notation 

var persona = { nombre: "Sergio", apellido: "Berdiell"};

//Ahora usare un metodo de Json para coger el objeto persona y pasarlo a String

var personaJson = JSON.stringify(persona);

//Ahora lo recupero y lo vuelvo a trabajar como un Objeto

var newPersona = JSON.parse(personaJson);

/*
JSON es el acrónimo para JavaScript Object Notation, y aunque su nombre lo diga, no es necesariamente
parte de JavaScript, de hecho es un estándar basado en texto plano para el intercambio de información,
por lo que se usa en muchos sistemas que requieren mostrar o enviar información para ser interpretada
por otros sistemas, la ventaja de JSON al ser un formato que es independiente de cualquier lenguaje de
programación, es que los servicios que comparten información por éste método, no necesitan hablar el
mismo idioma, es decir, el emisor puede ser Java y el receptor PHP, cada lenguaje tiene su propia librería
para codificar y decodificar cadenas de JSON.
JSON puede representar cuatro tipos primitivos(cadenas, números, booleanos, valores nulos) y dos tipos
estructurados(objetos y arreglos). Su principal funcion es el almacenamiento de datos */

//      OPERADORES en js

//Operadores aritmeticos

var suma; //   SUMA +
var resta; //  RESTAR -
var multip; // MULTIPLICAR *
var dividir;// DIVIDIR /
var resto; //  RESTO %
var incremento; // ++
var decremento; // --

//Operadores relacionales

var igual_que; // ==
var mayor_que; // >
var menor_que;// <
var mayorOigual_que;// >=
var menorOigual_que;// <=
var diferente_que;// !=

//Operadores logicos 
var num5 = 20;
var num4 =30;
var num6 = 90;

var y_and; // &&
var o_or; // ||  
var negacion_not //

y_and = (num4 >num5 && num6 > num5);
console.log("La comparacion de and es cierta?: " + y_and);

o_or = (num4 < num5 || num6 < num5);
console.log("La comparacion  de or es cierta?: " + o_or);

negacion_not = !(num6 < 80);
console.log("Num6 no es menor que 80?: " + negacion_not);

//Existen las operaciones con TERNARIOS para simplificar codigo, pero no se recomienda si el codigo es complejo

var c = 40;
var d = 60;

var resul = c >= d ? "SI es mayor " : "NO es mayor";
console.log(resul);

//Para conocer el tipo de algun elemento en JS tenemos el metodo tipeOff()

var cadena = "Hola";
var number = 222;
var boolean = true;
var coche = {
    marca: "Audi", modelo: "A3", color: "negro"
}
console.log(typeof cadena);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof coche);

/*    EL OBJETO .MATH 

PROPIEDADES:
Math.E
Math.PI

METODOS:
Math.abs(x) ==> Devuelve el valor absoluto de x
Math.ceil(x) ==> Devuelve el entero mas grande, mayor o igual que un numero
Math.floor(x) ==> Devuelve el entero mas pequnyo, menor o igual que un numero
Math.pow(x,y) ==> Devuelve la potencia de x elevado a y
Math.random() ==> Genera un numero al azar entre 0 y 1
Math.round(x) ==> Devuelve el valor de un numero redondeado al entero mas cercano
Math.sign(x) ==> Devuelve el signo de x, que indica si es positivo, negativo o cero
Math.sqrt(x) ==> Devuelve la raiz cuadrada de x

*/

console.log(Math.E);//Muestra el numero Euler(matematicas avanzadas)
console.log(Math.PI);//Muesta el numero PI

console.log(`El metodo abs() retorna el valor sin importar que el valor que indicamos es positivo o negativo:
${Math.abs(5)}
${Math.abs(-5)}`);
//-----------------------------
console.log(`El metodo ceil() retorna el valor del numero redondeando al entero mayor mas cercano:
${Math.ceil(5.55)}  
${Math.ceil(653.111)}`);
//-----------------------------
console.log(`El metodo floor() retorna el valor del numero redondeando al entero menor mas cercano:
${Math.floor(5.55)}  
${Math.floor(653.111)}`);
//-----------------------------
console.log(Math.pow(2,4));//2 elevado a 4 (2*2*2*2)
//-----------------------------
console.log(Math.round(Math.random()*(10 - 3)+3)); //Genera un numero aleatorio entre 3 y 7 y sera entero porque usamos el
//metodo round() al inicio
//-----------------------------
console.log(`El metodo round() retorna el valor del numero redondeando al entero mas cercano:
${Math.round(8.55)}  
${Math.round(6.11)}`);
//-----------------------------
console.log(`El metodo sign() retorna 1/-1/0 = postivo/negativo/cero:
${Math.sign(-5)}  
 ${Math.sign(653.111)}`);
//----------------------------
console.log(Math.sqrt(5)); //Retorna la raiz cuadrada de 5

console.log('---------------------------------')


//         TRABAJANDO CON STRINGS

const chain = "Hola Mundo";


//          PROPIEDADES

//.length -> Devuelve la longitud de la cadena

console.log(chain.length)

/*          Métodos

Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.

*toUpperCase() -> Devuleve la cadena a mayúsculas  */

console.log(chain.toUpperCase());

const cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus)

// *toLowerCase() -> Devuelve la cadena a minúsculas

console.log(cadena.toLowerCase())

// *indexOf(string) -> Devuelve la posición en la que se encuentra el string, si no lo encuentra devuelve -1

console.log(cadena.indexOf('o'))
console.log(cadena.indexOf('Hola'))

//*replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo

console.log(cadena.replace('Mundo','Sergio'))
/*
*substring(inicio [,fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)
Si no se incluye el fin extrae hasta el final.
*/
console.log(cadena.substring(3));
console.log(cadena.substring(3, 7))
/*
*slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás
Si no se incluye el final extrae hasta el final
	(2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera
*/
console.log(cadena.slice(-3));
console.log(cadena.slice(2));
console.log(cadena.slice(0,-2))
/*
trim()-> Elimina los espacios al inicio y al final de la cadena
*/
let cadena2 = 'Hola youtube, estamos trabajando con cadenas';
console.log(cadena2.trim())
/*
--ES6--
startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuleve true o false
*/
console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M',5))
/*
endsWith(valor [,longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuleve true o false
*/
console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('n',8));
console.log(cadena.endsWith('Mundo'))
/*
includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false
*/
console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2))
/*
repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/
let cadena3 = 'Hola';
console.log(cadena3.repeat(3));
console.log('r'.repeat(10))

/*Template Strings*/

let nombre = 'Amara';
let apellido = 'Berdiell';
let edad = 20;
console.log("Hola " + nombre + " " + apellido + ". Tienes " + (edad+1) + " años.");

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);

console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años.`); 
console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años.`);

/*----------------------------------------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------
  ----------------------------------------------------------------------------------------------------------------*/

//        CICLOS O LOOPS 

//CICLO FOR

var listado = [1,2,3,4,5,6,7,8]

for(var i = 0; i < listado.length; i++){
    console.log(listado[i]);
}

//   CICLO WHILE

var password = "hello";//Como esta variable es igual que la condicion del ciclo, el ciclo nunca inicia

while(password != "hello"){
    password = prompt("Escribe un password");
    }
    console.log("Fin del bucle"); 

//CICLO DO WHILE 

/*Mismo ejercicio que con while, la diferencia esque aqui minimo se inicia una vez, porque el do esta antes que while

var password = "hello";

do{
    password = prompt("Escribe un password");

}while(password != "hello");

    console.log("Fin del bucle");   */


var av = 10;
var incremento = 0
do{
    incremento++;
    av--;
    console.log(incremento);

}
while(av > 0);

//Control de ciclos en JS, usamos la palabra reservada continue o break:


//Ejemplo contar numeros impares de una lista
var count;
var quantity = 0;

for(count = 0; count <= 30; count++ ){
    if(count % 2 == 0 ){
        continue;
    }
    quantity++;
}
console.log("Del 1 al 30 hay "+quantity+ " numeros impares");

//Calcular multiplos de 5 

var count2;
var quantity2 = 0;

for(count2 = 0; count2 < 100; count2++ ){
    if(count2 % 5 == 0 ){
        quantity2++;
        continue;
    }
  
}
console.log("En 100 hay "+quantity2+ " multiplos de 5");

//Calcular x multiplos de 10 hasta x cantidad de numeros

var count3;
var quantity3 = 0;

for(count3 = 0; count3 < 10000; count3++ ){
    if(count3 == 50 ){
        break;}
        if(count3 % 10 == 0){
            quantity3++;
        continue;
    }
   
}
console.log("Hasta el Break hay "+quantity3+ " multiplos de 10");

console.log("Te quiero Monica");










