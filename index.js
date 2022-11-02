let newIDNum = 0

const key = "31025559-1d12f38f3606df5b59db8ee14"
const button = document.querySelector('.btn')
const carGallery= document.getElementById("Photo Gallery of Star Cars");
const modelGallery = document.getElementById("Hot Models Photo Gallery"); 
const topic = ("Hot+Rod+Cars")

console.log("This part works")

function getPixaPhotos(carGallery){
    fetch(`https://pixabay.com/api/?${key}&q=${topic}&image_type=photo`)
    .then(r => r.json())
    .then(carGallery.forEach(renderPhotoPost(topic)))
    

getPixaPhotos(carGallery);
//topic is invoked wthe getPixaPhotos above along with location

console.log("WHY WHY")
    
} 

document.addEventListener("DOMContentLoaded",()=>{
    // return carGallery, modelGallery;
   });

    // document.getElementById("Like-Button").addEventListener("click",e=>{
    //     e.preventDefault();
    //     // Add Like counter here

    // })

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
    carGallery.append(photoPost,linkElement);
    modelGallery.append(photoPost,linkElement);

}

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})


('#toggle').click(function() {
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