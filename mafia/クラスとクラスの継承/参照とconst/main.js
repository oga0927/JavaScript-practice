// function hello(name) {
  
// }

// setTimeout(hello('Tom'),1000)

function a(b) {
  b();
}

function b() {

}

function character(name) {
  console.log('ミッキー' + name);
}

function character2(name) {
  console.log('ミニー' + name);
}

function fn(cb) {
  cb('マウス');
}

fn(character);
fn(character2);

fn(function(name) {
  console.log('hello' + name);
})

// 実引数がセットされていない

setTimeout(character, 5000) //実行してもhello undefinedになる

// どうゆうことか
// ↓これで実行されている
function fn(cb) {
  cb('マウス');
}

// character(name)の仮引数に値渡ってこないためundefinedで表示される
function character(name) {
  console.log('ミッキー' + name);
}

// 引数を持つコールバック関数を引数を持たないコールバック関数に渡すときの
// 対処方法は

// 引数を持たないときの対処法

// setTimeoutは何秒か待ってから処理を実行する関数
setTimeout(() => {
  const park = character();
  console.log(park);
}, 3000)

