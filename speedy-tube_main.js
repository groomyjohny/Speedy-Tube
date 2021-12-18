// ==UserScript==
// @name         Speedy Tube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A script to make YouTube videos play faster than 2x 
// @author       groomyjohny
// @include      https://*youtube.com/*
// @grant        none
// ==/UserScript==

let configuredSpeed = 3;
window.addEventListener("load", function(){
    let videos = document.getElementsByTagName("video");
    for (v in videos)
    {
        v.defaultPlaybackSpeed = configuredSpeed;
    }
})