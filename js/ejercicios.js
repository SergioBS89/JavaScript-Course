

// ORDENAR DE MAYOR A MENOR 3 NUMEROS QUE INGRESA EL USUARIO

/*const numero = document.getElementById('numeros');
const resultado = document.getElementById('resultado');

let num1 = prompt("Ingresa un numero");
let num2 = prompt("Ingresa otro numero");
let num3 = prompt("Ingresa otro numero");

numero.textContent = `Los numeros ingresados son: ${num1}, ${num2}, ${num3}`;

if(num1 > num2 && num1 > num3 && num2 > num3){
    resultado.textContent = `El orden de mayor a menor es ${num1} - ${num2} - ${num3}`;
}
else if(num2 > num1 && num2 > num3 && num1 > num3){
    resultado.textContent =  `El orden de mayor a menor es ${num2} - ${num1} - ${num3}`;

}else if(num3 > num2 && num3 > num1 && num2 > num1){
    resultado.textContent = `El orden de mayor a menor es ${num3} - ${num2} - ${num1}`;
}
else if(num1 > num2 && num1 > num3 && num3 > num2){
    resultado.textContent = `El orden de mayor a menor es ${num1} - ${num3} - ${num2}`;
}
else if(num2 > num1 && num2 > num3 && num3 > num1){
    resultado.textContent = `El orden de mayor a menor es ${num2} - ${num3} - ${num1}`;
}
else if(num3 > num2 && num3 > num1 && num1 > num2){
    resultado.textContent = `El orden de mayor a menor es ${num3} - ${num1} - ${num2}`;

}else if(num1 ==num2 || num1 ==num3 || num2 == num3){
    resultado.textContent= `Inserta numeros diferentes`;
}*/

/*
SOLICITA UN NOMBRE EN CONSOLA Y EDAD (solo valor numerico), E IMPRIME "HOLA _______, TIENES ____"ANYOS Y EL AÑO QUE VIENE TENDRAS
____" USAR PROPT Y STRING TEMPLATES
*/
/*

let mensage;
let mensage2;
let imp = document.getElementById('imp');

mensage = prompt("Hola, dime tu nombre");
mensage2 = parseInt(prompt("Ahora dime tu edad"));


if(isNaN(mensage2) != false){
    do{
        mensage2 = prompt("Introduce un valor numerico")
    }while(isNaN(mensage2) != false);
};

imp.textContent = `Hola ${mensage}, tienes ${mensage2} años y el año que viene tendras ${mensage2 + 1}`;*/

/* Programa que calcula el area de tres figuras geometricas, triangulo, rectangulo y circulo. Preguntar al usuario
cual de las tres figuras elige y pedir los respectivos datos
*/
/*
let geometria = document.getElementById('geome');

let pregunta = prompt("Elige una de las siguientes figuras y calculare su area: triangulo, rectangulo, circulo");
pregunta = (pregunta.toLowerCase()).trim();
console.log(pregunta);
if(pregunta == "triangulo"){
    let altura = parseInt(prompt('Dime la altura del triangulo: '));
    let ancho = parseInt(prompt('Dime el ancho del triangulo: '));
    geometria.textContent = `La altura de tu triangulo es ${altura}cm y el ancho es ${ancho}cm,
    por lo tanto el area es: 
    ${altura * ancho / 2}`;
} else if(pregunta == "rectangulo"){
    let altura = parseInt(prompt('Dime la altura del rectangulo: '));
    let ancho = parseInt(prompt('Dime el ancho del rectangulo: '));
    geometria.textContent = `La altura de tu rectangulo es ${altura}cm y el ancho es ${ancho}cm,
    por lo tanto el area es: 
    ${altura * ancho}`;
} else if(pregunta == "circulo"){
    let radio = parseInt(prompt('Dime el radio del circulo: '));
    geometria.textContent = `El radio de tu circulo es ${radio}cm, su diametro es ${radio * 2}cm,
    por lo tanto el area es: 
    ${Math.PI * Math.pow(radio,2)}`;}
    else{
        geometria.textContent =`No se introdujo ninguna figura`;
    }
*/

/* Solicita un numero e imprime todos los numeros pares e impares hasta el numero igresado


let res = document.getElementById('res');
let tuNumero = parseInt(prompt('Dime un numero: '));

for(let index=1; index<tuNumero; index++){
    if(index % 2==0){
        console.log(`${index}- es par`);
        
    }else{
        console.log(`${index}- es inpar`);
    }
}

*/
/*Introduce una serie de numeros indeterminados del 1 al 10  mientras que la suma de todos ellos no sea mayor de 50.
Cuando esto ocurra, mostrar el total acumulado y el contador de numeros introducidos */
/*
let number = parseInt(prompt(`Introduce un numero: `));
let number2 = parseInt(prompt(`Introduce otro numero: `));
let contador=2;
let total = number + number2;

while(total < 50){
   number3 = parseInt(prompt(`Introduce otro numero: `));
   total = total + number3;
   contador++;
}

console.log(`Has utilizado ${contador} numeros antes de llegar a 50, tu suma total es ${total}`)
*/
/*Crea 3 arrays. El primero de ellos tendra 10 numeros, el segundo sera de numeros pares y el tercero inpares,
los dos ultimos estan vacios. Despues multiplica cada uno de los numeros del primer array por un numero aleatorio
del uno al 10, si el resultado es para se garda en el array de pares y viceveresa.
Imprimir los resultados de las multiplicaciones ejem 2 x 3 = 6
Imprimir las dos arrays
*/

let Ar_num = [3,5,7,8,2,9,1,12,6,4];
let Ar_pares = [];
let Ar_inpares = [];

for(let cont = 1; cont < Ar_num.length; cont ++ ){

    let random =  Math.round(Math.random() * 10 + 1 );
    let multi = cont * random;

    console.log(`${Ar_num[cont]} x ${random} = ${multi}`);

    if(multi % 2 == 0){
        Ar_pares.push(multi);
    }else{
        Ar_inpares.push(multi);
    }
}

for(pa in Ar_pares){
    console.log(`Numeros pares: ${Ar_pares[pa]}`);
}
for(pa1 in Ar_inpares){
    console.log(`Numeros inpares: ${Ar_inpares[pa1]}`);
}

/* Solicitar al usuario una palabra y mostrar el numero de vocales y consonantes que tiene
*/

let resul = document.getElementById('res');
let pregu = prompt(`Dime una palabra`);

let con_vocal = pregu.match(/[aeiou]/gi).length;
let con_conso = pregu.match(/[qwrtypsdfghjklzxcvbnm]/gi).length;

resul.textContent = `La palabra introducida "${pregu}" tiene ${pregu.length} caracteres, de las cuales ${con_vocal} son vocales
 y ${con_conso} son consonantes`;

 /* Tenemos un array con los siguientes colores: "amarillo", "rojo", "azul", "verde", "naranja".
 Determinar si un color introducido por el usuario con propmt es igual o no a los del array */

 let colors = ['amarillo', 'rojo', 'azul', 'verde', 'naranja'];
 let tucolor = prompt('Dime un color').toLowerCase();

 let cade = colors.join('-');
 console.log(`Mi array de colores contiene los siguientes elementos: 
 ${cade}`);

 let buscarColor = colors.find(color => color == tucolor);

 if(buscarColor == tucolor){
     console.log(`El color introducido ${tucolor}, esta en el array`);
 }else{
    console.log(`El color introducido ${tucolor}, no esta en el array`);
 }
 
 /* Dado un array de letras, solicita un numero de DNI y calcula que letra le corresponde. El numero no puede
 ser negativo ni tener mas de 8 digitos. La posicion de la letra es el resultado del modulo del numero introducido 
 entre 23 */

 let dni = document.getElementById('dni');
 const letras_dni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q',
'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let tuDni =prompt(`Dime tu DNI sin la letra`);

if(tuDni.length == 8 && parseInt(tuDni)>0){
    let letra = tuDni%23;
    dni.textContent = `Tu DNI completo es: ${tuDni}${letras_dni[letra]}`;
}else{
    dni.textContent=`Los digitos introducidos no son correctos`;
}
