const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/mcgill-crest.png") {
        myImage.setAttribute("src", "images/desautels-logo.png");
    } else {
        myImage.setAttribute("src", "images/mcgill-crest.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Please hire me, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Please hire me, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
