let newIDNum = 0

const key = "31025559-1d12f38f3606df5b59db8ee14"
const url1 = "https://pixabay.com/api/?key="
const url2 = "&image_type=photo"
const carGallery= document.getElementById("Photo Gallery of Star Cars");
const modelGallery = document.getElementById("Hot Models Photo Gallery"); 
const topic1 = ("Hot+Rod+Cars")
const topic2 = ("Female-Swimsuit-Models")
const button = document.querySelector('.btn')
debugger; 

document.addEventListener("DOMContentLoaded",()=>{

console.log("This part works")

    fetch(`${url1}${key}&q=${topic1}${url2}`)
    .then(response =>  {
        let response1 = response;
        console.log(response)
        let response1jsonPromise = response1.json().then(rJson => {
            console.log({rJson})
            rJson.hits.map((item) => {
                let newImg = document.createElement('img');
                newImg.src = item.previewURL;
                carGallery.append(newImg);
                console.log(response1jsonPromise)
            })
        })
      })

    fetch(`${url1}${key}&q=${topic2}${url2}`)
    .then(response =>  {
        let response1 = response;
        console.log(response)
        let response1jsonPromise = response1.json().then(rJson => {
            console.log({rJson})
            rJson.hits.map((item) => {
                let newImg = document.createElement('img');
                newImg.src = item.previewURL;
                modelGallery.append(newImg);
                console.log(response1jsonPromise)
  

console.log("WHY WHY")
    
  // document.getElementById("Like-Button").addEventListener("click",e=>{
    //     e.preventDefault();
    //     // Add Like counter here

    // })


             });
            }
    )});
});        

   

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