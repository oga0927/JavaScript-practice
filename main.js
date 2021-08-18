var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach((image) => {
  areas.push(image.height * images.width)
});

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map((image) => {
  return image.height;
});


// 距離と速度を求める
// var trips = [
//   { distance: 34, time: 10 },
//   { distance: 90, time: 50 },
//   { distance: 59, time: 25 }
// ];

// var speeds;

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map((trip) => {
    return trip.distance / trip.time;
});


// 50より大きい数字を絞り込み、filteredNumbersへ格納
// var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// var filteredNumbers;


var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => {
    return number > 50;
});


// ユーザー配列の中からadmin権限を持っているユーザーを探す
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;



var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find((user) => {
    return user.admin === true;
});


var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find((account) => {
    return account.balance === 12;
});

window.name = 'ミニー'

const character = {
	name: 'ミッキー',
  hello: function() {
  console.log('Hello' + this.name);
  }
}

character.hello();

const helloTom = character.hello.bind(character);

function fn(ref) {
	ref();
}

fn(helloTom);

function a() {
  console.log('hello' + this.name);
}

const b = a.bind({ name: 'ドナルド'});

b();

// 問題
// const person = {
// 	hello() {
//   return 'hello Tom';
//   }
// }

// setTimeout(person, 5000);

const person = {
  hello() {
    return 'hello Tom'
  }
}

setTimeout(() => {
  const hello = person.hello();
  console.log(hello);
},1000)
