var btn = document.getElementById("colourbtn");
var greenIn = document.getElementById("greenin");
var blueIn = document.getElementById("bluein");
var redIn = document.getElementById("redin");
var displayIn = document.getElementById("display").value
var blackClicked = document.getElementById("blackBtn")
var whiteClicked = document.getElementById("whiteBtn")
redIn.addEventListener("input", btnClicked);
blueIn.addEventListener("input", btnClicked);
greenIn.addEventListener("input", btnClicked);
blackClicked.addEventListener("click", black);
whiteClicked.addEventListener("click", white);
let widthIn = document.getElementById("width");
let heightIn = document.getElementById("height");

widthIn.addEventListener("change", changeSize);
heightIn.addEventListener("change", changeSize);

function changeSize() {
    let widthV = +widthIn.value;
    let heightV = +heightIn.value;
  
  
    if (heightV < 50) {
      heightV = 50;
      heightV.value = 0;
    } else if (heightV > 200) {
      heightV = 200;
      heightV.value = 200;
    }
  
  
    if (widthV < 50) {
      widthV = 50;
      widthV.value = 0;
    } else if (widthV > 400) {
      widthV = 400;
      widthV.value = 400;
    }
    let heightOut = `${heightV}px`;
    let widthOut = `${widthV}px`;
  
  
    document.getElementById("display").style.width = widthOut;
    document.getElementById("display").style.height = heightOut;
  }
  

function black() {
document.getElementById("display").style.background = "rgb(0, 0, 0)";
}

function white() {
document.getElementById("display").style.background = "rgb(255, 255, 255)";
}



function btnClicked() {
var greenV = +greenIn.value
var blueV = +blueIn.value
var redV = +redIn.value

if (redV < 0) {
    redV = 0;
    redV.value = 0;
} else if (redV > 255) {
redV = 255;
redV.value = 255;
}

if (greenV < 0) {
    greenV = 0;
    greenV.value = 0;
} else if (greenV > 255) {
greenV = 255;
greenV.value = 255;
}

if (blueV < 0) {
    blueV = 0;
    blueV.value = 0;
} else if (blueV > 255) {
blueV = 255;
blueV.value = 255;
}

var output = `rgb(${redV}, ${greenV}, ${blueV})`;
document.getElementById("display").style.background = output
console.log(output);
}