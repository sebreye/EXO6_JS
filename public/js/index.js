// exercice 1
let coding = ["coding 20", "coding 21", "coding 22"]
console.log(coding);
console.log(coding.length);
console.log(coding[0]);
console.log(coding[1]);
console.log(coding[2]);
// fin exercice1

// exercice 2
let exo2 = "exo 2"
console.log(exo2);
let coding2 = ["coding 23", "coding 24", "coding 25"]
coding2.forEach(element => console.log(element));
console.log(coding2.join());
let name = coding2.push('sebastian');
console.log(coding2);
// fin exercice 2

// exercice3
let exo3 = "exo 3"
console.log(exo3);
let coding3 = ["coding 26", "coding 27", "coding 28"]
console.log(coding3);
let name2 = coding3.push('sebastian');
console.log(coding3);
coding3.splice(0, 1, 'coding 40')
console.log(coding3);
