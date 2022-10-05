let newIDNum = 0

const ket = "26847882-ce742f707a7c77e680249c5b0"
const button = document.querySelector('.btn')


document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("Photo-Gallery-of-Star-Cars-button").addEventListener("onlcick",e=>{
        e.preventDefault();
        document.getElementById("Photo-Gallery-of-Star-Cars").innerHTML ='';
        getPixaStarCarsPhotos(e.target.topic.value);
    });

    document.getElementById("Like-Button").addEventListener("click",()=>{
        
    })

    document.getElementById("Hot-Models-Photo-Gallery-button").addEventListener("onclick",e=>{
        e.preventDefault();
        document.getElementById("Hot-Models-Photo-Gallery").innerHTML = '';
        getPixaHotModelsPhotos(e.target.topic.value)
    });

getPixaStarCarsPhotos("");
getPixaHotModelsPhotos("");

});




function getPixaStarCarsPhotos(topic) {
    document.getElementById("Star-Cars-Photo-Gallery").style.display = "flex";
    fetch(`https://pixabay.com/api/?key=${key}&q=${topic}&image_type=photo`).then(r=>r.json()).then(j=>j.hits.forEach(renderPhotoPost));
}

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})

function getPixaHotModelsPhotos(topic) {
    document.getElementById("Hot-Models-Cosplay-Gallery").style.display = "flex";
    fetch(`https://pixabay.com/api/?key=${key}&q=${topic}&image_type=photo`).then(r=>r.json()).then(j=>j.hits.forEach(renderPhotoPost));
}

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})

