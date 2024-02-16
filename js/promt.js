"use strict";

const color = prompt("What is the color?");
console.log(color);
let action;

switch (color.trim().toLowerCase){
    case "red": {
        action = "stop";
        break;
    }
    case "yellow": {
        action = "ready";
        break;
    }
    case "green": {
        action = "go";
        break;
    }
    case "": {
        action = "no did";
        break;
    }
    default: {
        action = "be careful";
    }
}
console.log(action);