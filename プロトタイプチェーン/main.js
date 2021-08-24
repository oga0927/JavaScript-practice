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

// hasOwnPropertyは自身のプロパティに引数で与えられた名前が存在するかを確認する
// オブジェクトのプロパティに存在するかどうか確認するときにhasOwnPropertyを使用する
// この場合はageとname
const result = bob.hasOwnProperty('name')
console.log(result);

// inはプロトタイプチェーンも遡って調べていく
// 
console.log('name' in bob); //nameはtrue
console.log('hello' in bob); //helloはtrue
console.log('bye' in bob); //byeはfalse byeの関数はプロトタイプチェーンにも使用されていない

