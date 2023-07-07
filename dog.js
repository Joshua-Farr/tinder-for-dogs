


// {
//     name: "Teddy",
//     avatar: "images/dog-teddy.jpg",
//     age: 30,
//     bio: "How you doin?",
//     hasBeenSwiped: false,
//     hasBeenLiked: false
// }
class Dog{
    constructor(data){
        Object.assign(this , data)
    }

    getDogHtml(){
        console.log("Generating html")
        return `
            <img class="dog-profile-picture" src=${this.avatar} alt="">
            <img class ="like-badge" id="like-badge" src="./assets/badge-like.png" alt="">
            <img class ="dislike-badge" id="dislike-badge" src="./assets/badge-nope.png" alt="">
            <div class="dog-profile-info">
                <h3>${this.name}, ${this.age}</h3>
                <h4>${this.bio}</h4>
            </div>`
    }

    isLiked(){
        this.hasBeenLiked = true;
        this.hasBeenSwiped = true;
        console.log(`${this.name} has been liked!`)
        document.getElementById("like-badge").classList.add("visible");
    }

    isRejected(){
        this.hasBeenSwiped = true;
        console.log(`${this.name} has been disliked!`)
        document.getElementById("dislike-badge").classList.toggle("visible");
    }


}


export default Dog

