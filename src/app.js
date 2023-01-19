/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My granma", "His turtle", "My bird"];

let what = [" eat", " pissed", " crushed", " broked"];

let when = [
  " before the class.",
  " right in time.",
  " when I finished.",
  " during my lunch.",
  " while I was praying."
];

window.onLoad = function(who, what, when) {
  //write your code here
  let excusa = "";
  let numero1 = Math.floor(Math.random() * 4);
  let numero2 = Math.floor(Math.random() * 4);
  let numero3 = Math.floor(Math.random() * 5);

  excusa += who[numero1] + what[numero2] + when[numero3];
  var element = document.getElementById("excuse");
  return (element.innerHTML = excusa);
};

console.log(onLoad(who, what, when));
