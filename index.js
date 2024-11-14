document.body.style.backgroundColor = "burlywood";
document.body.style.color = "black";

    //Skapar en h1-tag, lägger till text i den och placerar i DOMen
let newH1Tag = document.createElement("h1");
    newH1Tag.innerText = "Rubrik från Javascript!";
let addedH1ToBody = document.querySelector("body");
    addedH1ToBody.append(newH1Tag);

    //Skapar en p-tag, lägger till text i den och placerar i DOMen
let newPtag = document.createElement("p");
    newPtag.innerText = "En p-tagg från Javascript!";
let addedPToBody = document.querySelector("body");
    addedPToBody.append(newPtag);

    //Skapar en button, lägger till text i den och placerar i DOMen
let newButton = document.createElement("button");
let addedButtonToBody = document.querySelector("body");
    addedButtonToBody.append(newButton);
    newButton.innerText = "Klicka på mig!";

    newButton.addEventListener("click", function() {
        let allPTags = document.querySelectorAll("p");
        allPTags.forEach(function(pTag) {
            pTag.innerText = "Surprise mother-fudge - I am a big boy now";
            pTag.style.color = "white";
            pTag.style.fontFamily = "monospace";
            pTag.style.fontSize = "20px"
        });

        let liiTags = document.querySelectorAll("li");
        liiTags.forEach(function(liTag) {
            liTag.style.listStyleType = "none";
            liTag.style.display = "inline";
            liTag.style.padding = "10px";
        });
    });

let myArray = [2,5,10,15,20,25,30,50,60,92];

let newUlTag = document.createElement("ul");
let addedUlToBody = document.querySelector(".li-container");
    addedUlToBody.append(newUlTag);
    
myArray.forEach(function(number, index) {
    let newLiTag = document.createElement("li");
    newUlTag.append(newLiTag);
    newLiTag.innerText = number;
    if ((index + 1) % 5 === 0) {
        newLiTag.style.color = "purple";
    } else if (number % 2 === 0) {
        newLiTag.style.color = "white";
    } else {
        newLiTag.style.color = "yellow";
    }
});


let profileArray = [
    {
        name: "Johan",
        age: 35,
        amoutOfPets: 2,
        email: "johan@me.com",
        favoriteAuthor: "Stephen King",
        lovesWinter: true
    },
    {
        name: "Kalle",
        age: 32,
        amoutOfPets: 1,
        email: "kalle@me.com",
        favoriteAuthor: "Agatha Christie",
        lovesWinter: false
    },
    {
        name: "Erik",
        age: 27,
        amoutOfPets: 0,
        email: "erik@me.com",
        favoriteAuthor: "J.K. Rowling",
        lovesWinter: true
    }
]

let showProfileBtn = document.querySelector(".profile-btn");

showProfileBtn.addEventListener("click", function() {

    let profileCards = document.querySelectorAll(".profile-cards");
    
    profileArray.forEach(function(profile, index) {

        
        let profileName = profile.name;
        let profileAge = profile.age;
        let profilePets = profile.amoutOfPets;
        let profileEmail = profile.email;
        let profileFavAuthor = profile.favoriteAuthor;
        let profileLovesWinter = profile.lovesWinter;
        
        if (profileLovesWinter === true) {
            profileCards[index].style.backgroundColor = "orange";    
        } else {
            profileCards[index].style.backgroundColor = "lightblue";
        }

        let profileCard = document.querySelector(`#profile-${index + 1}`);
        profileCard.innerHTML = `
            <h2>${profileName}</h2>
            <span><strong>Age:</strong> ${profileAge}</span><br>
            <span><strong>Amount of pets:</strong> ${profilePets}</span><br>    
            <span><strong>Email:</strong> ${profileEmail}</span><br>
            <span><strong>Favorite author:</strong> ${profileFavAuthor}</span><br>
            ${profileLovesWinter ? `<span><strong>Loves winter:</strong> Yes</span>` : `<span><strong>Loves winter:</strong> No</span>`}
        `;
    });

    profileCards.forEach(function(profileCard) {
        profileCard.style.visibility = "visible";
    });

});