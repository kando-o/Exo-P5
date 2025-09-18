// votre code ici

const checkAge = age => `Vous êtes ${age < 18 ? "mineur" : age < 65 ? "majeur" : "senior"}.`;

console.log(checkAge(15)); // "Vous êtes mineur."
console.log(checkAge(30)); // "Vous êtes majeur."
console.log(checkAge(75)); // "Vous êtes senior."

export default checkAge;

