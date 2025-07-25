/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.

const howManyVowels = (string) => {
  const stringToArray = string.split("");
  const voWels = stringToArray.filter((char) => "aeiou".includes(char));

  return voWels.length;
};

// Invoca la funzione qui e stampa il risultato in console

console.log(howManyVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
