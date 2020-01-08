export default class Person{
    constructor(name){
        this.name = name;
        this.name === 'Caesar' ? this.canIReadSecrets = true : this.canIReadSecrets = false;
    }
}