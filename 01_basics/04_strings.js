const name="nihal";
const repocount= 3;
console.log(`hello my name is ${name.toUpperCase()} my repo count is ${repocount}`);  // STRING INTERPOLATION

// BETTER WAY TO DECLARE A STRING 

const gamename= new String("Nihal-agnihotri-sneha");
// console.log(gamename[0]);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename);
// console.log(gamename.charAt('3'));
// console.log(gamename.indexOf('a'));

const newstring= gamename.substring(0,3);
console.log(newstring);

const anotherstring= gamename.slice(-5,3)
console.log(anotherstring);

const newstringone= "     nihal    ";
console.log(newstringone);
console.log(newstringone.trim());

const url ="https://nihal.com/agnihotri01";
console.log(url.replace('.com','.yahoo'));

console.log(url.includes('nihal'));

console.log(gamename.split('-'))







 console.log(gamename.__proto__)    // WILL DECLARE AN OBJECT





