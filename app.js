window.addEventListener('load',obtenerDatos);

function obtenerDatos(){
    
    const ruta= `https://api.nasa.gov/planetary/apod?api_key=xMG7SXRnGRkqB2dDdbpb6xDsD84WLAMAOPWsq731`;

    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos({title,explanation,media_type,date,url}){


const titulo= document.querySelector('#tit');
tit.innerHTML= title;

const fecha= document.querySelector('#fecha');
fecha.innerHTML= date;

const descripcion = document.querySelector('#desc');
desc.innerHTML= explanation;

const multimedia= document.querySelector('#c_multimedia');
if (media_type == 'video'){
    multimedia.innerHTML=` <iframe class="embed-responsive-item" src="${url}"></iframe>`
} else{
    multimedia.innerHTML=`<img src="${url}" class="img-fluid" alt="${url}">`
}

}