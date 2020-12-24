

const form = document.getElementById('formul')
const boton = document.getElementById('sub')

const name = document.getElementById('name')
const email =document.getElementById('email')

const gender = document.getElementById('genero')

const terms = document.getElementById('terms')

const Validate = {
    name: false,
    email: false,
    gender: false,
    terms: false,
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    //validateForm()
    guardarEnArray()
})

name.addEventListener('change', (e)=>{
  if(e.target.value.trim().length > 0) Validate.name = true
})
email.addEventListener('change', (e)=>{
    if(e.target.value.trim().length > 0) Validate.email = true
  })
  
gender.addEventListener('change', (e)=>{
  if(e.target.checked == true) Validate.gender = true
  })
terms.addEventListener('change', (e)=>{
    Validate.terms = e.target.checked
    e.target.checked ? boton.removeAttribute('disabled') : boton.setAttribute('disabled', true) 
})  


const validateForm = () => {
    const formValues = Object.values(Validate)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Not completed or invalit')
arrayar.push(Validate)
} 

const arrayar = []
const guardarEnArray = ()=>{
  const guardar = {
    name: `${document.getElementById('name').value}`,
    email: `${document.getElementById('email').value}`,
  }
arrayar.push(guardar)
console.log(arrayar);
}


/*   
         EXPRESIONES REGULARARES (REGEXP)

Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro
de una cadena de texto. En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan 
en los métodos exec() y test() de RegExp, así como los métodos match(), replace(), search() y split() de String.
En este capítulo se describe el uso y funcionamiento de las expresiones regulares en JavaScript

         METODOS() que utilizan expresiones regulares:

*exec()==>	Un método RegExp que ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un array de
 información.
*test()==>	Un método RegExp que verifica una coincidencia en una cadena. Devuelve true o false.
*match()==>	Un método String que ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un array de
 información o null si no existe coincidencia alguna.
*search()==>	Un método String que verifica una coincidencia en una cadena. Devuelve el índice de la coincidencia,
 o -1 si la búsqueda falla.
*replace()==>	Un método String que ejecuta una búsqueda por una coincidencia en una cadena, y reemplaza la
 subcadena encontrada con una subcadena de reemplazo.
*split()==>	Un método String que utiliza una expresión regular o una cadena fija para cortar una cadena y
 colocarlo en un array de subcadenas.

       COMODINES   son x caracterees con funciones muy escpecificas:

 *Sustitucion: "." ==> Define un comodin dentro del patron

 *Listado de caracteres validos: "[]" ==> Entre corchetes van los caracteres validos.
 [1234] Unicamente validos el 1 2 3 4

 *Rangos: "[-]" ==> Entre corchetes si colocamos un guien entre dos caracteres, establecemos un rago.
 [a-z] validos todos los caracteres de la a hasta la z.  Tabla ASCII para ver los rangos de todos los 
 caracteres: https://elcodigoascii.com.ar/

 *Mezcla de rangos: "[-  ]" ==> Podemos unir los dos comodines anterirores en una sola expresion.bo
 [1-10aeiou] Caracteres validos del 1 al 10 y las vocales

 *Cadenas completas: "(|)" ==> Para establecer una cadena completa, esta debe ir entre parentesis.
 Ademas si queremos agregar mas palabras las sepramos con un palo. 
 (Hola|Adios|Hastaluego)  Estas tres palabras si valdrian.

         DELIMITADORES
*Antes de: ^ ==> Antes de este simbolo no puede haber nada
*Despues de: $ ==> Despues de este simbolo no puede haber nada
^hola$ Solamente se puede validar hola

        CANTIDAD
*Llaves: {} ==> Todo lo que esta entre llaves indica el numero maximo de veces para ingresar caracter.
Hay 3 combinaciones:
 -{4} maximo 4 caracteres
 -{1,5} De uno a 5 caracteres incluidos 1 y 5
 -{1,} De uno en adelante, sin maximo

 ^[a-zA-Z]{8,}@{1}(.com){1}$ minimo 8 digitos de la a hasta la z tanto mayuscula como minuscula, ademas debe contener
 .com una vez y una @ una vez

*asterisco: "*" ==> Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*
*interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez.
^[ae]?$ 
*operador +: lo que está antes del + tiene que estár una vez como mínimo
A-[0-9]+
    
        CARACTERES        
\s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno
 de carro. ^[a-zA-Z]+\s[a-zA-Z]+$
\S: Coincide con todo menos caracteres de espacio ^\S{5}$
\d: Coincide con un carácter de número. Equivalente a [0-9] ^\d{5}$
\D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9] ^\D{5}$
\w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
\W: Coincide con todo menos caracteres de palabra. ^\W+$
    


         BANDERAS O FLAGS

Las expresiones regulares tienen cuatro banderas opcionales (Flags) que permiten realizar búsquedas globales y
sin distinción de mayúsculas y minúsculas. Estas banderas pueden utilizarse por separado o juntas y en cualquier
orden; y se incluyen como parte de la expresión regular.

flags
*g ==>	Búsqueda global.
*i ==>	Búsqueda 'case-insensitive' (no sensible a mayúsculas).
*m ==>	Búsqueda en multi-línea.
*u ==>	unicode; se trata el patrón como una secuencia de caracteres unicode.
*y ==>	Realizar una búsqueda "pegajosa" que se ajuste a partir de la posición actual en la cadena de destino. Vea sticky

Para incluir una bandera con la expresión regular, se usa la siguiente sintaxis:

const regexp = /patrón/flags;

Se puede econtrar con esta sintaxis aunque es menos comun: const regexp = new regExp('patron','flag')

Link hacia web para probar las expresiones regulares: https://regex101.com/
*/


//Ejemplo de expresiones regulares 

const text = `Leo Messi, con un discurso firme y claro, fue contundente cuando se refirió a las opciones del Barça
              en la Champions: "Lo dije hace tiempo que si seguíamos así sería muy difícil ganar la Champions y no
              ha dado ni para ganar la Liga. Y si no reaccionamos no ganaremos ni al Nápoles".En este sentido,
              concluyó que ahora "nos viene bien el parón para limpiar la cabeza y descansar, pensar que en la
              Champions partimos de cero y que son cuatro partidos que te pueden dar el título quer todos deseamos.
              Pero para eso, debemos cambiar mucho y hacer mucha autocrítica y no pensar que perdimos por los árbitros"`


const contain = (bus) =>{
    if(bus.test(text))console.log(`El texto contiene la palabra o la letra`);
    else console.log(`El texto no contiene la palabra`);
}
//Ejemplo expresion regular sencilla
const regExp =/messi/gi 
contain(regExp)
//Uso de comodin sustitucion
const regExp2 = /m...i/gi
contain(regExp2)


//            APIS DE HTML                    

/*       WEB STORAGE

¿Que es Web Storage? Es una de las APIs de HTML5 que nos permite guardar datos de tipo/valor (key/value) sin tener que
utilizar cookies, es decir, no depende del tráfico de Internet.

Existen dos mecanismos que nos ofrece Web Storage:

localStorage y sessionStorage, que nos permiten almacenar datos en nuestro navegador web, de manera muy similar a los
cookies, pero sin tener que utilizar Internet.
-localStorage: Como su propio nombre indica, se trata de un espacio de almacenamiento local que nos permite guardar datos
 de nuestra página. Estos datos no se perderán al cerrar nuestro navegador, sino que seguirán disponibles indefinidamente.
-sessionStorage: Este mecanismo nos permite guardar datos en un almacenamiento local. Se comporta igual a localStorage,
 con la diferencia que una vez que cerramos el navegador se pierde la información.

Desde la perspectiva del código, sessionStorage y localStorage se comportan de la misma forma, solo cambia la disponibili-
dad temporal de los datos.

Accedemos a estos datos igual que como un objeto o utilizando los métodos de storage.getItem() y storage.setItem().
-storage.getItem(): Devuelve el valor del dato guardado en la clave cuyo nombre se le pasa como parámetro, pero si esta
 clave no existe nos devuelve null.
-storage.setItem(): Este método se utiliza para almacenar datos en una clave especifica , cuando recibe una clave y un
 valor, añade estos al almacén de datos, o actualiza(sobre-escribe) el valor si la clave ya existe.

Podemos encontrar otros métodos que se usan con menor frecuencia que los mencionados anteriormente, como por ejemplo:
-storage.removeItem(): Cuando se le pasa el nombre de una clave por parámetro eliminará dicha clave del almacenamiento.
-storage.clear(): Cuando este método es invocado vacía todas las claves del almacenamiento.

Conociendo Web Storage hemos comprobado que podemos obviar el empleo de cookies y así llevar un control de datos de una
manera más simple, completa y eficiente.
*/


//         Ejemplo SESSIONS STORAGE

const formulario =document.getElementById('form')
const listaSelect = document.getElementById('keys')

//Listener para no recargar la pagina si enviamos el formulario, ademas usamos sessionStorage.setItem(para tomar
//los parametros introducidos tanto de key como de value) 
formulario.addEventListener('submit', (e)=>{
e.preventDefault()

sessionStorage.setItem(formulario.llave.value, formulario.valor.value)

//Lo agregamos a una lista select del html para posteriormente mandarlo a imprimir en la pagina con getItem()
//y al ser un array usamos salectedIndex entre corchetes para que tome como referencia el objeto elegido
const select = document.createElement('option')
const fragment = document.createDocumentFragment()
select.textContent = formulario.llave.value
fragment.appendChild(select)
listaSelect.appendChild(fragment)
// Las 5 ultimas lineas serian lo mismo que hacer keys.innertHTML += `<option>${botonForm.key.value}</option>`
formulario.reset()
})

listaSelect.addEventListener('change', ()=>{
  document.getElementById('infoValue').textContent = 
  sessionStorage.getItem(listaSelect[listaSelect.selectedIndex].textContent)
})

//Ejemplo 2 de como obtener los datos de un formulario con la api web storage

const formul = document.getElementById('formular')
const lista = document.getElementById('listaNombres')
const arrayPersonas = []
  
formul.addEventListener('submit', (e)=>{
  e.preventDefault()
  sessionStorage.setItem('nombre',formul.nombre.value)//El primer parametro es la clave donde guardamos la info
  //en el almacenamiento local y asi poder acceder a ella con getItem()
  sessionStorage.setItem('email',formul.mail.value)
  //Creo un objeto por cada dato introducido y lo imprimo en consola
  const objectName = {nombre: `${sessionStorage.getItem('nombre')}`,
  email:`${sessionStorage.getItem('email')}`}
  console.table(objectName);
  formul.reset()
})


//Ejemplo de LOCAL STORAGE

const iniciar = ()=>{
  let boton = document.getElementById('guardar')
  boton.addEventListener('click', nuevoItem)
  mostrar()
}

const nuevoItem = ()=>{
  let clave = document.getElementById('clave').value
  let valor = document.getElementById('textoValor').value
  localStorage.setItem(clave,valor)
  document.getElementById('clave').value = ""
  document.getElementById('textoValor').value = ""
  mostrar()
}

const mostrar = ()=>{
  let cajaDatos = document.getElementById('cajaDatos')
  cajaDatos.innerHTML = '<div><input type="button" onclick="removerTodo()" value="Eliminar Todos"></div>'
  for(let res =0; res < localStorage.length; res++){
    let claveF = localStorage.key(res)
    let valorF = localStorage.getItem(claveF)
    cajaDatos.innerHTML += "<div>" + claveF + " - " + valorF + "</div>"
    cajaDatos.innerHTML += '<div><input type="button" onclick="removerItem(\'' + claveF + '\')" value="Remover"></div>'
  }}
const removerItem = (clave)=>{
if(confirm("Esta seguro?")){
  localStorage.removeItem(clave)
  mostrar()
}}
const removerTodo = ()=>{
  if(confirm("Borrar todo?")){
    localStorage.clear()
    mostrar()
  }
}

window.addEventListener('load',iniciar)


/*        DRAG AND DROP

 API drag & drop:
    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo
    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto
        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino  */

const fcb = document.getElementById('fcb')
const dropZone = document.getElementById('drop_zone')

/*
fcb.addEventListener('dragstart', ()=>{
  console.log('Drag Star');
})
fcb.addEventListener('drag',()=>{
  console.log('Drag');
})
fcb.addEventListener('dragend',()=>{
  console.log('Drag End');
})*/
dropZone.addEventListener('dragenter',()=>{
console.log('Drag Enter')
})
dropZone.addEventListener('dragover',(e)=>{
  e.preventDefault()
  console.log('Drag over')
  })
  dropZone.addEventListener('drop',(e)=>{
    e.preventDefault()
    console.log('Drop')
    })  
    dropZone.addEventListener('dragleave',()=>{
      console.log('Drag Leave')
      })

/* Ejemplo DRAG AND DROP ICONOS .npg(no funciona con imagenes jpg, ademas todos los iconos necesitan tener
  en el html draggable="true"


/* En el html tenemos dos div como dos zonas diferentes, el div de los iconos fuera y el div con el espacio para colocar
esos div, asi que empezamos por asignar los id a las variables*/
const iconosFuera = document.getElementById('fuera')
const espacioDrop = document.getElementById('drop_zone')

//Los iconos fuera tienen cada uno de ellos un id respectivamente, asi que vamos a identificar el icono con el evento
//dataTransfer.setData(tiene dos argumentos, el tipo del dato que queremos 'texto plano' y donde localizarlo), asi que
// como queremos obtener los id, usamos target.id como segundo argumento.
iconosFuera.addEventListener('dragstart', (e)=>{
  e.dataTransfer.setData('text/plain', e.target.id)
  console.log(e.target.id)// podemos ver que al arrastrar los elementos nos muestra en consola su propio id

})

espacioDrop.addEventListener('dragover', (e)=>{
  e.preventDefault() //Siempre hay que hacerlo para que funcione
  })

espacioDrop.addEventListener('drop', (e)=>{
e.preventDefault()//De nuevo como antes prevenimos la accion por defecto
let element = document.getElementById(e.dataTransfer.getData('text')) //Instanciamos en una nueva variable el icono que 
//estamos moviendo, gracias dataTransfer.getData(tipo de dato), por ultimo lo colocamos con appendChild en el espacio
//vacio y ademas usamos el metodo removeChild() para eliminar el icono del espacio inicial
espacioDrop.appendChild(iconosFuera.removeChild(element))
})
//Vicerversa para volver los iconos a su posicion original

espacioDrop.addEventListener('dragstart', (e)=>{
  e.dataTransfer.setData('text/plain', e.target.id)
  console.log(e.target.id)
})

iconosFuera.addEventListener('dragover',(e)=>{
  e.preventDefault()
})
iconosFuera.addEventListener('drop', (e)=>{
  e.preventDefault()
  let element2 = document.getElementById(e.dataTransfer.getData('text'))
  iconosFuera.appendChild(espacioDrop.removeChild(element2))
})

//       FILE READER

/*El objeto FileReader permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el
 cliente de forma asíncrona, usando los objetos File o Blob dependiendo de los datos que se pretenden leer.
 El objeto File puede ser obtenido desde un objeto FileList devuelto como resultado de la selección de archivos por
 parte del usuario en un elemento <input>, desde el objeto DataTransfer producido por una operación de arrastre
 (drag and drop) o desde la API mozGetAsFile () en un HTMLCanvasElement. 
 
 Existen varias propiedades y metodos del objeto File Reader como podemos ver en la documentacion del siguiente link:
 https://developer.mozilla.org/es/docs/Web/API/FileReader

 Pero vamos a ver los dos metodos mas usados:

-FileReader.readAsDataURL()
Comienza la lectura del contenido del objeto Blob o File, una vez terminada, el atributo result contiene un data: URL que
representa los datos del fichero. Con el podemos cargar imagenes, videos, musica..
-FileReader.readAsText()
Comienza la lectura del contenido del objeto Blob o File, una vez terminada, el atributo result contiene el contenido del
fichero como una cadena de texto. Con el podemos cargar textos.
*/
 
//Ejemplo de ejercicio donde subimos al html un texto y una imagen:

//      TEXTO 

const subirArchivoText = document.getElementById('file')
const miTexto = document.getElementById('Stexto')

subirArchivoText.addEventListener('change', (e)=>{
  const file = e.target.files[0] //Importante indicar la posicion del array 
  console.log(file)
  const fileReader = new FileReader()
  fileReader.readAsText(file)
  fileReader.addEventListener('load', (e)=>{
  miTexto.textContent = e.target.result //Usamos result para devoler el contenido del archivo de texto
  })
})

//    IMAGENES, MUSICA, VIDEOS..

/* Ejemplo de como cargar una sola imagen 
const subirArchivo = document.getElementById('file2')
const miImg = document.getElementById('images')

subirArchivo.addEventListener('change', (e)=>{
  let file2 = e.target.files[0]
  console.log(file)
  let fileReader2 = new FileReader()
  fileReader2.readAsDataURL(file2)
  fileReader2.addEventListener('load', (e)=>{
  miImg.setAttribute('src', e.target.result)
  })
})*/

//Ejemplo de como cargar una o varias imagenes a la vez, vale tanto para fotos, videos, musica su cambiamos el
//elemento a crear (document.createElement(type)):

const subirImagenes = document.getElementById('fileB')
const miImgs = document.getElementById('images')

/*Una vez instanciado el boton "examinar" usamos un escuchador que se active si cambia (change), y creamos un evento.
creamos una variable para asignar las propiedades de los archivos a subir y recorremos con un ciclo for el array 
creado de archivos, dentro del for creamos una instancia del objeto FileReader(), encargado de convertir todos los 
archivos a subir a objetos que reconoce JavaScript. Ademas creamos un nuevo element que sera del tipo de los archivos
en este caso 'img'. Con la instacia de FileReader llamamos al metodo readAsDataURL(con el argumento que recorre el for).
Hecho eso iniciamos una nueva escucha, cuando se carguen los archivos 'load' a cada uno de los archivos les modificamos
el src por e.target.result y luego con appendChild las insertamos en el HTML */

subirImagenes.addEventListener('change', (e)=>{
  console.log(e.target.files);
  let file3 = e.target.files
  let fragment = document.createDocumentFragment()
  for(let im of file3){
  let fileReader3 = new FileReader()
  const newImg = document.createElement('img')
  newImg.height = 300
  fileReader3.readAsDataURL(im)
  fileReader3.addEventListener('load', (e)=>{
  newImg.setAttribute('src', e.target.result)
  })
  fragment.appendChild(newImg)
}
miImgs.appendChild(fragment)
})

//  Como crear BARRA DE PROGRESO

//Cargando uno o varios elementos


const fileInp = document.getElementById('filefile')
const progress = document.getElementById('progress')

/*Es similar a cuando cargamos archivos de tipo imagen, video. La diferencia esta que cuando usamos la escucha del
fileReader, colocamos 'progress', cabe recordar que previamente hemos creado la barra de carga en CSS y la barra que se
va rellenando indicando el progreso parte de 0%. Es aqui donde nosotros, con la ayuda de JS podemos comprobar el porcen-
tage de carga que tienen los archivos cuando estamos cargando. con e.loaded y e.total, este ultimo nos indica el 
tamanyo del contenido mientras que loaded nos indica la cantidad cargada. Dicho esto solo tenemos que calcular el tanto
por ciento con una simple raiz cuadrada. e.loaded * 100 / e.total y asi sabemos exactamente el porcentage de carga que 
lleva el archivo. Ese valor calculado lo aplicamos al CSS cambiandole el stilo y su width = resultado raiz cuadrada, asi
dinamicamente se va rellenando la barra hasta completarse. El ultimo escucha en Chrome no haria falta pero en otros nave-
gadores es necesario para terminar de completar al 100% la barra, usamos el 'loadend'
*/
fileInp.addEventListener('change', (e)=>{
  let file = e.target.files
  for(img of file){
  let reader = new FileReader()
  reader.readAsDataURL(img)
  reader.addEventListener('progress', (e)=>{

  console.log(`porcentaje de carga: ${e.loaded * 100 / e.total}`)
  progress.style.width = Number.parseInt(e.loaded *100 / e.total) + '%'
  })
  reader.addEventListener('loadend', ()=>{
    console.log('end')
    progress.style.width = '100%'
  })
}
  })

//CONBINACION DE  FILEREADER,DRAG AND DROP Y BARRA DE PROGRESO

/*En este ejercicio tengo instaciadas varias partes del html:

-fileInput: El boton examinar, no se ve en el la pagina porque esta oculto en el css
-zonaDrop: Zona donde arrastramos los archivos a subir, imagenes en este caso
-botonazo: El boton para submit
-cargarIm: Lugar donde se cargan los archivos dentro del html
-progres: Barra de progreso 
*/
const fileInput = document.getElementById('file5')
const zonaDrop = document.getElementById('dropZ')
const botonazo = document.getElementById('upload-button')
const cargarIm = document.getElementById('misImg')
const progres = document.getElementById('progressoo')

zonaDrop.addEventListener('click', ()=> fileInput.click()) //Esta escucha se encarga de que si hacemos click en la zona
//Drop, se abra la misma ventana que se abriria si pulsamos en fileInput

zonaDrop.addEventListener('dragover', (e)=>{ // Esta escucha es para crear un efecto de css que hace cambiar el color de
e.preventDefault()                           //la zona drop cuando un archivo esta dentro
zonaDrop.classList.add('dropZ--active')
})
zonaDrop.addEventListener('dragleave', (e)=>{//Viceversa, cuando un archivo sale del drop, cambia al estilo original
  e.preventDefault()
})
zonaDrop.addEventListener('drop', (e)=>{ //Importante, cuando hacemos el drop, el fileInput(los archivos) son igual a
  e.preventDefault()                     // e.dataTransfer.files
  fileInput.files = e.dataTransfer.files
  console.log(fileInput.files);
}) 
botonazo.addEventListener('click', (e)=>{ //Cuando el archivo esta dentro del drop, al pulsar el boton de submit, creamos
  e.preventDefault()                      //la variable que instacia la info del archivo( fileInput.files[0]), con la
let archivo = fileInput.files[0]          //posicion del array que es 0 porque solo abrimos un archivo. 
let crear = document.createElement('img') //Creamos un elemento img y un objeto File Reader, que leera el archvo con 
crear.height = 300                        // readAsDataURL, ademas de crear una escucha con progress para la barra de carga
let leer = new FileReader()               //cambiando asi el widht del css y haciendo que veamos la barra completarse.
leer.readAsDataURL(archivo)               //Aparte creo un elemento texto con 'Done' y lo agrego a la zona del drop cuando
leer.addEventListener('progress', (e)=>{  //el archivo se completa al 100%, y a la misma vez usamos appendChild para colgar
progres.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%' // la imagen en el Html.
const done = document.createElement('p') //Debido a que despues de cargar un archivo, el html se quedaba congelado, pongo
done.textContent = 'Done!'               //un timer que a reinicia todo el proceso para volver a poder cargar otro archivo
zonaDrop.appendChild(done)               //desde cero.
crear.setAttribute('src', e.target.result)
cargarIm.appendChild(crear)
const tempo = setInterval( ()=>{
  zonaDrop.classList.remove('dropZ--active')
  progres.style.width = 0
  zonaDrop.removeChild(zonaDrop.children[3])
 },4000)
let reinicio = setTimeout( ()=>{
    clearInterval(tempo)
    },5000)
    
})

})




  


