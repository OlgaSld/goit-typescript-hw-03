class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
  }

  getSignature() {
    return `Signature: ${this.signature}`;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      //двері відкриті, додали об'єкт
    } else {
      console.log("Door is closed");
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key === this.key) {
      this.door = true;
    } else {
      console.log("Door is closed");
    }
  }
}

const key = new Key(4);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
