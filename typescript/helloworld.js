var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHi = function () {
        return "<h1>" + this.message + "</h1>";
    };
    return Greeter;
}());
var myGreetThing = new Greeter('Jello world');
document.getElementById('container').innerHTML = myGreetThing.sayHi();
