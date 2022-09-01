
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

// Variables

let activities = ["Langagier", "Cognitif", "Socio affectif", "Moteur"];

let imgsSelected = { sad: false, maso: false, happy: false };

let moonSelected = { awake: false, med:false, sleep: false};

const happy = document.querySelector("#happy");
const maso = document.querySelector("#maso");
const sad = document.querySelector("#sad");

//Date
const date = document.querySelector("#date");

date.textContent = "Date: " + today;

//Checkbox
const checkboxes = document.querySelector("#activites");

activities.forEach((element) => {
    const activity = document.createElement("input");

    activity.setAttribute("type", "checkbox");
    activity.setAttribute("id", element);
    activity.setAttribute("value", element);

    const text = document.createElement("label");

    text.setAttribute("for", element);
    text.textContent = element;

    checkboxes.append(activity, text);
});

//Imgs
happy.addEventListener("click", function () {

    if (imgsSelected.maso) {
        maso.click();
    } else if (imgsSelected.sad) {
        sad.click();
    }

    if (imgsSelected.happy) {
        happy.setAttribute("src", "./img/happy.png");
        imgsSelected.happy = false;
    } else {
        happy.setAttribute("src", "./img/happy-select.png");
        imgsSelected.happy = true;
    }
});

maso.addEventListener("click", function () {
    if (imgsSelected.happy) {
        happy.click();
    } else if (imgsSelected.sad) {
        sad.click();
    }

    if (imgsSelected.maso) {
        maso.setAttribute("src", "./img/maso.png");
        imgsSelected.maso = false;
    } else {
        maso.setAttribute("src", "./img/maso-select.png");
        imgsSelected.maso = true;
    }
});

sad.addEventListener("click", function () {

    if (imgsSelected.happy) {
        happy.click();
    } else if (imgsSelected.maso) {
        maso.click();
    }

    if (imgsSelected.sad) {
        sad.setAttribute("src", "./img/sad.png");
        imgsSelected.sad = false;
    } else {
        sad.setAttribute("src", "./img/sad-select.png");
        imgsSelected.sad = true;
    }
});


const sleep = document.querySelector("#sleep");
const med = document.querySelector("#med");
const awake = document.querySelector("#awake");

//Imgs Moons
sleep.addEventListener("click", function () {

    if (moonSelected.med) {
        med.click();
    } else if (moonSelected.awake) {
        awake.click();
    }

    if (moonSelected.sleep) {
        sleep.setAttribute("src", "./img/sleepy-moon.png");
        moonSelected.sleep = false;
    } else {
        sleep.setAttribute("src", "./img/sleepy.png");
        moonSelected.sleep = true;
    }
});

med.addEventListener("click", function () {
    if (moonSelected.sleep) {
        sleep.click();
    } else if (moonSelected.awake) {
        awake.click();
    }

    if (moonSelected.med) {
        med.setAttribute("src", "./img/med-moon.png");
        moonSelected.med = false;
    } else {
        med.setAttribute("src", "./img/med.png");
        moonSelected.med = true;
    }
});

awake.addEventListener("click", function () {

    if (moonSelected.sleep) {
        sleep.click();
    } else if (moonSelected.med) {
        med.click();
    }

    if (moonSelected.awake) {
        awake.setAttribute("src", "./img/nosleep.png");
        moonSelected.awake = false;
    } else {
        awake.setAttribute("src", "./img/nosleep-moon.png");
        moonSelected.awake = true;
    }
});
