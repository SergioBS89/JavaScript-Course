"use strict"

//        FUNCIONES O METODOS  

/*En JS los metodos o funciones se usan comenzando con la palabra reservada function y son similares a los 
trabajados en java pero con algunos matices*/

//Funcion sin parametros 
function aplaudir(){
    var aplauso = "Un aplauso!!!";
    return aplauso;
}
console.log(aplaudir());

//Funcion con parametros
function unAplausoPara(nombre, apellidos){
    var ole = "Un gran aplauso para " + nombre + " "+ apellidos;
    return ole;
}
console.log(unAplausoPara("Sergio", "Bediell Sanchez"));

// Tambien podemos crear una funcion a partir de una varible

let campeones = (campeon,liga)=>{
    return "El campeon de la liga "+liga+ " es el " + campeon;
}
console.log(campeones("Barcelona", "Santander"));


//Funcion inicializando parametros

function comer(primero = "pasta al pesto", segundo = "filete de ternera", postre = "helado"){
    var menu = "Voy a comer de primero " + primero + ", despues " + segundo + " y de postre " + postre;
    return menu;
}
console.log(comer()); //Se no indico ningun parametro la funcion se inicia con los parametros por defecto
console.log("-------------");
console.log(comer("sopa", "pollo con patatas"));//Aqui modifico dos de los tres parametros
console.log("-------------");
console.log(comer("fidegua", "merluza al horno", "macedonia"));// Finalmente aqui cambio todos los anteriores

console.log("-------------");

//En JS podemos usar los parametros REST (...)

function material(material_a, material_b,...otros_materiales){
    var objetoFabricar = "armario"
    console.log("Para la fabricacion de un " + objetoFabricar + ", necesitamos: " + material_a + " y " + material_b +
    " ademas de " + otros_materiales);
    }
material("madera", "tornillos", " herramientas");
console.log("-------------");
material("madera", "tornillos", " herramientas", " barnices", " lijadora");
console.log("-------------");
material("madera", "tornillos", " herramientas", " barnices", " lijadora", "bisagras", "tiradores");


console.log("-------------");

//Da igual la cantidad de parametros que agregamos, gracias al REST podemos poner tantos como queramos

/*Al igual que con REST usamos (...), en los parametros de una funcion, podemos hacer lo mismo pero en la invocacion o 
llamada de la funcion, eso lo llamamos SPREAD */

function miLista (a, b, c ){

    console.log("Mi lista de compra: ");
    console.log("-" + a);
    console.log("-" + b);
    console.log("-" + c);

}
 var indispensables = [" -jamon ", " -queso"];

 miLista(indispensables, " -mayonesa "); //Si imprimimos esto vemos que el parametro c no esta definido
 console.log("-------------");
 miLista(...indispensables, " -mayonesa")//Ahora si, gracias a que con los SPREAD los parametros se desplazan y se ordenan
 console.log("-------------");

 //Podemos combinar los SPREAD con REST 

 function juegos( a, b , ...others){
     console.log("Mi juego a: "+ a); 
     console.log("Mi juego b: "+ b); 
     console.log("Resto de juegos: " + others); 
 }
var masjuegos = [" Tekken, ", "Gran turismo, ", "Pes "]

juegos(masjuegos, " Virtual tennis"); //Ejemplo sin Spread
console.log("-------------");
juegos(...masjuegos, "Virtual tennis", " God of war", "Call of duty");//Ejemplo con Spread


/*
En JS podemos usar funciones anonimas, esto quiere decir que podemos crear una funcion que en el momento de 
invocarla nos mandara error porque previamente hay que asignarle un valor */

/*                Esto es una funcion anonima, sin el tipo de valor
function(name){     
 return "what's up " + nombre + " how is it going?"; 
} */

//Aqui creo la misma funcion pero esta vez le asigno una variable que sera el nombre de la funcion
var hello = function(name){
    return "What's up " + name + " how is it going?"; 
}
console.log(hello("Sergio"));
//Aqui repito el proceso y le cambio el nombre 
var hi =function(name){
    return "What's up " + name + " how is it going?"; 
}
console.log(hi("Cloud"));

/*        CALLBACKS 

en Js son muy comunes, son funciones que tienen como parametros otros funciones      
ejem: function nombrefuncion (dato 1, dato 2 , funcion , funcion) seria un ejemplo */

const operacioness = (d1, d2, d3,sumarCB,restarCB,multiCB) =>{

    var sumar = d1 +d2 +d3;
    var restar = d1 - d2 - d3;
    var multi = d1 * d2 * d3 ;

    sumarCB(sumar);
    restarCB(restar);
    multiCB(multi);
}

operacioness(20, 10, 5,(rs)=>{
    console.log("Suma: " + rs);
}, (rs)=>{
    console.log("Resta: "+ rs);
}, (rs)=>{
    console.log("Multiplicacion: " + rs);
})

//Mas ejemplos usando los Callbacks con objets

const getUser = (id, cb)=>{
    const user = {
        name : 'Sergio',
        id:id
    }
    if(id == 2) cb('This user does not exist')
    else cb(null,user)
}

getUser(2,(err,user)=>{
    if(err) return console.log(err);
    console.log(`User name is ${user.name}`)
})

console.log('--------------------------------------------');

const Users = [{
    id: 1,
    name: 'Susan'
},{
    id:2,  
    name:'Mari'
},{
    id:3,  
    name:'Viki'
}]
const Emails = [{
    id:1,
    email: 'susan@gmail.com'
},{
    id:2,
    email: 'Mari@gmail.com'
}]

const getUsuarios = (id,cb)=>{
    const usuario = Users.find(usua => usua.id == id)
    if(!usuario)cb(`No existe el usuario con id:${id}`)
    else cb(null,usuario)

}
const getEmail = (user,cb)=>{
    const miEmail = Emails.find(em=> em.id == user.id)
    if(!miEmail)cb(`El usuario ${user.name} no tiene email`)
    else cb(null, {
        id: user.id,
        nombre: user.name,
        email: miEmail.email
    })
}
getUsuarios(2,(err,user)=>{
    if(err)return console.log(err)

    getEmail(user, (err,resp)=>{
    if(err) return console.log(err);
    console.log(resp);
    })
}
)



//Funciones ARROWS en JS => => =>

//Son funciones que simplifican el codigo 

var award = name => "Congratulations " + name + ", you've won a car!";

console.log(award("Tiffany"));

var suMar = (a,b) => "Resultado de suma LAMBDA: "+  (a + b); //Encapsulo la operacion para que no sea String

console.log(suMar(30,70));

//Puede ser muy util usar este tipo de expresion de la siguiente funcion

var generar = (datoA, datoB)=>{
    var datoC = 100;
    return "Suma con lambda de dos datos + dato por defecto: " + (datoA + datoB + datoC);
}
console.log(generar(200,50));

//Tambien es de gran ayuda como mensajes de alerta 

var alerta = () => {
    alert("Soy una alerta con lambda");
}
//alerta();


/*-----------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------*/

 /*         ARRAYS

 Existen dos formas de crear arreglos en JS  */

 var arreglo1 = ["Honda", "Ferrari", "Seat"];
 
 var arreglo2 = new Array("Bmw", "Audi", "Opel");

 //Identificamos a un arreglo con el objeto Array y el metodo isArray()  

 console.log(`Son arreglos?:
- ${Array.isArray(arreglo1)}
- ${Array.isArray(arreglo2)}`);

//Midiendo nuestro arreglo con lenght()

var arre = ["Honda", "Ferrari", "Seat", "Bmw", "Kia", "Hyundai"];
var m1 = arre[0];
var m2 = arre[1];
var m3 = arre[2];
var m4 = arre[3];
var m5 = arre[4];
var m6 = arre[5];

console.log( `Tenemos ${arre.length} marcas en el concesionario, son las siguientes:

-${m1}
-${m2}
-${m3}
-${m4}
-${m5}
-${m6}`);
 console.log("--------------------"); 
 
//Arreglos multidemensionales (arrays dentro de arrays)

var arre_asia = ["Honda", "Kia", "Hyundai"];
var arre_europa = ["Audi", "Ferrari", "Seat"];

var arr_multi = [arre_asia,arre_europa];
console.log(arr_multi);//Imprimimos y vemos que tenemos un array de 2 elementos de tipo arrays 

//Si queremos acceder a los elementos del arreglo multi hacemos los siguiente

console.log(`Lista de elementos en el array de arrays:
  Marcas Asiaticas
-${arr_multi[0][0]}
-${arr_multi[0][1]}
-${arr_multi[0][2]}
  Marcas Europeas
-${arr_multi[1][0]}
-${arr_multi[1][1]}
-${arr_multi[1][2]}
`);
console.log("--------------------"); 

//      MODIFICANDO ARRAYS        agregar y eliminar----push() unshift() pop() shift()

var opArray = new Array("Patatas", "Carne", "Pescado");

opArray.push("Verdura", "Dulces", "Bebida");//Metodo push() agrega elementos al array
console.log(opArray);

opArray.unshift('Vinagre');//Este trabaja de forma inversa que push(), coloca elemento al inicio del array
console.log(opArray);

opArray.pop();//Vemos como con el metodo pop() se elimina el ultimo elemento del array 
console.log(opArray);

opArray.shift();//Este trabaja de forma inversa a pop(), eliminando el primer elemento del array
console.log(opArray);

/*Ademas cabe recordar con con los metodos pop() y shift() podemos asignar los elementos eliminados
a variables:
*/

let A_Array = ["Sergio","quiere", "aprender", "Js"];

var myname = A_Array.shift();
var estudio = A_Array.pop();
console.log('Pasando primer elemento de array a variable:' + myname);
console.log('Pasando ultimo elemento de array a variable:' + estudio);
console.log("---------------------");

/*Tambien tenemos los metodos splice() slice() para eliminar ciertas partes de un arreglo o agregar elementos

Con el metodo splice() tenemos varias opciones:

-Opcion A: Con un solo argumento, splice(A)
-Opcion B: Con dos argumentos, splice(A,B)
-Opcion C: Con tres argumentos, splice(A,B,nuevo elemento)
-Opcion D: Con mas de tres argumentos, splice(A,B, nuevo , nuevo , nuevo.....)
-Opcion E: Con mas de tres argumentos pero argumento B = 0 -- splice(A,0, nuevo, nuevo...)

*/
var array_letrasA = ['a','b','c','d','f','g','h'];
var array_letrasB = ['a','b','c','d','f','g','h'];
var array_letrasC = ['a','b','c','d','f','g','h'];
var array_letrasD = ['a','b','c','d','f','g','h'];
var array_letrasE = ['a','b','c','d','f','g','h'];
console.log(`Array completo:`);
console.log(array_letrasA);

console.log(`Opcion A -slice(2)- Toma como inicio el valor del argumento y borra el resto de array`);
array_letrasA.splice('2');
console.log(array_letrasA);

console.log(`Opcion B -splice(1,3)- Toma como inicio el valor del primer argumento y borra "3" elementos`);
array_letrasB.splice(1,3);
console.log(array_letrasB);

console.log(`Opcion C -splice(2,3,nuevo)- Toma como inicio el valor del primer argumento y borra "3" elementos, ademas
agrega el elemento "nuevo"`);
array_letrasC.splice(2,3,"nuevo");
console.log(array_letrasC);

console.log(`Opcion D -splice(2,3,......)- Toma como inicio el valor del primer argumento y borra "2" elementos, ademas
agrega nuevos elementos`);
array_letrasD.splice(2,3,"nuevo","new","newnew","masNuevo");
console.log(array_letrasD);

console.log(`Opcion E -splice(3,0,.....)- Toma como inicio el valor del primer argumento y borra "0" elementos, ademas
agrega nuevos elementos`);
array_letrasE.splice(3,0,"nuevo","new","newnew","masNuevo");
console.log(array_letrasE);

console.log("---------------------");

/*Con el metodo slice() tenemos 2 opciones:

-Opcion A Con un solo argumento, slice(A)
-Opcion B Con dos argumentos, slice(A,B)
*/

var array_N1 =[1,2,3,4,5,6,7,8];
var array_N2 =[1,2,3,4,5,6,7,8];
console.log("Array completo:");
console.log(array_N1);

console.log(`Opcion A -slice(3)-: Toma los elementos desde la posicion indicada en el argumento hasta el final del array`);
let OP1  = array_N1.slice(3);
console.log(OP1);

console.log(`Metodo slice(2,4): Toma los elementos desde la posicion indicada en el primer argumento hasta la posicion
del segundo argumento, ambos valores se cuentan desde el inicio del array`);
let OP2 = array_N2.slice(2,4);
console.log(OP2);


//DESTRUCTURING (desestructurando) un array para instanciarlo a variables

var arre_des = ["Coche", "Moto", "Barco", "Avion"];

//Si deseamos retirar los elementos de un array y estos asignarlos a diferentes variables, la forma mas sencilla 
//y simple es esta, creamos tantas variables como elementos tiene el arreglo y usamos la siguiente sintaxis

var [vehiculo, vehiculo2, vehiculo3, vehiculo4] = arre_des;

console.log(`
Desestructuracion de un arreglo: 
-${vehiculo}
-${vehiculo2}
-${vehiculo3}
-${vehiculo4}`);

//Recomponemos el arreglo asi de facil 
var array = new Array(vehiculo, vehiculo2, vehiculo3, vehiculo4);
console.log(array);
console.log("---------------------");

//Tambien podemos hacer los mismo con objetos dentro de un array

const personajes =[{
    nombre: 'Cloud',
    edad: 25,
    arma:'Espada'},{
    nombre: 'Barret',
    edad:30,
    arma:'BrazoModificado'},{
    nombre: 'Tifa',
    edad:22,
    arma:'Punyos y patadas'}]
    
    //Asignamos cada propiedad del objeto a una variable y la imprimimos
    const{nombre:nameCloud, edad: yearsCloud, arma:weaponCloud} = personajes[0]
    console.log(nameCloud,yearsCloud,weaponCloud)

    const{nombre:nameTifa, edad: yearsTifa, arma:weaponTifa} = personajes[2]
    console.log(nameTifa,yearsTifa,weaponTifa)
    

//          Metodo join() 

//Finalmente podemos transformar los elementos de un array en String con el metodo join()
var arrayJoin = new Array (12,33,55,44,55,677);
 var a = arrayJoin.join(' ');
 var b = arrayJoin.join('/');
 var c = arrayJoin.join('-');
console.log(`Metodo join() con diferentes espaciadores:
-${a}
-${b}
-${c}`);

console.log("--------------------"); 

// Generacion de arrays con split(), from(), of()

var texto1 = "arriba, abajo, centro, derecha, izquierda";

var split = texto1.split(", ");//Es importante indicar los espacios que hay entre palabras para una buena generacion
// del array, en este ejemplo vamos que entre palabras hay una coma y espacio (", ") 
console.log(split); //Metodo que genera un array de una lista de String

var texto2 = "1,2,3,4,5,6,7,8";
var split2 = texto2.split(",");//En este caso la separacion entre numeros es solo una coma asi que pondremos (",")
console.log(split2);

console.log("--------------------"); 

/*Ahora vamos a ver como crear un arreglo con una lista que tengo creada en index.html gracias a from(), ademas 
con este metodo se pueden crear arrays con NODELIST */


var fromHtml = Array.from(document.querySelectorAll('.comida li')); //Array.from() crea un array del archivo html 
// con referencia class="comida", ademas de li porque estan en lista<li></li>
var comida = fromHtml.map(food => food.textContent);//Finalmente necesitamos usar map() para iterar todos los elementos
//del array y poniendo los parametros tal como se ve en el ejemplo
console.log(comida);
console.log("--------------------"); 

//Por ultimo el Metodo of()

var arr = Array.of(1,2,3,4,5,6,7,8,9);
arr.push(1,2,3,4,5,6,7,8,9);
console.log(arr);


console.log("--------------------"); 

//Ordenando un Array ----sort() reverse()

const ordenar = ["Sergio", "Monica", "Abel", "Sonia"];
console.log(`Antes: ${ordenar}`);

ordenar.sort();
console.log(`Ahora: ${ordenar}`); //Metodo que ordena alfabeticamente cuando trabaja sin argumentos

ordenar.reverse();
console.log(`Reverse: ${ordenar}`); //Metodo que ordena inverso al alfabeto

//El metodo reverse() tambien funciona con numeros
const mmm = [12,45,33,26,88,4550];
mmm.reverse();
console.log(`Reverse con numeros: ${mmm}`)


//Ordemos numeros de arrays con el metodo sort();

const numh = new Array( 10,34,1,25,7,3,9); 

console.log(numh.sort((a,b) => a-b)); //De esta forma compara todos los numeros algoritmicamente, primero A es 10 y B 34, A menor que 
// B, no se mueve, siguiente A es 10 B es 1, esta vez A es menor que B, entonces B pasa a ocupar el lugar de A y asi con 
//el resto de elementos


console.log("--------------------"); 




//          ITERANDO CON ARRAYS Y BUSCANDO ELEMENTOS

//    for IN:

const arrAy = ["Jose", "Ana", "Tom"];

for (let index in arrAy){
    console.log(arrAy[index]);
}
//    for OF

const aRR = ["Josefina", "Anton", "Tim", "Maribel"];

for (let index of aRR){
    console.log(index); //Identico a for IN pero cambiando el argumento a imprimir
}
console.log('----------------------');

//    FOR EACH

console.log('Mi array de personajes de ff9:')
const ff9 = ['Yitan', 'Daga', 'Vivi','Steiner','Freija','Amarant','Eiko','Quina'];
//               0         1       2        3      4          5       6      7
ff9.forEach( (nombres, index) => console.log(`Posicion ${index}: ${nombres}`));
//Como vemos la ventaja de este iterador es que podemos obtener el indice de nuestros elementos.
//Cuidado con el orden de los paramentros del forEach(), primero va el elemento y luego el contador o indice

console.log("---------------------");

//     MAP()
const numEros = [2,4,6,8,10,12,14,16,18,20];

numEros.map(number => console.log(`Metodo map(): ${number / 2}`));

//La ventaja de trabajar con map(), ademas de la simplicidad de iterar los arrays, es que podemos asignar los nuevos 
//valores a otro nuevo array

const numeROS = numEros.map(number => number * 2);
console.log(`Nuevo array con map(): ${numeROS}`);

console.log("---------------------");

// Buscando en los arrays find() findIndex() filter() indexOf() lastIndexOf() reduce()

const bebidas = ['agua', 'cocacola','agua', 'agua', 'limonada', 'agua', 'naranjada'];
//               0         1        2       3          4         5         6   

console.log(bebidas.indexOf('agua'));//Posicion del primer elemento llamado agua (0)
console.log(bebidas.lastIndexOf('agua'));//Posicion del ultimo elemento llamado agua (5)

/*Para buscar elementos en un array podemos usar el metodo find(), el mismo metodo se encarga de iterar todo el 
arreglo, nosotros cremos una funcion lambda o arrow en forma de condicion preguntando si color es igual a "azul"
devuelve true en forma de dato ("azul) */

const colores = new Array("rojo", "azul", "amarillo", "lila");

let micolor = colores.find(color => color == "azul");
console.log(micolor); // nos devuelve azul ya que si esta en arreglo

let micolor2 = colores.find(color => color == "rosa");//que pasa si busco un elemento que no esta en el arreglo
console.log(micolor2); // retorna undefined

console.log("---------------------");


//Ahora que pasaria si yo estoy buscando un array con objetos

const personas = [{nombre: "Sergio", edad: 31, pais: "Espanya"},
                {nombre: "Phil", edad: 20, pais: "UK"},
                {nombre: "Ronaldo", edad: 40, pais: "Brasil"}];

let mipersona = personas.find( persona => persona.nombre == "Ronaldo");
console.log(mipersona);//Solamente indicando el nombre de la propiedad, nos devuelve el objeto al completo

//Tambien podemos conocer la posicion de un elemento dentro del array con el metodo findIndex()

const person = [{nombre: "Sergio", edad: 31, pais: "Espanya"},
                {nombre: "Phil", edad: 20, pais: "UK"},
                {nombre: "Ronaldo", edad: 40, pais: "Brasil"}];

let miperson = person.findIndex( persona => persona.nombre == "Sergio");
console.log(`Posicion de elemento: ${miperson}`);

//Que sucede si lo que queremos es buscar una propiedad de un objeto en una coleccion (Un array muy grande)
//donde existen muchos elementos con las mismas propiedades, ya que con el metodo find() solo se muestra la 
//primera coincidencia en el array, para eso en JS tenemos el metodo filter()

const person3 = [{nombre: "Sergio", edad: 31, pais: "Espanya"},
              {nombre: "Phil", edad: 20, pais: "UK"},
              {nombre: "Ronaldo", edad: 40, pais: "Brasil"},
              {nombre: "Mario", edad: 13, pais: "Espanya"},
              {nombre: "Paul", edad: 65, pais: "UK"},
              {nombre: "Ronald", edad: 10, pais: "Brasil"}];

 //He creado un arreglo mayor y como podemos ver hay personas con diferentes nombres, edades pero coinciden en su pais
 
 let varios = person3.filter(per => per.pais=="Brasil");
 console.log(varios); //Nos imprime los dos objetos en pantalla, conociendo esos datos ya podriamos buscar su posicion
 //gracias al metodo findIndex()
 let menor_edad = person3.filter(menor => menor.edad <= 18);
 console.log(`
 Las siguientes personas no pueden pasar: `);
 console.log(menor_edad);

 //Otro ejemplo usando filter()

 const masNumbers = [234, 300, 154, 200, 435, 873, 653, 907, 193, 213, 555, 734, 888, 377, 712, 630];

 let Arrayejem = masNumbers.filter(numbers => numbers > 500); //Crea un array con los numeros mayores de 500 y ordenalos
 //de mayor a menor
 console.log(Arrayejem.sort((a,b)=> b-a));

 //Finalmente tenemos el metodo reduce()

 const ff =[ 
     {nombre: 'cloud', genero: 'man'},
     {nombre: 'kuja', genero: 'man'},
     {nombre: 'lulu', genero: 'woman'},
     {nombre: 'rikku', genero: 'woman'},
     {nombre: 'barret', genero: 'man'},
     {nombre: 'yuna', genero: 'woman'},
     {nombre: 'auron', genero: 'man'},
     {nombre: 'kimarhi', genero: 'man'},
     {nombre: 'tidus', genero: 'man'},
     {nombre: 'yitan', genero: 'man'},
     {nombre: 'celes', genero: 'woman'},
     {nombre: 'aeris', genero: 'woman'},
     {nombre: 'tifa', genero: 'woman'},
     {nombre: 'van', genero: 'man'},
     {nombre: 'penelo', genero: 'woman'}
    ];
    
    const hombres = ff.reduce((cont,npjs) => {
        if(npjs.genero == 'man')
            cont ++;
        return  cont;
    },0);
    console.log(`Lista de hombres ff: `);
    console.log(`Hay ${hombres} en todo el array`); //Nos devuelve el numero de coincidencias
    
    //Mas ejemplos con filter

    const mujeres = ff.filter(mujer => {
        if (mujer.genero == 'woman')
        return mujer});
    console.log(mujeres);

   // Si queremos que una lista de objetos dentro de un array cambie todos sus atributos a uno en concreto haremos esto

    const mujeres2 = ff.filter(todos => todos.genero = 'No lo tengo claro');
    console.log(mujeres2); 

//Ahora vamos a ver como validar los arreglos haciendo comparativas con some() o every()
const productos =[
    {nombre: "Calabacin", precio: 1.00},
    {nombre: "Tomate", precio: 2.50},
    {nombre: "Pasta", precio: 0.50},
    {nombre: "Carne", precio: 4.00}
];
let some = productos.some(producto => producto.precio < 0.80);
console.log(`Hay algun producto por debajo de 0,80 $ ? ${some}`);

let some2 = productos.some(produc => produc.nombre.length > 7);
console.log(`Hay algun nombre de producto con mas de 7 caracteres? ${some2}`);

let every =  productos.every(product => product.precio <= 3.00);
console.log(`Son estos productos mas baratos de 3.00$ ?: ${every}`);

//    SPREAD Y REST (...) CON ARRAYS


const spread = ['messi', 'ansu', 'riqui'];
const fichajes = ['pedri','trincao', 'lautaro']; //Tenemos dos grupos ( pueden ser tantos como se quiera) de arrays y
// queremos unificarlos en uno

for(let jugadores of fichajes){
    spread.push(jugadores);   //Podemos usar un ciclo for, que vaya agregando uno por uno
}
console.log(spread);

// O tambien podemos agregarlos con un spread y push(), unshift(), splice() ... , mucho mas facil y rapido

spread.push(...fichajes);
console.log(spread);//Al final

const spread2 = ['messi', 'ansu', 'riqui'];
const fichajes2 = ['pedri','trincao', 'lautaro'];

spread2.unshift(...fichajes2); //Al principio
console.log(spread2);

spread2.splice(4,0,...fichajes2);//Agregar a partir del puesto 1
console.log(spread2);


//Ejercicio de como agregar diferentes elementos a un array con spread ...

var a = "1,2,3,4,5,6,7,8,9,10,11,12";
var b = "13,14,15,16";
var c = "Sergio, barcelona";
var d = 245;
var e = Object;

let num = a.split(','); //Usamos el metodo split() para crear un arreglo de Strings
let numb = b.split(',');
num.push(...numb,c,d,e);//A ese arreglo le agregamos los elementos de numb,c,d y e. Con los ... del los spread()
console.log(num);

//OBJETO MATH CON ARRAYS (max,min)

const numbbers = [1,2,3,4,5,6,7,8,9];

console.log(`El numero mayor del array es: ${Math.max(...numbbers)}`); 
console.log(`El numero menor del array es: ${Math.min(...numbbers)}`);


//COPIANDO ARRAYS Y CONCATENANDO

//Tenemos dos formas muy sencillas:

const array1 = [1,2,3,4,5];
const array2 = array1;

//     o  tambien con spread podemos copiar y concatenar tantos como queremos

const array3 = [...array1,...array2,...array1,...array2];
console.log(array3);

//ELIMINANDO ELEMENTOS DUPLICADOS con set()

const duplicados = [1,1,2,2,3,3,4,4];

console.log([...new Set(duplicados)]);



//Crea un array dimensional

var aa = ["1,2,3,4,5,6,7,8,9,10,11,12"];
var bb = ["13,14,15,16"];
var cc = ["Sergio, barcelona"];

const multi = [];
multi.push(aa,bb,cc);

console.log(multi);

//   Otros datos de interes con ARRAYS

//Podemos usar operaciones y metodos con los elementos que hay dentro de los arrays

let A_num = [13,24,3,45,59,6];

console.log(`Si sumamos la posicion 1=${A_num[1]} del array, con la posicion 4=${A_num[4]} nos da como resultado:
${A_num[1] + A_num[4]}`);

let palabras =['Hola', 'estoy', 'en', 'el', 'curso', 'JavaScript', '2020'];

console.log(`La palabra ${palabras[5]} tiene ${palabras[5].length} letras`);


/*-------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------*/


//          Trabajando con OBJETOS CLASES y Progracion orientada a objetos

//Si tenemos un objeto con un array como propiedad y lo queremos imprimir en pantalla podemos hacer lo siguiente

let Javier = {apellido: 'Secano', edad: 47, hijos: ['Laura', 'Maria']};

console.log(`Javier ${Javier.apellido} tiene ${Javier.edad} años y sus hijas se llaman ${Javier.hijos.join(', ')}`);

//    En js las clases se generan diferente de Java, pero su funcion es la misma 

class Personas {
  constructor(){}
}
//Con el ejemplo de arriba ya tendriamos creada una clase, sin atributos y con un constructor vacio pero esa es
//sintaxis, ahora vamos a instanciarla a una variable

var persona1 = new Personas();
console.log(persona1);


//Ahora si vemos como crear una clase con sus propiedades y como iniciarlas en el constructor

class Ordenador{
    constructor(marca, procesador, pulgadas){
        this.marca = marca;
        this.procesador=procesador;
        this.pulgadas=pulgadas;
    }

    set color(valor){
        this.colores = valor; //En javascipt no hay getters y setters de cada propiedad, pero si que podemos crear 
        //nuevas propiedades a traves de set y get como el ejemplo de color
    }
    get color(){
        return this.colores;
    }
    //Una funcion de una clase no lleva la palabra function delante
    info(){   
        console.log(
        `El ordenador tiene las siguientes caracteristicas:
         -Marca: ${this.marca}
         -Procesador: ${this.procesador}
         -Pulgadas: ${this.pulgadas}
         -Color: ${this.color}
        `);}
}
var mipc = new Ordenador("Toshiba", "Intel 10", 18);
mipc.color = "azul";
console.log(mipc.info());

/* Ejercicio con clases:
1 Crear clase libro
2 La clase libro tendra titulo, autor, anyo, genero
3 Crear metodo que devuelva toda la informacion de un libro
4 Pide al usuario 3 libros y guardalos 
5 Validar que los campos no se introduzcan vacios
6 Validar que el anyo sea numero y que tenga 4 digitos
7 Validar que el genero sea "Aventura, terror o fantasia"
8 Crear funcion que muestre todos los libros
9 Crear funcion que muestre los autores en orden alfabetico
10 Crear una funcion que pida un genero y devuelva todos los libros de ese genero
*/
/*
class Libro {
    constructor(genero, titulo, autor, anyo){
    this.genero =genero;    
    this.titulo = titulo;
    this.autor =autor;
    this.anyo =anyo;
   
}
 getAutores(){
    return this.autor;
}

getGenero(){
    return this.genero;
}
infoLibro(){
    return `${this.titulo} es un libro de genero ${this.genero}, escrito por ${this.autor}, en el año ${this.anyo}`;
}
}
let misLibros = [];

//Ciclo while para indicar el numero de veces que se piden los libros
while(misLibros.length < 3){
    let gender = prompt('Introduce el genero del libro, que sea aventura, terror o fantasia').toLowerCase();
    let title = prompt('Introduce el nombre del libro');
    let author = prompt('Introduce el autor del libro');
    let year = prompt('Introduce el año del libro');
   

    if(title != "" && author != "" && !isNaN(year) && year.length ==4 && (gender == 'aventura' || gender == 'terror'
    || gender == 'fantasia')){
     
        misLibros.push(new Libro(gender, title, author, year));
    }
}
let mostrarLibros = ()=> misLibros;

let mostrarAutores = ()=>{
    let aut = [];
    for(const au of misLibros){
        aut.push(au.getAutores());
    }
    console.log(aut.sort());
}
let pedirGenero = () =>{
    const generos = prompt("Introduce el genero a buscar");
    for(const gEnero of misLibros){
        if(gEnero.getGenero() == generos){
           console.log(gEnero.infoLibro());
        }
    }
}
pedirGenero();
console.log(`Mis libros:`);
console.log(mostrarLibros());
console.log('Lista de autores:')
mostrarAutores();
*/

//Vamos a ver los temas de HERENCIAS con JS

class Tienda{
    constructor(code){
        this.code = code;
        this.garantia = "2 años";
}
  
  set Garantia(value){
      
    this.garantia = value;
  }
  get Garantia(){
      return this.garantia;
  }
  get infoTienda(){
    return " MilPcs! tienda de informartica situada en el centro de Leeds";
 }
  
}
class Pc extends Tienda{
    constructor(code ,marca, procesador, pulgadas){
        super(code);
        this.marca = marca;
        this.procesador=procesador;
        this.pulgadas=pulgadas;
    }
    info2(){   
        return `
        El ordenador tiene las siguientes caracteristicas:
         -Codigo: ${this.code}
         -Marca: ${this.marca}
         -Procesador: ${this.procesador}
         -Pulgadas: ${this.pulgadas}
        `;}
}  
let tienda = new Pc(345,"Toshiba", "Intel 10", 43);
console.log(`${tienda.infoTienda}, ${tienda.info2()}, garantia: ${tienda.Garantia = "3 meses"}`);

console.log('-----------------------');
