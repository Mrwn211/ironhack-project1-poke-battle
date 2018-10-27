//TODO: créer les pokemons individuels en variable 

// Attacks

var attacksName = ["scratch","kick","smash","head charge"];

var sounds = [];

//function Attacks(attacksName,sound,damage) {
//  this.name = attacksName[i];
//  this.sound = sound[i];
//  this.damage = damage;
//};

// Pokemon Constructor

function Pokemon(name,health,sprite,attacksName,attack){
  this.name = name;
  this.health = health;
  this.sprite = sprite;
  this.attacks = attacksName;
  //this.attack = function (){
  //  return this.health
  //};
  //this.receiveDamage = function(damage){
  //  this.health -= damage;
  //}
  this.attackCry = function(){
    // Specify the attack ??
    return name + " has chossen to attack"
  }
};


Pokemon.prototype.receiveDamage = function(health,damage){
  var damage = Math.floor(Math.random() * (health)); 
  if (this.health > 0){
    return name + " has received " + damage + " points of damage";
}
    else name + "has lost the battle!";
};

// Pokemon.prototype.attack = function // A définir


// Pokemon Instances
// chaque pokemon est une variable ex var pikachu = new pokemon (avec le name et le health etc.)
Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

function Pikachu(name,health,sprite,attacksName){
  Pokemon.call(this,health,sprite,attacksName);
  this.name = name;
  this.health = 100;
  this.sprite = "../elements/sprites/pikachu.png";
  this.attacksName = attacksName;
};

Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmander(name,health,sprite,attacksName){
  Pokemon.call(this,health,sprite,attacksName);
  this.name = name;
  this.health = 100;
  this.sprite = "../elements/sprites/charmander.png";
  this.attacksName = attacksName;
};

Squirtle.prototype = Object.create(Pokemon.prototype);
Squirtle.prototype.constructor = Squirtle;

function Squirtle(name,health,sprite,attacksName){
  Pokemon.call(this,health,sprite,attacksName);
  this.name = name;
  this.health = 100;
  this.sprite = "../elements/sprites/squirtle.png";
  this.attacksName = attacksName;
};

Bulbasaur.prototype = Object.create(Pokemon.prototype);
Bulbasaur.prototype.constructor = Bulbasaur;

function Bulbasaur(name,health,sprite,attacksName){
  Pokemon.call(this,health,sprite,attacksName);
  this.name = name;
  this.health = 100;
  this.sprite = "../elements/sprites/bulbasaur.png";
  this.attacksName = attacksName;
};