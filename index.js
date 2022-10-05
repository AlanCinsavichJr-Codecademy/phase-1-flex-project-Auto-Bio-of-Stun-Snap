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
        document.getElementById("Introduction").style.display = "none";
        document.getElementById("Like-Button").style.display = "none";
        document.getElementById("Vacations-and-Models").style.display = "none";
        document.getElementById("Subscribe").style.display = "none";
        document.getElementById("container").style.display = "block";
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

function renderPhotoPostOne(photoData) {

    let photoPost = document.createElement("div");
    photoPost.id = `post${photoData.id}`;
    photoPost.className = "photo-post";

    let photo = document.createElement("img");
    photo.src = photoData.webformatURL;

    let linkElement = document.createElement("a");
    linkElement.href = photoData.pageURL;
    linkElement.target = "_blank";
    linkElement.textContent = `Photo by ${photoData.user}`;

    photoPost.append(photo);
    document.getElementById("Star-Cars-Photo-Gallery").append(photoPost,linkElement);

}

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})

function getPixaHotModelsPhotos(topic) {
    document.getElementById("Hot-Models-Cosplay-Gallery").style.display = "flex";
    fetch(`https://pixabay.com/api/?key=${key}&q=${topic}&image_type=photo`).then(r=>r.json()).then(j=>j.hits.forEach(renderPhotoPost));
}

function renderPhotoPostTwo(photoData) {

    let photoPost = document.createElement("div");
    photoPost.id = `post${photoData.id}`;
    photoPost.className = "photo-post";

    let photo = document.createElement("img");
    photo.src = photoData.webformatURL;

    let linkElement = document.createElement("a");
    linkElement.href = photoData.pageURL;
    linkElement.target = "_blank";
    linkElement.textContent = `Photo by ${photoData.user}`;

    photoPost.append(photo);
    document.getElementById("Star-Cars-Photo-Gallery").append(photoPost,linkElement);

}

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})

function createPhotoObj(e) {
    newIDNum++;
    let photo = {
        id: newIDNum,
        webformatURL: e.target.webformatURL.value,
        webformatWidth: e.target.webformatWidth.value,
        webformatHeight: e.target.webformatHeight.value,
        user: e.target.user.value,
        likes: 0
    };
    return photo;
}