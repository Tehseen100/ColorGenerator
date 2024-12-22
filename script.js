let colorBox = document.getElementById("colorBox");
let body = document.querySelector("body");

function genColor(color) {
    hexCode = '#' + Math.random().toString(16).slice(2, 8);
    // console.log(hexCode);
    colorBox.value = hexCode;
    body.style.backgroundColor = hexCode;

}