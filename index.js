import {encode,decode} from "./utils/index.js";
import Person from "./person/person.js";
import Coder from "./person/coder.js";

const normalText = "Hello World";

const secretText = encode(normalText);
// console.log(normalText, secretText);

// const normalTextAgain = decode(secretText);
// console.log(normalTextAgain);


const normalPerson = new Person('Zoli');
const codr = new Coder(normalPerson,normalText);
codr.encode();

const caesar = new Caesar();
const cdr = new Coder(caesar,secretText);
cdr.decode();

//const secretTextFromCaesar = caesar.write('ez lesz a titkos szoveg');
//console.log(secretTextFromCaesar);

