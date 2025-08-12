import "bootstrap";
import "./style.css";
  
function excusa() {

let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch ', 'while I was praying '];

let whorandom = Math.floor(Math.random() * who.length);
let actionrandom = Math.floor(Math.random() * action.length);
let whatrandom = Math.floor(Math.random() * what.length);
let whenrandom = Math.floor(Math.random() * when.length);

let  randomword = who[whorandom] +  action[actionrandom] + what[whatrandom] + when[whenrandom];
return(randomword)
};

let randomword = excusa();

window.onload = function() {
  document.getElementById("excuse").innerText = randomword
};