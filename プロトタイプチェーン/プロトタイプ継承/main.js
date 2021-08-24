// function Person(name, age) {
//   this.name = name,
//   this.age = age 
// }

// Person.prototype.hello = function() {
//   console.log('hello' + this.name);
// }


// function Character(name, age) {

// }

// Character.prototype　= Object.create(Person.prototype);


function Person(name, age) {
  this.name = name,
  this.age = age 
}

Person.prototype.hello = function() {
  console.log('hello' + this.name);
}


function Character(name, age, gender) {
  Person.call(this, name, age)
  this.gender = gender;
}

Character.prototype　= Object.create(Person.prototype);

Character.prototype.hello = function() {
  console.log('Hi' + this.name);
}

// Character.prototype.bye = function() {
//   console.log('good!' + this.name);
// }

const mickey = new Character('ミッキー', 20, 'Male');
console.log(mickey);

mickey.hello(); //helloミッキー
// mickey.bye();