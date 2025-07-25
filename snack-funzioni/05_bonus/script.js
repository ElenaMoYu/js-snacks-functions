/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = "Mario";

function askTime() {
  const WhatTimeIsIt = Number(prompt("What time is it?"));
  if (isNaN(WhatTimeIsIt) || WhatTimeIsIt < 0 || WhatTimeIsIt > 23) {
    alert("Inserisci un orario valido (0-23)");
    return askTime();
  } else {
    if (WhatTimeIsIt >= 5 && WhatTimeIsIt < 13) {
      return `Buongiorno ${nome}`;
    } else if (WhatTimeIsIt >= 13 && WhatTimeIsIt < 17) {
      return `Buon pomeriggio ${nome}`;
    } else {
      return `Buonasera ${nome}`;
    }
  }
}

console.log(askTime());

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
