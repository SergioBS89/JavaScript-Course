
//     API VISIBILITY CHANGE 

//Si estamos reproduciendo un video y cambiamos de pestanya, se pausara para no escuchar el sonido de este

const video =document.getElementById('video')
//video.setAttribute('autoplay',true)

addEventListener('visibilitychange', (e)=>{
if(document.visibilityState === 'visible'){
    console.log('Play');
    video.play() //No funciona porque chrome no permite la reproduccion automatica
}else if (document.visibilityState === 'hidden')
console.log('Pause')
video.pause()
})


//Ventana de alerta ONLINE Y OFFLINE

const alert = document.getElementById('alert')

addEventListener('online', (e) => {
    setAlert(1)
})

addEventListener('offline', (e) => {
    setAlert(0)
})

const setAlert = (status) => {
    alert.classList.remove('alert--online')
    alert.classList.remove('alert--offline')

    status === 0 ?
        setTimeout(() => {
            alert.textContent = "Ups, parece que has perdido la conexion a internet"
            alert.classList.add('alert--offline')
        }, 100) :
        setTimeout(() => {
            alert.textContent = "Genial! Estas en linea de nuevo!"
            alert.classList.add('alert--online')
        }, 100)
}

//  GEOLOCALIZACION

/*La API de geolocalización permite al usuario compartir su ubicación a las aplicaciones web si así lo desea. 
Por razones de privacidad, al usuario se le pide que confirme el permiso para proporcionar información de ubicación.

La API de geolocalización se publica a través del objeto navigator.geolocation.

Para obtener la ubicación actual del usuario, puede llamar al método getCurrentPosition().
Esto inicia una solicitud asíncrona para detectar la posición del usuario, y consulta el hardware de posicionamiento 
para obtener información actualizada. Cuando se determina la posición, se ejecuta la función de callback. Si lo desea, 
puede proporcionar otra función de callback que se ejecuta si se produce un error. Un tercer parámetro opcional, es un 
objeto de opciones donde se puede establecer la edad máxima de la posición devuelta, el tiempo de espera para una soli-
citud y si se requiere una alta precisión para la posición.

Rastreando la posición actual:

Si los datos de ubicación cambian (si el dispositivo se mueve o información geográfica más precisa es recibida), puede 
definir una función de callback que se ejecuta al cambiar la posición. Esto se logra a través de la función
watchPosition(), que recibe los mismos parámetros que getCurrentPosition(). La función de callback es ejecutada varias 
veces, permitiendo al navegador actualizar la ubicación cada vez que cambia, o proporcionar una posición con mayor 
exactitud utilizando distintas técnicas de geolocalización. La función de callback de error, la cual es opcional como 
en getCurrentPosition(), es llamada solo una vez, cuando nunca serán devueltos resultados correctos.

El método watchPosition() devuelve un número que se utiliza para identificar el rastreador de posición solicitado; 
este valor se utiliza junto con el método clearWatch() para dejar de rastrear la posición del usuario.

AFINANDO LA RESPUESTA
Ambos métodos,  getCurrentPosition() y watchPosition() aceptan una función de callback en caso de éxito, una función 
callback opcional si ocurre algún error, y un objeto PositionOptions también opcional.

PROPIEDADES DE OPTIONS

-PositionOptions.enableHighAccuracy:
 Es un Boolean que indica que la aplicación quiere recibir los mejores resultados posibles. Si es true y si el dispositivo 
 es capaz de proporcionar una posición más precisa, así lo hará. Ten en cuenta que esto puede resultar en tiempos de 
 respuesta más lentos o en un incremento del uso de energía (con un chip GPS en un teléfono móvil por ejemplo). Por otro 
 lado, si es false (el valor por defecto), el dispositivo tiene libertad para decidir ahorrar recursos respondiendo más 
 rápido y/o usando menos energía.
-PositionOptions.timeout:
 Es un valor long positivo que representa el máximo período de tiempo (en millisegundos) que se le permite tomar al 
 dispositivo para retornar a una posición. El valor por defecto es Infinity, y significa que getCurrentPosition() no 
 retornará hasta que esté disponible la posición.
-PositionOptions.maximumAge:
 Es un valor long positivo que indica la edad máxima en milisegundos de una posible posición "cacheada" que es aceptable 
 retornar. Si es 0, significa que el dispositivo no puede usar posiciones "cacheadas" y debe intentar conseguir la 
 posición real actual. Si es Infinity el dispositivo debe retornar una posición previamente "cacheada" independientemente 
 de su edad.
 
 mas info: https://developer.mozilla.org/es/docs/web/API/NavigatorGeolocation/geolocation*/

const getGeo = document.getElementById('botonGeo')

getGeo.addEventListener('click', ()=>{

    const geolocalización = navigator.geolocation

    geolocalización.getCurrentPosition(getPosition,error,options)
    geolocalización.watchPosition(getPosition,error,options)

})
const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximumAge:0
}

const getPosition = (position)=>{
    console.log(position);
}

const error = (error)=>console.log(error)

//  MATCH MEDIA()

/*El método Window.matchMedia() devuelve un nuevo objeto MediaQueryList que representa los analizados de la media query 
indicada.
Este objeto permite manejar las cosas de forma diferente cuando la ventana web es muy estrecha (reponsive desing)
MQL (media query list) es el objeto que se crea con el metodo matchMedia(mediaQueryString).
Las media queries (en español "consultas de medios") son útiles cuando deseas modificar tu página web o aplicación en
función del tipo de dispositivo (como una impresora o una pantalla) o de características y parámetros específicos 
(como la resolución de la pantalla o el ancho del viewport del navegador).
Cualquier mediaQueryString de CSS es complatible.
mas info: https://developer.mozilla.org/es/docs/CSS/Media_queries  */

const title = document.getElementById('title')

let mql = matchMedia('(min-width:400px) and (orientation: landscape)')

const applyMatchMedia = mql => {
    mql.matches ?
        //NO HACER ESTO NUNCA :)
        document.body.style.backgroundColor = 'red'
        //ESTO SI
        // title.classList.add('clase que sea')
        :
        //NO HACER ESTO NUNCA 
        document.body.style.backgroundColor = 'royalblue'
}

mql = matchMedia('(min-width:800px)')

addEventListener('resize', (e) => {
    if (innerWidth == '800') console.log(innerWidth)
    applyMatchMedia(mql)
})
addEventListener('resize', () => applyMatchMedia(mql))
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))

applyMatchMedia(mql)


//   Api INTERSECTION OBSERVER

/*La API Observador de Intersección, provee una vía para, de forma asíncrona, observar cambios en la intersección
 de un elemento con un elemento ancestro o con el viewport del documento de nivel superior.
 Históricamente, detectar la visibilidad de un elemento, o la visibilidad relativa de dos elementos el uno respecto
 del otro, ha sido una tarea difícil para la cual las soluciones no han sido muy fiables, siendo propensas a causar
 que el navegador y los sitios a los que el usuario accede lleguen a ser lentos. A medida que la web ha madurado,
 la necesidad para este tipo de información ha ido en aumento. La información sobre intersección es necesaria por
 muchas razones, tales como:

-Lazy-loading de imágenes u otro contenido a medida que la página se desplaza.
-Implementación de "scroll infinito" de sitios web, donde más y más contenido se carga y muestra a medida
 que usted hace scroll, de forma que el usuario no tiene que pasar páginas.
-Informes de visualizaciones de anuncios para calcular ingresos por publicidad.
-Decidir si deben realizarse tareas o procesos de animación basados en si el usuario verá o no el resultado.

El API Intersection Observer le permite configurar una función callback que es llamada cada vez que un elemento,
llamado target, intersecta con otro, bien el dispositivo viewport o un elemento específico; para el propósito de
esta API, le llamaremos root element o root. Típicamente, usted querrá observar los cambios en las intersecciones
con respecto al viewport del documento (lo cual se hace especificando null como elemento root ).
Tanto si está usted usando el viewport o algún otro elemento como root, el API funciona de la misma manera,
ejecutando una función callback que usted le proporciona cuando la visibilidad del elemento target cambia al cruzar
en la cantidad intersección deseada con el elemento root.

El grado de intersección entre el elemento target y su elemento root es el intersection ratio.
Esto es una representación del porcentaje del elemento target que es visible, y se muestra como un valor
entre 0.0 y 1.0.

OPCIONES de Intersection observer
El objeto options pasado al constructor IntersectionObserver() le deja controlar las circunstancias bajo las cuales
la función callback del observer es invocada. Tiene los siguientes campos:

-root
El elemento que es usado como viewport para comprobar la visibilidad de elemento target. Debe ser un elemento ascendiente 
del target. Por defecto se toma el viewport del navegador si no se especifica o si se especifica como null.
-rootMargin  
Margen alrededor del elemeto root. Puede tener valores similares a los de CSS margin property, e.g. "10px 20px 30px 40px" 
(top, right, bottom, left). Los valores pueden ser porcentajes. Este conjunto de valores sirve para aumentar o encoger 
cada lado del cuadro delimitador del elemento root antes de calcular las intersecciones. Por defecto son todos cero.
-threshold
Es un número o un array de números que indican a que porcentaje de visibilidad del elemento target, la función callback 
del observer debería ser ejecutada. Si usted quiere que se detecte cuando la visibilidad pasa la marca del 50%, debería 
usar un valor de 0.5. Si quiere ejecutar la función callback cada vez que la visibilidad pase otro 25%, usted debería 
especificar el array [0, 0.25, 0.5, 0.75, 1]. El valor por defecto es 0 (lo que significa que tan pronto como un píxel 
sea visible, la función callback será ejecutada). Un valor de 1.0 significa que el umbral no se considera pasado hasta 
que todos los pixels son visibles.*/

const cajas = document.querySelectorAll('.box')
const opciones ={
    //root:,
    //rootMargin: '200px', //'-100px'
    threshold: 0.25
}

const callback = (entries)=>{
    for(let en of entries){
        if(en.isIntersecting)
        console.log(en.target.id, 'isIntersecting');
    }
}
const observer = new IntersectionObserver(callback,opciones)
cajas.forEach(boxes => observer.observe(boxes))

//Ejemplo de LAZY LOAD 

const images = document.getElementById('img')
const fragment = document.createDocumentFragment()

const getImages = ()=>{
    axios('https://picsum.photos/v2/list?page=3&limit=3')
    .then(resultado=>{
        resultado.data.forEach(element =>{
            const newImg = document.createElement('img')
            newImg.src = element.download_url
            newImg.className = 'img'
            fragment.appendChild(newImg)
        })
        images.appendChild(fragment)
        setObserver()
    })
}

const getImagesX10 = ()=>{
    axios('https://picsum.photos/v2/list?page=3&limit=7')
    .then(resultado=>{
        resultado.data.forEach(element =>{
            const newImg = document.createElement('img')
            newImg.src = element.download_url
            newImg.className = 'img'
            fragment.appendChild(newImg)
        })
        images.appendChild(fragment)
        setObserver()
    })
}
const callback2 =(entries)=>{
    entries.forEach(element =>{
        if(element.isIntersecting){
        getImagesX10()
        }
    })
}

const setObserver = ()=>{
    const opciones2 ={
        threshold: 0.5
    }
    const observador = new IntersectionObserver(callback2,opciones2)
    observador.observe(images.lastElementChild)
}
getImages()
