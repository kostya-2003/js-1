"use strict";

const items = document.querySelector("#items");

window.addEventListener("keydown", (e) => {
    if(e.which == "87"){
        items.style.top = "0";
        items.style.bottom = "100%";
    } else if(e.which == "83"){
        items.style.top = "100%";
        items.style.bottom = "0";
    } else if(e.which == "65"){
        items.style.right = "0";
        items.style.left = "-100%";
    } else if(e.which == "68"){
        items.style.right = "0";
        items.style.left = "100%";
    }else if(e.which == "82"){
        items.style.right = "0";
        items.style.left = "0";
        items.style.top = "0";
        items.style.bottom = "0";
    }
});