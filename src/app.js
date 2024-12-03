/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hola Rigo!");
};

let pronoun = ['el', 'nuestro', 'su'];
  let adj = ['buen', 'gran', 'increible' ];
  let noun = ['perro', 'gato', 'loro', 'hornitorrinco', 'pato'];
  
  // generating the domains
  for(let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
      for(let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k]+'.com'); 
      }
    }
  }