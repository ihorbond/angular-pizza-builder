var Soldier = (function () {
    function Soldier(health, strength, specialization, name, weapon) {
        this.health = health;
        this.strength = strength;
        this.specialization = specialization;
        this.name = name;
        this.weapon = weapon;
        this.isDead = false;
    }
    Soldier.prototype.receiveDamage = function (damage) {
        this.health -= damage;
    };
    return Soldier;
}());
var Viking = (function () {
    function Viking(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    Viking.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        return "i dont wanna die";
    };
    return Viking;
}());
var Saxon = (function () {
    function Saxon(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    Saxon.prototype.receiveDamage = function (damage) {
        this.health -= damage;
        return "whatever";
    };
    return Saxon;
}());
var saxonA = new Saxon(100, 10);
var vikingA = new Viking(3000, 300);
function peopleAttack(person1, person2) {
    person2.receiveDamage(person1.strength);
    person1.receiveDamage(person2.strength);
}
peopleAttack(saxonA, vikingA);
