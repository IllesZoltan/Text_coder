import Person from "./person.js";
//import { decode, encode } from "../utils/index.js";

export default class Caesar extends Person{
    constructor(){
        super('Caesar');
        this.canIReadSecrets = true;
    }
}