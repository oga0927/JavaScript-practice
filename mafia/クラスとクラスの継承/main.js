class Character{
  constructor(name, age) {
  this.name = name,
  this.age = age 
  }

  hello() {
  console.log('hello' + this.name);
  }
}

const mickey = new Character('Mickey', 20);

console.log(mickey);

// constructorと同じ役割
// function Person(name, age) {
//   this.name = name,
//   this.age = age 
// }

// Person.prototype.hello = function() {
//   console.log('hello' + this.name);
// }