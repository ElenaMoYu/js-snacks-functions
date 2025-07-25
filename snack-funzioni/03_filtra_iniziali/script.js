/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

const filterInitialLetter = (array, letter) => {
  const filteredWords = [];
  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (word.charAt(0).toLowerCase() === letter.toLowerCase()) {
      filteredWords.push(word);
    }
  }
  return filteredWords;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(filterInitialLetter(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
