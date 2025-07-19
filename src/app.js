import "bootstrap";
import "./style.css";



window.onload = function() {
  //write your code here
  
let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch ', 'while I was praying '];

let whorandom = who[Math.floor(Math.random() * who.length)]
let actionrandom = action[Math.floor(Math.random() * action.length)]
let whatrandom = what[Math.floor(Math.random() * what.length)]
let whenrandom = when[Math.floor(Math.random() * when.length)]

let randomwords = whorandom + actionrandom + whatrandom + whenrandom

document.getElementById("excuse").innerHTML = randomwords

};