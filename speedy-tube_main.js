// ==UserScript==
// @name         Speedy Tube
// @namespace    http://tampermonkey.net/
// @version      0.3.3
// @description  A script to make YouTube videos play faster than 2x 
// @author       groomyjohny
// @include      https://*youtube.com/*
// @grant        none
// @downloadURL  https://github.com/groomyjohny/Speedy-Tube/blob/main/speedy-tube_main.js
// ==/UserScript==

let debugMode = true;
function debugLog(... p)
{
    if (debugMode)
    {
        console.log("[Speedy Tube]:",...p)
    }
}
let configuredRate = 3;
window.addEventListener("load", () => {
    debugLog("Waking up changing...")
    //this.setTimeout(() => {
        let videos = document.getElementsByTagName("video");
        debugLog("videos are:",videos);
        for (let v in videos)
        {
            debugLog("Chaning speed...",v.playbackRate = configuredRate);
        }
   // })
   
})