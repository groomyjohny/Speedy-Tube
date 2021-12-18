// ==UserScript==
// @name         Speedy Tube
// @namespace    http://tampermonkey.net/
// @version      0.3.2
// @description  A script to make YouTube videos play faster than 2x 
// @author       groomyjohny
// @include      https://*youtube.com/*
// @grant        none
// @downloadURL  https://github.com/groomyjohny/Speedy-Tube/blob/main/speedy-tube_main.js
// ==/UserScript==

let configuredRate = 3;
window.addEventListener("load", () => {
    console.log("Waking up changing...")
    //this.setTimeout(() => {
        let videos = document.getElementsByTagName("video");
        for (let v in videos)
        {
            console.log("Chaning speed...",v.playbackRate = configuredRate);
        }
   // })
   
})