export default class Greeter {

  constructor(options){
    this.options = options;
  }

  greet(name='fuck'){
    return `Hello ${name}`;
  }
}
