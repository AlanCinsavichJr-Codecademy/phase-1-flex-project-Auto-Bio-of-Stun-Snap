//let newIDNum = 0; Do we need this for this wepage? Don't think so must confirm

const key = "";

//Must build the photo database aka db.json file to get the api key

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Photo-Gallery-of-Star-Cars-button").addEventListener("onlcick",e=>{
        e.preventDefault();
        document.getElementById("Photo-Gallery-of-Star-Cars").innerHTML = '';
    });
    document.getElementById("Hot-Models-Photo-Gallery-button").addEventListener("onclick"), e=>{
        e.preventDefault();
        document.getElementById("Hot-Models-Photo-Gallery").innerHTML = '';

    });

});

