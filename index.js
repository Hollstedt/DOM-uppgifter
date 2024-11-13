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
            pTag.innerText = "Surprise motherfucker - I am a big boy now";
            pTag.style.color = "white";
            pTag.style.fontFamily = "monospace";
            pTag.style.fontSize = "20px";
        });
    });