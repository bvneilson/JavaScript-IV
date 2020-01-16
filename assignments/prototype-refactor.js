/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function GameObject(attrs) {
//   this.createdAt = attrs.createdAt;
//   this.name = attrs.name;
//   this.dimensions = attrs.dimensions;
//   this.alive = true;
// }
// GameObject.prototype.destroy = function () {
//   return `${this.name} was removed from the game.`;
// }
class GameObject {
  constructor (attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
    this.alive = true;
  }

  destroy () {
    return `${this.name} was removed from the game.`;
  }
}
// function CharacterStats(attrs) {
//   GameObject.call(this, attrs);
//   this.healthPoints = attrs.healthPoints;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function () {
//   return `${this.name} took damage.`;
// }
// CharacterStats.prototype.sayHealthPoints = function () {
//   if (this.healthPoints > 0) {
//     console.log(`${this.name} is at ${this.healthPoints} health points.`);
//   } else {
//     this.alive = false;
//   }
// }
class CharacterStats extends GameObject {
  constructor (attrs) {
    super(attrs);
    this.healthPoints = attrs.healthPoints;
  }

  takeDamage () {
    return `${this.name} took damage.`;
  }
  sayHealthPoints () {
    if (this.healthPoints > 0) {
      console.log(`${this.name} is at ${this.healthPoints} health points.`);
    } else {
      this.alive = false;
    }
  }
}
// function Humanoid(attrs) {
//   CharacterStats.call(this, attrs);
//   this.team = attrs.team;
//   this.weapons = attrs.weapons;
//   this.spells = attrs.spells;
//   this.curses = attrs.curses;
//   this.language = attrs.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function () {
//   return `${this.name} offers a greeting in ${this.language}.`;
// }
class Humanoid extends CharacterStats {
  constructor (attrs) {
    super(attrs);
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.spells = attrs.spells;
    this.curses = attrs.curses;
    this.language = attrs.language;
  }

  greet () {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
// === Hero ===
// function Hero (attrs) {
//   Humanoid.call(this, attrs);
// }
// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.attack = function (enemy) {
//   let attack = randomNum(3);
//   if (attack === 0) {
//     if (randomNum(5) === 3) {
//       damage = 15;
//       message = `Critical Hit!`
//     } else {
//       damage = 10;
//       message = '';
//     }
//     enemy.healthPoints -= damage;
//     return `${this.name} struck ${enemy.name} with the ${this.weapons[0]} of Light! ${message} ${enemy.name} lost ${damage} health points.`;
//   } else if (attack === 1) {
//     if (randomNum(5) === 1) {
//       damage = 10;
//       message = `Critical Hit!`
//     } else {
//       damage = 7;
//       message = '';
//     }
//     enemy.healthPoints -= damage;
//     return `${this.name} struck ${enemy.name} with the ${this.weapons[1]} of Truth! ${message} ${enemy.name} lost ${damage} health points.`;
//   } else if (attack === 2) {
//     if (randomNum(5) === 4) {
//       damage = 20;
//       message = `Critical Hit!`
//     } else {
//       damage = 15;
//       message = '';
//     }
//     enemy.healthPoints -= damage;
//     return `${this.name} cast a ${this.spells[0]} spell at ${enemy.name}! ${message} ${enemy.name} lost ${damage} health points.`;
//   } else {
//     console.log(attack);
//     return "ERROR";
//   }
// }
class Hero extends Humanoid {
  constructor (attrs) {
    super(attrs);
  }

  attack (enemy) {
    let damage;
    let message;
    let attack = randomNum(3);
    if (attack === 0) {
      if (randomNum(5) === 3) {
        damage = 15;
        message = `Critical Hit!`
      } else {
        damage = 10;
        message = '';
      }
      enemy.healthPoints -= damage;
      return `${this.name} struck ${enemy.name} with the ${this.weapons[0]} of Light! ${message} ${enemy.name} lost ${damage} health points.`;
    } else if (attack === 1) {
      if (randomNum(5) === 1) {
        damage = 10;
        message = `Critical Hit!`
      } else {
        damage = 7;
        message = '';
      }
      enemy.healthPoints -= damage;
      return `${this.name} struck ${enemy.name} with the ${this.weapons[1]} of Truth! ${message} ${enemy.name} lost ${damage} health points.`;
    } else if (attack === 2) {
      if (randomNum(5) === 4) {
        damage = 20;
        message = `Critical Hit!`
      } else {
        damage = 15;
        message = '';
      }
      enemy.healthPoints -= damage;
      return `${this.name} cast a ${this.spells[0]} spell at ${enemy.name}! ${message} ${enemy.name} lost ${damage} health points.`;
    } else {
      console.log(attack);
      return "ERROR";
    }
  }
}
// === Villain ===
// function Villain (attrs) {
//   Humanoid.call(this, attrs);
// }
// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.attack = function (enemy) {
//   let attack = randomNum(3);
//   if (attack === 0) {
//     if (randomNum(5) === 2) {
//       damage = 15;
//       message = `Critical Hit!`
//     } else {
//       damage = 10;
//       message = '';
//     }
//     enemy.healthPoints -= damage;
//     return `${this.name} struck ${enemy.name} with the Fire ${this.weapons[0]}! ${message} ${enemy.name} lost ${damage} health points.`;
//   } else if (attack === 1) {
//     if (randomNum(5) === 0) {
//       damage = 10;
//       message = `Critical Hit!`
//     } else {
//       damage = 7;
//       message = '';
//     }
//     enemy.healthPoints -= damage;
//     return `${this.name} struck ${enemy.name} with the Poison ${this.weapons[1]}! ${message} ${enemy.name} lost ${damage} health points.`;
//   } else if (attack === 2) {
//     if (randomNum(5) === 4) {
//       damage = 20;
//       message = `Critical Hit!`
//     } else {
//       damage = 15;
//       message = '';
//     }
//     enemy.healthPoints -= damage;
//     return `${this.name} put a ${this.curses[0]} curse on ${enemy.name}! ${message} ${enemy.name} lost ${damage} health points.`;
//   } else {
//     console.log(attack);
//     return "ERROR";
//   }
// }
class Villain extends Humanoid {
  constructor (attrs) {
    super(attrs);
  }

  attack (enemy) {
    let damage;
    let message;
    let attack = randomNum(3);
    if (attack === 0) {
      if (randomNum(5) === 2) {
        damage = 15;
        message = `Critical Hit!`
      } else {
        damage = 10;
        message = '';
      }
      enemy.healthPoints -= damage;
      return `${this.name} struck ${enemy.name} with the Fire ${this.weapons[0]}! ${message} ${enemy.name} lost ${damage} health points.`;
    } else if (attack === 1) {
      if (randomNum(5) === 0) {
        damage = 10;
        message = `Critical Hit!`
      } else {
        damage = 7;
        message = '';
      }
      enemy.healthPoints -= damage;
      return `${this.name} struck ${enemy.name} with the Poison ${this.weapons[1]}! ${message} ${enemy.name} lost ${damage} health points.`;
    } else if (attack === 2) {
      if (randomNum(5) === 4) {
        damage = 20;
        message = `Critical Hit!`
      } else {
        damage = 15;
        message = '';
      }
      enemy.healthPoints -= damage;
      return `${this.name} put a ${this.curses[0]} curse on ${enemy.name}! ${message} ${enemy.name} lost ${damage} health points.`;
    } else {
      console.log(attack);
      return "ERROR";
    }
  }
}

// === Random number generator ===
function randomNum (num) {
  return Math.floor(Math.random() * num);
}

// === Duel ===
function duel (hero, villain) {
  let first;
  let second;
  if (randomNum(2) === 0) {
    first = hero;
    second = villain;
    console.log()
  } else {
    first = villain;
    second = hero;
  }
  console.log(`-----${first.name} VS ${second.name}-----`);
  first.sayHealthPoints();
  second.sayHealthPoints();
  do {
    if (first.alive) {
      console.log(first.attack(second));
      second.sayHealthPoints();
    }
    if (second.alive) {
      console.log(second.attack(first));
      first.sayHealthPoints();
    }
  } while (hero.alive && villain.alive);
  if (hero.alive) {
    console.log(`${villain.name} has been destroyed! ${hero.name} has triumphed!`);
    console.log(villain.destroy());
  } else {
    console.log(`${hero.name} has been slain! ${villain.name} is the victor!`);
    console.log(hero.destroy());
  }
}

// Test you work by un-commenting these 3 objects and the list of console logs below:
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  const swifthallow = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 4,
      height: 4,
    },
    healthPoints: 50,
    name: 'Swifthallow',
    team: 'Dwarves',
    weapons: [
      'Battle Axe',
      'Short Sword',
    ],
    spells: [
      'Fire'
    ],
    language: 'Dwarvish',
  });

  const bloodscar = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 4,
      height: 4,
    },
    healthPoints: 50,
    name: 'Bloodscar',
    team: 'Goblins',
    weapons: [
      'Arrow',
      'Dagger',
    ],
    curses: [
      'Blinding',
    ],
    language: 'Goblin',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // Hero v Villain duel
  console.log('----------HERO BATTLE!----------');
  duel(swifthallow, bloodscar);
