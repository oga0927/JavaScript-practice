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

// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];
  
//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

// rest演算子
function product(...numbers) {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}