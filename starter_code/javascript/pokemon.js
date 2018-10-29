// Attacks

var attacksName = ["scratch","kick","smash","head charge"];

// Pokemon Constructor

function Pokemon(name,health,avatar,sound){
  this.name = name;
  this.health = health;
  this.avatar = avatar;
  this.sound = sound;
  this.attackCry = function(){
    // Specify the attack ??
    return name + " has chossen to attack"
  }
};

Pokemon.prototype.attack = function(pokemon){
  var damage = Math.floor(Math.random() * (pokemon.health));
  pokemon.health -= damage;
  var audio = new Audio(this.sound);
  audio.play(); 
  if (pokemonhis.health > 0){
    return pokemon.name + " has received " + damage + " points of damage";
}
    else pokemon.name + "has lost the battle!";
};

// Pokemon.prototype.attack = function // A définir

// Pokemon Instances

var pikachu = new Pokemon ("Pikachu",100,"../elements/sprites/pikachu.png","../elements/sounds/Pikachu-attack-sound.mp3");
var charmander = new Pokemon("Charmander",100,"../elements/sprites/charmander.png","../elements/sounds/Charmander-attack-sound.mp3");
var bulbasaur = new Pokemon ("Bulbasaur",100,"../elements/sprites/squirtle.png","../elements/sounds/Bulbasaur-attack-sound.mp3");
var squirtle = new Pokemon("Squirtle",100,"../elements/sprites/bulbasaur.png","../elements/sounds/Squirtle-attack-sound.mp3");
