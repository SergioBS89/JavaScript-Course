"use strict"

/*     PETICICIONES AJAX


Realizando peticiones con AJAX. AJAX (Asynchronous JavaScript and XML) son un conjunto de tecnologías que te permiten
hacer llamados a servidores desde el navegador sin necesidad de refrescar la página. Aunque es posible realizar
llamados AJAX utilizando JavaScript puro, jQuery lo hace mucho más fácil.

AJAX no es un lenguaje de marcado ni de programación, y tampoco hablo de la marca de productos de limpieza. Es un
mecanismo que permite la comunicación asíncrona entre el cliente y el servidor de manera continua sin interrumpir
los aspectos visuales de la página, haciendo actualizaciones parciales de la misma.

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.
Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. Cada uno de
ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos:
ej. un request method puede ser safe, idempotent, o cacheable.

-GET
 El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben
 recuperar datos.

-HEAD
 El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

-POST
 El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado
 o efectos secundarios en el servidor.
 
-PUT
 El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

-DELETE
 El método DELETE borra un recurso en específico.

-CONNECT
 El método CONNECT establece un túnel hacia el servidor identificado por el recurso.

-OPTIONS
 El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

-TRACE
 El método TRACE  realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

-PATCH
 El método PATCH  es utilizado para aplicar modificaciones parciales a un recurso.*/



 //          XMLHttpRequest()



//Ejemplo de peticion GET con el objeto XMLHttpRequest()


const boton = document.getElementById('bott')

boton.addEventListener('click', ()=>{

    let XHR = new XMLHttpRequest()

    XHR.open('GET', 'https://jsonplaceholder.typicode.com/users')

    XHR.addEventListener('load', (data)=>{
        const dataJson = JSON.parse(data.target.response)

        const list = document.getElementById('listadoUsers')
        for(const users of dataJson){
            const listaUse = document.createElement('li')
            listaUse.textContent = `Id: ${users.id} -- Nombre: ${users.name}`
            list.appendChild(listaUse)
        }
    })
    XHR.send()
})


//     PROMESAS 

/*Una promesa es un objeto con dos callbacks internos(constructor con dos argumentos).
Una Promesa es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Permite
asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito, o la razón de falla en
caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: en vez de
inmediatamente retornar el valor final, el método asíncrono devuelve una promesa de suministrar el valor en algún
momento en el futuro.

Una Promesa se encuentra en uno de los siguientes estados:

*pendiente (pending): estado inicial, no cumplida o rechazada.
*cumplida (fulfilled): significa que la operación se completó satisfactoriamente.
*rechazada (rejected): significa que la operación falló.

Una promesa pendiente puede ser cumplida con un valor, o rechazada con una razón (error). Cuando cualquiera de estas
dos opciones sucede, los métodos asociados, encolados por el método then de la promesa, son llamados.
(Si la promesa ya ha sido cumplida o rechazada en el momento que es anexado su correspondiente manejador, el manejador
será llamado, de tal manera que no exista una condición de carrera entre la operación asíncrona siendo completada y los
manejadores siendo anexados)
Como los métodos Promise.prototype.then() y Promise.prototype.catch() retornan promesas, éstas pueden ser encadenadas.

El siguiente ejemplo muestra como buscar en un array de personas toda la informacion de esta, ademas de obtener
el email de otro array al mismo tiempo, esto se usa mucho con el uso de BD
*/


const Users = [{ id: 1, name: 'Andrea'},{ id:2, name:'Celia'}, {id: 3, name: 'Pamela'}]

const Emails = [{
    id:1,
    email: 'andrea@gmail.com'
},{
    id:2,
    email: 'celia@gmail.com'
}]

/*Creamos una primera funcion llamada getUsuarios() y asi poder obtener la info del Array de Users. Como parametro
le pasamos el id de la persona a buscar, posteriormente creamos la variable usuario para instanciarla mediante el
metodo find() y asi poder recorrer el array en busca de el id introducido.
Ademas creamos la variable promesa que sera un Object Promise( (r,r) ) con dos paramentros(resolve y reject).
Hacemos uso del if y el else para preguntar, si no hay coincidencias con el id usamos reject e imprimimos en consola
que no existen usuarios con ese id, de lo contrario usaremos resolve para mandar imprimir al usuario encontrado,
finalmente retornamos la promesa*/

const getUsuarios = (id)=>{
    const usuario = Users.find(usua => usua.id == id)
    const promesa = new Promise( (resolve, reject)=>{
        if(!usuario) reject(`Does not the user with id ${id}`)
        else resolve(usuario)
    })
    return promesa
}
//Lo mismo que anteriormente pero buscando en el array de emails
const getEmail = (user)=>{
    const miEmail = Emails.find(em=> em.id == user.id)
    const promesa = new Promise( (resolve, reject) =>{
        if(!miEmail) reject(`User ${user.name} does not have an email`)
        else resolve( {
            id: user.id,
            nombre: user.name,
            email: miEmail.email
        })
    
    })
    return promesa
}
//Ahora llamamos a la funcion getUsuarios() y le indicamos el parametro id
//entonces con el uso de .then mandamos llamar al otro metodo, getEmail() con un arrow y con parametro(al gusto),
//siendo este la respuesta del primer metodo, getUsuarios(), si en el array de email existe un email con el mismo 
//id nos devuelve su email.
//.catch nos imprime todos los errores ocasionados en el ciclo de metodos

getUsuarios(2)
    .then(user => getEmail(user))
    .then(respuesta => console.log(respuesta))
    .catch(err=>console.log(err))


console.log('-----------------------------------------');


//        ASYNC/AWAIT

/*Cuando se llama a una función async, esta devuelve un elemento Promise. Cuando la función async devuelve un valor,
Promise se resolverá con el valor devuelto. Si la función async genera una excepción o algún valor, Promise se rechazará
con el valor generado.
Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y espera la
resolución de la Promise pasada y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas y realizar algún
comportamiento específico en un grupo de Promises. Del mismo modo que las Promises son semejantes a las devoluciones de
llamadas estructuradas, async/await se asemejan a una combinación de generadores y promesas.

Es una forma alternativa de trabajar con promesas con un codigo mas legible, asi que voy a realizar el ejercicio 
anterior pero usando async */

const Users3 = [{ id: 1, name: 'Andrea'},{ id:2, name:'Celia'}, {id: 3, name: 'Pamela'}]

const Emails3 = [{ id:1, email: 'andrea@gmail.com'},{id:2, email: 'celia@gmail.com'}]

/*Creamos una primera funcion llamada getUsuarios() y asi poder obtener la info del Array de Users. Como parametro
le pasamos el id de la persona a buscar, posteriormente creamos la variable usuario para instanciarla mediante el
metodo find() y asi poder recorrer el array en busca de el id introducido.
Al agregar la palabra async automaticamente tenemos creado un objeto Promise. El uso de resolve y reject no es necesario.
Hacemos uso del if y el else para preguntar, si no hay coincidencias con el id usamos thorw new error y escribimos el
mensaje que lanzara el error si no existen usuarios con ese id, de lo contrario usaremos return del usuario con ese id */

const GetUsuarios = async (id)=>{
    const usuario = Users3.find(usua => usua.id == id)
    if(!usuario) throw new Error (`Does not the user with id ${id}`)
    else return usuario
}
//Lo mismo que anteriormente pero buscando en el array de emails, retornamos todos los datos 
const GetEmail = async (user)=>{
    const miEmail = Emails3.find(em=> em.id == user.id)
        if(!miEmail) throw new Error(`User ${user.name} does not have an email`)
        else return({
            id: user.id,
            nombre: user.name,
            email: miEmail.email
        })
    
}

//Finalmente creamos una ultima funcion para llamar a las dos anteriores, y usamos un bloque try/catch.
//Como vemos aqui usaremos la palabra reservada await, para pausar la ejecucion del metodo hasta que la promesa 
//este realizada y asi continuar con el proceso

const getInformation = async(id)=>{
    try{
        const user = await GetUsuarios(id)
        const email = await GetEmail(user)
        return `Usuario ${user.name}, con email: ${email.email}`
    }
    catch (error){
    console.log(error);
    }
}

//Llamamos a la funcion de getInformation con el parametro del id, y con el uso de then, ya que estamos trabajando con
//promesas, mandamos imprimir en consola
getInformation(1)
.then(res=>console.log(res))

console.log('----------------------------------------');    


var boTTon = document.getElementById('bot');    
var contenedor = document.getElementById('posts');
var contBanderas = document.getElementById('banderas');


const getPosts = ()=> {
return fetch('http://jsonplaceholder.typicode.com/posts');
}

const getCountries = ()=> {
return fetch('https://restcountries.eu/rest/v2/all');
}

const mostrarBanderas = (countries)=> {
contBanderas.innerHTML = '';
countries.map((country, i) => {
    let bandera = document.createElement('img');
    bandera.src = country.flag;
    bandera.width = '20';
    bandera.height = '20';
    contBanderas.appendChild(bandera);
})
}

const mostrarDatos = (posts) => {
contBanderas.innerHTML = '';
posts.map((post, i) => {
    let titulo = document.createElement('h1');
    let contenido = document.createElement('p');

    titulo.innerHTML = (i + 1) + " - " + post.title;
    contenido.innerHTML = post.body;

    contenedor.appendChild(titulo);
    contenedor.appendChild(contenido);
})
}
boTTon.addEventListener('click', ()=> {

    getPosts()
        .then(datos => datos.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        });
    
    });

    /*        FETCH() JS

La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones
y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de
forma asíncrona por la red. Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest. Esta 
API de Fetch proporciona un reemplazo moderno a XMLHttpRequest, siendo una alternativa mejor, que puede ser empleada
fácilmente por otras tecnologías como Service Workers.
Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y
extensiones para HTTP. 
Esta basado en promesas, por lo tanto lleva por default un resolve y un reject*/

// Ejemplo de peticion GET con FETCH()


const botonn = document.getElementById('bb')
const listaa = document.getElementById('listalista')

botonn.addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos') //No hace falta indicar el get trabajando con fetch
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res =>{
        const fragment = document.createDocumentFragment()
        for(const usuario of res){
        const crear = document.createElement('li')
        crear.textContent = `Id: ${usuario.id} --- Title: ${usuario.title}`
        fragment.appendChild(crear)
        
    }
    listaa.appendChild(fragment)
})

})

/*      DOCUMENT FRAGMENT

DocumentFragment son Nodos del DOM que nunca forman parte del DOM tree. El caso de uso mas comun es crear un document
fragment, agregar elementos al document fragment y luego agregar el document fragment al DOM tree. En el DOM tree,
el document fragment es remplazado por todos sus hijos.
Dado que el document fragment es generado en memoria y no como parte del DOM tree, agregar elementos al mismo no causan
reflow (computo de la posicion y geometria de los elementos) en la pagina. Como consecuencia, usar document fragments
usualmente resultan una mejor actuacion de la pagina. En el ejercicio de arriba hago un ejemplo de uso.
*/


// Ejemplo de peticion POST con FETCH()

//Con esta peticion normalmente mandamos datos a bases de datos 

const bott = document.getElementById('bt')

bott.addEventListener('click', ()=>{
    const newPost = {        //Creamos el objeto a mandar a la base de datos con las mismos atributos
        title: 'The best team',
        body: 'I ve never seen before a team like fcb, they are amazing!',
        userId: 1
    }
    //Usando post que fetch tenemos dos argumentos, la url donde hacemos la peticion y la informacion que mandamos
    fetch('https://jsonplaceholder.typicode.com/posts', {   
        method: 'POST',  //Indicamos el method a usar.
        body: JSON.stringify(newPost), //Tranformamos el objeto de JS a JSON gracias a json.stringify().
        headers: { "Content-Type" : "application/json"} //El header se encarga de informar a la base de datos que tipo
        //de datos estamos enviando.
    })
    .then(res => res.json()) //Finalmente preparamos una respuesta para verificar que todo fue correcto, reconvertimos de nuevo
    //el json a objeto JavaScript para poder leerlo y lo mandamos a imprimir, vemos que tenemos el id:101, posicion donde
    //virtualmente se coloco nuestro objeto en la BS
    .then(dates => console.log(dates))
})


//    LECTURA DE DATOS CON FETCH()


/* Primero de todo, para poder ver todo el contenido del ejercicio en correcto funcionamiento necesitamos hacer uso de
PREPROS, una herramienta que nos crea un servidor virtual y permite trabajar sin los problemas que ocasiona el COORS.
El uso de la lectura de datos es muy similar a las peticiones de get sin embargo hacemos uso del metodo blob(), encar-
gado de convertir la informacion que mandamos en un objeto blob y asi ser soportado por el sistema*/

const botonImg = document.getElementById('bbtt')
const botonPdf = document.getElementById('bbt')
const DescargaPdf = document.getElementById('mi')

botonImg.addEventListener('click', ()=>{
    fetch('fotos/lau.jpg')
    .then(res =>res.blob())
    .then(res =>{
        document.getElementById('img').src = URL.createObjectURL(res)
    })
})
botonPdf.addEventListener('click', ()=>{
    const miPDF = document.createElement('a')
    miPDF.id = 'pdf'
    miPDF.href = '#'
    miPDF.target = 'blank'
    miPDF.textContent= 'Abrir Pdf'
    DescargaPdf.appendChild(miPDF)

    fetch('pdf/js.pdf')
    .then(pdf=>pdf.blob())
    .then(pdf=>{
    document.getElementById('pdf').href =URL.createObjectURL(pdf)
    
    })
})

//    LIBRERIA AXIOS

/*Conoce la librería Axios, un complemento sencillo para hacer solicitudes HTTP (Ajax) mediante Javascript / NodeJS,
altamente preparado para consumir APIs REST. 
Si deseas hacer Ajax en Javascript, Axios puede ser un gran aliado. Se trata de una librería Javascript capaz de eje-
cutarse tanto en el navegador como en NodeJS, que facilita todo tipo de operaciones como cliente HTTP.
Con Axios puedes realizar solicitudes contra un servidor, completamente configurables, y recibir la respuesta de una
manera sencilla de procesar. En este artículo te explicaremos las ventajas de esta librería, así como algunos ejemplos
básicos de uso, con los que podrás observar su funcionamiento.
La librería está basada en promesas, por lo que al usarla podremos generar un código asíncrono bastante ordenado.
Incluso es capaz de usar Async / Await para mejorar la sintaxis, aunque en ese caso estarías obligado a transpilar tu
código para que fuera compatible con navegadores.

POR QUE USAR AXIOS

Axios puede sernos de utilidad en muchas situaciones... aunque no siempre será tan necesaria. Habría que analizar con
detenimiento en qué marco nos encontramos para ver si Axios es o no nuestra mejor solución. Aquí te dejamos algunas
consideraciones.
Si usas un framework Javascript (como Angular o Vue.js) es muy probable que ya tengas un cliente HTTP que realice la
tarea de realizar "request" contra un servidor y recibir la "response" de una manera ordenada. Pero si no es así,
realizar las operaciones relacionadas con Ajax en navegadores, puede ser una tarea un poco más compleja de lo que
debería.
Muchas personas usan jQuery para poder disponer de los métodos relacionados con Ajax, pero lo cierto es que usar jQuery
solamente por este motivo es bastante poco aconsejable, pues es una librería bastante pesada, en comparación con Axios.
Si te gusta aprovechar las características nativas del navegador, entonces lo suyo es usar Fetch, que es el nuevo
mecanismo para implementar solicitudes Ajax, también basado en promesas. Sin embargo, el API de fech no está disponible
en todos los navegadores, por lo que necesitamos instalar algunos polyfill. Esto no es un problema, pues cargar dichos
polyfill resulta una tarea sencilla, pero lo que sí puede representar una complejidad es usar el API de fetch para la
implementación de tareas un poco más complejas, como el consumo de APIs REST. Tarea que Axios te pone realmente fácil.

Axios es una alternativa que nos ofrece diversas ventajas:

*Nos ofrece una API unificada para las solicitudes Ajax
*Está altamente pensado para facilitar el consumo de servicios web, API REST que devuelvan datos JSON.
*Es muy sencillo de usar y puede ser un complemento ideal para sitios web convencionales, donde no se esté usando jQuery
y aplicaciones frontend modernas basadas en librerías como React o Polymer, que no disponen en su "core" de mecanismos
para hacer de cliente HTTP.
*Tiene muy poco peso (13Kb minimizado y todavía menos si contamos que el servidor lo envía comprimido), en unas pocas Kb
nos ahorrará mucho trabajo de codificación en las aplicaciones.

Aparte de NodeJS, Axios tiene compatibilidad con todos los navegadores en versiones actuales. Pero ojo, Internet Explorer
se soporta solamente a partir de la versión 11. Si deseas que tu Ajax funcione en versiones más antiguas de Explorer,
entonces te interesa más jQuery o Fetch con sus correspondientes polyfill.

Para comenzar a usar esta librería tenemos que agregar el siguiente script en el html

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
*/

//    Peticion Get con Axios

const botonn2 = document.getElementById('axios')
const listaa2 = document.getElementById('listadoAxios')

botonn2.addEventListener('click', ()=>{
    axios({
        method:'GET',
        url: 'https://jsonplaceholder.typicode.com/todos'
        })    .then(res =>{
        const fragment = document.createDocumentFragment()
        for(const listado of res.data){
        const crear = document.createElement('li')
        crear.textContent = `Id: ${listado.id} --- Title: ${listado.title}`
        fragment.appendChild(crear)
        
    }
    listaa2.appendChild(fragment)
}).catch(err=>console.log(err))

})

//    Peticion Post con Axios

const botto = document.getElementById('btn')

botto.addEventListener('click', ()=>{
    axios({
        method:'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: `Fantastic girl`,
            body: `I have living in Leeds with mi girlfriend the last two years, she is fantastic`,
            userId:2
        }
    }).then(res=>console.log(res.data))
    .catch(err=>console.log(err))

})