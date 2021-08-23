function Person(name, age) {
  this.name = name,
  this.age = age 
}

// Personにプロパティの追加
Person.prototype.hello = function() {
  // helloメソッドが追加される
  console.log('hello' + this.name);
  // メソッドとして追加したいプロパティはprototypeオブジェクトに格納すると
  // インスタンスごとにメソッドを実行することができる
}
const bob = new Person('Bob',18)

bob;

bob.hello();

function F(a, b) {
  this.a = a;
  this.b = b;
  
}

F.prototype.c = function(){}

function newOpe(C, ...args) {
  const _this = Object.prototype(C.prototype);
  console.log(args);
}

const instance = newOpe(F, 1, 2);
console.log(instance);