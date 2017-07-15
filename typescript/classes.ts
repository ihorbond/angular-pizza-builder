class Soldier {
  isDead: Boolean = false;

  constructor (
    public health: number,
    public strength: number,
    public specialization: string,
    public name: string,
    public weapon: string
  ) {}
  receiveDamage(damage: number) {
    this.health -= damage;
  }
}
//
// const soldierA = new Viking(1000, 20, 'vodka allocator', 'Petro', 'drunkiness');
// const soldierB = new Saxon(100, 300, 'vodka destroyer', 'Dmitro', 'soberness');
interface AttackerInterface {
  strength: number;
  receiveDamage(number);
}

class Viking implements AttackerInterface {
  constructor (
    public health: number,
    public strength: number
  ) {}
  receiveDamage(damage: number) {
    this.health -= damage;
    return "i dont wanna die";
  }
}

class Saxon implements AttackerInterface {
  constructor (
    public health: number,
    public strength: number
  ) {}
  receiveDamage(damage: number) {
    this.health -= damage;
    return "whatever";
  }
}

const saxonA = new Saxon (100,10);
const vikingA = new Viking(3000,300);

function peopleAttack (person1: AttackerInterface, person2: AttackerInterface) {
  person2.receiveDamage(person1.strength);
  person1.receiveDamage(person2.strength);
}

peopleAttack (saxonA, vikingA);
