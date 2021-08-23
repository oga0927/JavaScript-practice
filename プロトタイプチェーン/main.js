function Person(name, age) {
  this.name = name,
  this.age = age 
  // this.hello = function() {
  // console.log('OwnProperty: hello' + this.name);
  // }
}
// // Personにプロパティの追加
// Person.prototype.hello = function() {
//   // helloメソッドが追加される
//   console.log('Person: hello' + this.name);
//   // メソッドとして追加したいプロパティはprototypeオブジェクトに格納すると
//   // インスタンスごとにメソッドを実行することができる
// }

Object.prototype.hello = function() {
  console.log('Object: hello' + this.name);
}

const bob = new Person('Bob',18)

bob.hello();

const result = bob.hasOwnProperty('name')
console.log(result);