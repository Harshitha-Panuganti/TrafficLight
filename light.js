let stopButtonEl = document.getElementById("stopButton");
let stopLightEl = document.getElementById("stopLight");
let readyButtonEl = document.getElementById("readyButton");
let readyLightEl = document.getElementById("readyLight");
let goButtonEl = document.getElementById("goButton");
let goLightEl = document.getElementById("goLight");

function stopButton() {
    stopButtonEl.style.backgroundColor = "#cf1124";
    stopLightEl.style.backgroundColor = "#cf1124";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    readyLightEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#4b5069";
}

function readyButton() {
    readyButtonEl.style.backgroundColor = "#199473";
    readyLightEl.style.backgroundColor = "#199473";
    stopButtonEl.style.backgroundColor = "#1f1d41";
    stopLightEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "#1f1d41";
    goLightEl.style.backgroundColor = "#4b5069";
}

function goButton() {
    goButtonEl.style.backgroundColor = "#f7c948";
    goLightEl.style.backgroundColor = "#f7c948";
    stopButtonEl.style.backgroundColor = "#1f1d41";
    stopLightEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "#1f1d41";
    readyLightEl.style.backgroundColor = "#4b5069";
}