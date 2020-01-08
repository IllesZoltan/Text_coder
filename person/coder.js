import { decode, encode } from '../utils/.index.js';

export default class Coder {
    constructor(person, text) {
        this.person = person;
        this.text = text;
    }

    read() {
        if (this.person.canIReadSecrets) {
            const normal = decode(this.text);
            console.log(`${person.name} can read this: ${this.text} => ${normal}`);
        } else {
            console.log(`${this.name} can't read this: ${this.text}`);
        }
    }

    write() {
        if (this.person.canIReadSecrets) {
            const secret = encode(this.text);
            console.log(`${person.name} can encode this: ${this.text} => ${secret}`);            
        }else{
            console.log(`${this.name} can't encode this: ${this.text}`);
        }
    }
}