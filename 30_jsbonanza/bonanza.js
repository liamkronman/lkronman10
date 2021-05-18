// Team LMAo (Maddy Andersen, Amelia Chin, Liam Kronman)
// SoftDev
// K30: JSorcery -- canvas based JS animation
// 2021-05-17

// model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var waveButton = document.getElementById("buttonWave");
var stopButton = document.getElementById("buttonStop");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

var requestID;

//var clear = function(e) {
var clear = (e) => {
  //e.preventDefault(); //talk abt in notes
  ctx.clearRect(0, 0, c.width, c.height);
};

var change = 0;

//var wavy = function() {
var wavy = () => {
    console.log("wavy invoked...")
    window.cancelAnimationFrame(requestID);

    clear();
    ctx.beginPath();
    ctx.strokeStyle = "red"; //notes

    var x = 0;
    var y = 0;
    var amp = 100;
    var freq = 30;

    while (x < c.width) {
        y = c.height/2 + amp * Math.sin((x + change)/freq); //notes
        ctx.lineTo(x, y);
        x++;
    }
    ctx.stroke(); //notes
}

//var drawWave = function() {
var drawWave = () => {
  console.log("drawWave invoked...")
  wavy(change);
  change += 3;
  requestID = window.requestAnimationFrame(drawWave);
}

//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
};

waveButton.addEventListener("click", drawWave);
stopButton.addEventListener("click", stopIt);
