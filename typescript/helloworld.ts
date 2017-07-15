class Greeter {
  constructor (public message: string){

  }
  sayHi() {
    return `<h1>${this.message}</h1>`;
  }
}

const myGreetThing = new Greeter('Jello world');

document.getElementById('container').innerHTML = myGreetThing.sayHi();
