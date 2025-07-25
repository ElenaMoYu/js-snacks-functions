/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = "Mario";

// Dichiara la funzione qui.

function askTime() {
  const WhatTimeIsIt = Number(prompt("What time is it?"));
  if (isNaN(WhatTimeIsIt) || WhatTimeIsIt < 0 || WhatTimeIsIt > 23) {
    return askTime();
  } else {
    if (WhatTimeIsIt > 4 && WhatTimeIsIt < 13) {
      return `Buongiorno ${nome}`;
    } else if (WhatTimeIsIt > 12 && WhatTimeIsIt < 17) {
      return `Buon pomeriggio ${nome}`;
    } else {
      return `Buona seeeeera ${nome}`;
    }
  }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(askTime());

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
