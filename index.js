let newIDNum = 0

const key = "26847882-ce742f707a7c77e680249c5b0"
const button = document.querySelector('.btn')


document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("Photo-Gallery-of-Star-Cars");
    
    getPixaStarCarsPhotos(e.target.topic.value);
    document.getElementById("Hot-Models-Photo-Gallery"); 
     
    getPixaHotModelsPhotos(e.target.topic.value);
   });
    //  Instead of event listener button concentrate on loading the gallery and being able to render gallery as part of the location argument as part of forEach in fetch
 

    document.getElementById("Like-Button").addEventListener("click",e=>{
        e.preventDefault();
        // Add Like counter here

    })
 //     document.getElementById("Introduction").style.display = "none";
    //     document.getElementById("Like-Button").style.display = "none";
    //     document.getElementById("Vacations-and-Models").style.display = "none";
    //     document.getElementById("Subscribe").style.display = "none";
    //     document.getElementById("container").style.display = "block";

function getPixaPhotos(topic){
    fetch(`https://pixabay.com/api/?key=${key}&q=${topic}&image_type=photo`)
    .then(r => r.json())
    .then(j => j.hits.forEach(renderPhotoPost))
    //Need to add another argument or variable after renderPhotoPost as a location for each gallery
}    

getPixaPhotos("Hot Rod Cars");
//topic is invoked wthe getPixaPhotos above along with location

function renderPhotoPost(photoData) {

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

    photoPost.append(photo);
    document.getElementById("Hot-Models-Photo-Gallery").append(photoPost,linkElement);

}

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})


$('#toggle').click(function() {
    if ($(this).is(":checked")) {
      $(".sub").css("opacity", 0);
      $(".thanks").css("opacity", 1);
    } 
    else if ($(this).is(":not(:checked)")) {
       $(".sub").css("opacity", 1);
       $(".thanks").css("opacity", 0);
    }
  });

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