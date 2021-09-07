// function fn() {
//   if(true) {
//     let a = 'fn called';
//     return a;
//   }
// }

// const result = fn();
// console.log(result);

// オブジェクトについて
// const character = {
//   name: 'micky',
//   kinds: 'mouse',
// }

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find((user) => {
    return user.admin === true;
})
admin;