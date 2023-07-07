import Dog from './dog.js'
import dogs from './data.js'


let currentDog = getNewDog();
render();

function getNewDog(){
    // console.log(dogs.shift());
    const nextDog = (dogs.shift());
    return nextDog ? new Dog(nextDog) : {};
    
}

document.addEventListener('click', function(e){

    // console.log(e.target.id);
    if(e.target.id === "like-btn"){
        dogIsLiked();

    }else if(e.target.id === "dislike-btn"){
        dogIsDisliked();
    }

})

function render(){
    document.getElementById("dog-profile-card").innerHTML = currentDog.getDogHtml();
}

function dogIsLiked(){
    // console.log("Liked button clicked");
    currentDog.isLiked();
    // console.log(currentDog)
    currentDog = getNewDog();
    render();
}

function dogIsDisliked(){
    // console.log("Dislike button clicked");
    currentDog.isRejected();
    // console.log(currentDog);
    currentDog = getNewDog();
    render();
}


