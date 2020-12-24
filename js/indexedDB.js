
//    INDEXED DB

/* IndexedDB es una manera de almacenar datos dentro del navegador del usuario. Debido a que permite la creación de
 aplicaciones con habilidades de consulta enriquecidas, con independencia de la disponibilidad de la red, sus aplica-
 ciones pueden trabajar tanto en línea como fuera de línea.

El patrón básico que indexedDB propone es:

-Abrir una base de datos.
-Crear un objeto de almacenamiento en la base de datos.
-Iniciar una transacción y hacer una petición para hacer alguna operación de la base de datos, tal como añadir o
 recuperar datos.
-Espere a que se complete la operación por la escucha de la clase correcta de eventos DOM .
-Hacer algo con el resultado (El cual puede ser encontrado en el objeto de la petición).
-Con esos grandes rasgos en mente, seremos más concretos.  

 Contenido extra para buscar:
        Método getAll() para obtener todos los registros de la base de datos
        Método clear() para borrar objetos del almacen
        Método deleteDatabase() para borrar la base de datos
        Metodo onBlocked() para bloquear bases de datos en los cambios de version
        Objeto IDBKeyRange para búsquedas en la base de datos
        Método createIndex() para la creación de índices en la base de datos
        Versionado de bases de datos

        Libreria indexedDB
            https://dexie.org/*/

//Ejemplo de como usar indexedDB creando, agregando, leyendo, actualizando y borrando datos

/*Lo primero de todo es crear la constante del objeto window.indexedDB, con ella podremos crear y abrir la DB */

const indexedDB = window.indexedDB
const form = document.getElementById('form')
const list = document.getElementById('ShopList')

/*Preguntamos si la variable indexedDB esta creada, haz lo siguiente:
- Creamos el request(solicitud) para usar indexedDB.open(nombre de la DB y su version) ademas de la varibale BD 
-Si request.onsucess(tiene exito), nos leera los datos con la funcion creada mas abajo readDates(), ademas le pido
que me imprima en consola que se abrio y sus datos(opcional)
-si request.onupgradeneeded (nos crea la base de datos si no existe ninguna cuando usamos anteriormente open()),
creamos el objectStore(almacen de datos dentro de la DB) con createObjectStore(el nombre de este, y como segundo 
parametro el valor del indice, tenemos dos opciones, agregar un autoincremento o la mejor opcion es colocar la key
de nuestros datos como propio indice, ayudandonos a encontrar mas facilmente datos en una extensa lista de estos,
cremos un objeto que tendra como atributo keyPath: y el valor del objeto a alamcenar(ejemplo, dni, edad, id propio)
-Si request.onerror mandamos a imprimir el error si es que existe */

if(indexedDB){

    const request = indexedDB.open('ListaCompra', 1)
    let BD    

    request.onsuccess = ()=>{
        BD = request.result
        console.log('Opened', BD)
        readDates()
    }
    request.onupgradeneeded = ()=>{
      BD = request.result
     console.log('Created', BD);
     const objectStore = BD.createObjectStore('carrito', 
     {keyPath: 'Title'} )     
    }//{autoIncrement: true}
    
    request.onerror = (error)=>{
        console.log('There was an error', error);
    }
    /*Funcion de agregar datos:
    Cremos un objeto transaction con la variable BD creada anteriormente, este tiene dos parametros([donde queremos enviar],
    'readonly' es por default pero nosotros queremos agregar datos asi que ponemos 'readwrite), 
    creamos el objetc que sera igual a sendDates.objectStore(de nuevo indicamos el almacen de datos),
    por ultimo la solicitud del objecto, usando el metodo .add(dates) parametro que recibe la funcion cuando la llamamos.
    Lamamos a la funcion readDates() para actualizar la lista */
    
    const addDates = (dates) =>{
        let sendDates = BD.transaction(['carrito'], 'readwrite')
        let object = sendDates.objectStore('carrito')
        let request = object.add(dates)
        //console.log(request, 'Datos agregados')
        readDates()
    }
    /*Funcion getDatesFormHTML:
    Funcion encargada de colocar los datos de todos los objetos en los campos del formulario si pulsamos el boton 
    update. 
    Recive el parametro de key y la primera parte de la funcion es identica al metodo de addDates(), solamente que 
    en vez de usar add(), usamos el metodo get().
    -Si request.onsucess manda al formulario del html que muestre en los input la informacion del objeto al cual hemos
    pulsado el boton de Update, ademas el boton de add item cambia su textContent por Update Item.
     */
    
    const getDatesFormHTML = (key)=>{
        let envioDatos = BD.transaction(['carrito'], 'readwrite')
        let object = envioDatos.objectStore('carrito')
        let request = object.get(key)
    
        request.onsuccess = ()=>{
            form.item.value = request.result.Title
            form.priority.value = request.result.Priority
            form.Place.value = request.result.Place
            form.button.dataset.action = 'update'
            form.button.textContent = 'Update Item'
        }
    }
    /*Funcion updateDates(datos):
    Recive el parametro de datos, que sera el objeto a actualizar
    Repetimos el proceso de creacion de transaction, el objectStore y el request, ahora usaremos el metodo put()
    recive los datos del objeto, si el valor asociado a la key lo cambiamos se crea uno nuevo, si no modifica el 
    resto de valores
    -si request.onsuccess el boton cambia a Add Item y refresaca los datos con readDates() */
    
    const updateDates = (dates) => {
        const transaction = BD.transaction(['carrito'], 'readwrite')
        const object = transaction.objectStore('carrito')
        const request = object.put(dates)
        request.onsuccess = () => {
            form.button.dataset.action = 'add'
            form.button.textContent = 'Add Item'
            readDates()
        }
    }
     /*Funcion deleteDates:
     Recive la key como parametro y usando el metodo delete() lo eliminamos de la lista */
     
    const deleteDates = (key)=>{
        const transaction = BD.transaction(['carrito'], 'readwrite')
        const object = transaction.objectStore('carrito')
        const request = object.delete(key)
        request.onsuccess = () => {
            readDates()
        }
    }
    /*Funcion readDates:
    Lo mismo que antes pero ahora usamos el cursor para recorrer la DB, con el metodo openCursor(), creo un fragment
    para agregar elementos al html, importante colocarlo antes del request.onsuccess.
    si request.onsuccess creamos la variable cursor que sera igual que target.result.
    Preguntamos si cursor ha encontrado el almacen, si es asi:
    -Creamos elementos de todos los atributos del objeto de nuestro almacen(titulo,tarea,edad,dni...), y con appendChild
    los mandamos al html con el textContent de cursor.value.propiedad del objeto, asi uno por uno 
    -Creamos un boton de update y delete por cada objeto que imprimimos en pantalla 
    -usamos la funcion de continue() para que recorra una y otra vez la DB hasta que termine
    Cuando eso sucede, con el else le decimos que mande al html el fragment y reiniciamos la lista del html para no 
    duplicar los datos de todos los objetos */
    
     const readDates = ()=>{
        let transaccion = BD.transaction(['carrito'],'readonly')
        let object = transaccion.objectStore('carrito')
        let request = object.openCursor()
        let fragment = document.createDocumentFragment()

        request.onsuccess = (e)=>{
    
            let cursor = e.target.result
            if(cursor){
            let createItem = document.createElement('p')
            createItem.textContent = `-Item: ${cursor.value.Title}`
            fragment.appendChild(createItem)

            let createPriority = document.createElement('p')
            createPriority.textContent = `-Priority: ${cursor.value.Priority}`
            fragment.appendChild(createPriority)

            let createPlace = document.createElement('p')
            createPlace.textContent = `-Store: ${cursor.value.Place}`
            fragment.appendChild(createPlace)
           
            let butonUpdate = document.createElement('button')
            butonUpdate.dataset.type = 'update'
            butonUpdate.dataset.key = cursor.key
            //console.log(cursor.key);
            butonUpdate.textContent = 'update'
            fragment.appendChild(butonUpdate)

            let butonDelete = document.createElement('button')
            butonDelete.textContent = 'Delete'
            butonDelete.dataset.type = 'delete'
            butonDelete.dataset.key = cursor.key
            fragment.appendChild(butonDelete)

            cursor.continue()

            }else{
            list.textContent = ''    
            //console.log(fragment);    
            list.appendChild(fragment)}
        }

    }
    /*Una vez creados todas las funciones, vienen los addEventListener:
    Si hacemos submit, cremos un objeto dates con las propiedades deseadas, reciven el input que pongamos en el html.
    Despues si el boton esta en add lo agrega y si esta en update lo acualiza, finalmente reiniciamos los campos con 
    reset()*/

    form.addEventListener('submit', (e)=>{
     e.preventDefault()
     const dates = {
      Title: e.target.item.value,
      Priority: e.target.priority.value,
      Place: e.target.Place.value
     }
     //console.log(datos);
     if(e.target.button.dataset.action == 'add'){
         addDates(dates)
     }else if(e.target.button.dataset.action == 'update'){
         updateDates(dates)
     }
     form.reset()
    })
    /*Este listener indica que si hacemos click en el boton update , se invoque el metodo getDates()
    y si pulsamos el boton delete() se invoque el metodo deleteDates() */
    list.addEventListener('click', (e)=>{
        if (e.target.dataset.type == 'update') {
            
            getDatesFormHTML(e.target.dataset.key)
            //console.log(e.target.dataset.key);
        }else if (e.target.dataset.type == 'delete') {
            
            deleteDates(e.target.dataset.key)
        }
    })
}
    



//Ejercicio de ejemplo entrenamiento semanal


const formularioB = document.getElementById('form2')
const indexBD = window.indexedDB
const clear = document.getElementById('clear')

const lunes = document.getElementById('t1')
const martes = document.getElementById('t2')
const miercoles = document.getElementById('t3')
const jueves = document.getElementById('t4')
const viernes = document.getElementById('t5')
const sabado = document.getElementById('t6')
const domingo = document.getElementById('t7')


if(indexBD){

    const request = indexBD.open('Entrenamiento', 1)
    let datab

    request.onsuccess = ()=>{
        datab = request.result
        console.log('Abierta');
      leerDatos()
    }
    request.onupgradeneeded = ()=>{
        datab = request.result
        console.log('Creada')
        const object = datab.createObjectStore('mes1',
        {keyPath: 'dia'})
    }
    request.onerror = (error)=>console.log('There was an error', error);


const agregar_modificar = (datos)=>{
let enviar = datab.transaction(['mes1'], 'readwrite')
let object = enviar.objectStore('mes1')
let request = object.put(datos)
leerDatos()
}

const vaciarDatos = ()=>{
    let peticion = datab.transaction(['mes1'], 'readwrite')
    let object = peticion.objectStore('mes1')
    let request = object.clear()
    leerDatos()
}


const leerDatos = ()=>{
    let peticion = datab.transaction(['mes1'], 'readonly')
    let object = peticion.objectStore('mes1')
    let request = object.openCursor()

    request.onsuccess = (e)=>{
     
        let cursor = e.target.result
       // console.log(e.target.result)
        
if(cursor){ 
    if(cursor.value.dia == 'lunes'){
        const elemento = document.createElement('label')
        elemento.textContent = cursor.value.musculo
        lunes.children[0].replaceWith(elemento)
    }
    if(cursor.value.dia == 'martes'){
        const elemento = document.createElement('label')
        elemento.textContent = cursor.value.musculo
        martes.children[0].replaceWith(elemento)
    }
    if(cursor.value.dia == 'miercoles'){
        const elemento = document.createElement('label')
        elemento.textContent = cursor.value.musculo
        miercoles.children[0].replaceWith(elemento)
    }
    if(cursor.value.dia == 'jueves'){
        const elemento = document.createElement('label')
        elemento.textContent = cursor.value.musculo
        jueves.children[0].replaceWith(elemento)
    }
    if(cursor.value.dia == 'viernes'){
        const elemento = document.createElement('label')
        elemento.textContent = cursor.value.musculo
        viernes.children[0].replaceWith(elemento)
    }
    if(cursor.value.dia == 'sabado'){
        const elemento = document.createElement('label')
        elemento.textContent = cursor.value.musculo
        sabado.children[0].replaceWith(elemento)
    }
    if(cursor.value.dia == 'domingo'){
            const elemento = document.createElement('label')
            elemento.textContent = cursor.value.musculo
            domingo.children[0].replaceWith(elemento)
            }
            
            cursor.continue()
        }
    
        
}}

formularioB.addEventListener('submit', (e)=>{
    e.preventDefault()
    //console.log(e.target);
    const datos = {
     dia: e.target.diaSemana.value,
     musculo: e.target.musculo.value,
    }
    agregar_modificar(datos)
    formularioB.reset()
   })


clear.addEventListener('click', ()=>{
    vaciarDatos()
    lunes.children[0].textContent = 'VACIO'
    martes.children[0].textContent = 'VACIO'
    miercoles.children[0].textContent = 'VACIO'
    jueves.children[0].textContent = 'VACIO'
    viernes.children[0].textContent = 'VACIO'
    sabado.children[0].textContent = 'VACIO'
    domingo.children[0].textContent = 'VACIO'

})
}