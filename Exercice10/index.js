//votre code ici

export default function printNumbers(n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }

  return result.trim(); // retire l'espace en trop à la fin
}

// Exemple d'utilisation
console.log(printNumbers(5)); // "1 2 3 4 5"
