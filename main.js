
// mapメソッド


// var cars = [
//   { type: '軽自動車', price: '安い'},
//   { type: 'フェラーリ', price: '高い'}
// ];

// var prices = cars.map(function(car) {
//   return car.price;
// });

// prices;





// forEachメソッド


// function handlePosts() {
//   var posts = [
//     { id: 23, title: 'JSニュース' },
//     { id: 52, title: 'リファクター・シティ' },
//     { id: 105, title: 'Rubyの良いところ' }
//   ];
//   posts.forEach(function(post) {
//     savePost(post);
//   });
// }

// var products = [
//   { name: 'きゅうり', type: '野菜', quantity: 0,price: 1},
//   { name: 'バナナ', type: 'フルーツ', quantity: 10,price: 15},
//   { name: 'セロリ', type: '野菜', quantity: 30, price: 9},
//   { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5}
// ];





// filterメソッド


// var filteredProducdts = [];

// for (var i = 0; i < products.length; i++) {
//   if (products[i].type === 'フルーツ') {
//     filteredProducdts.push(products[i]);
//     console.log(filteredProducdts);
//   } 
// }

// products.filter(function(product) {
//   return product.type === '野菜'　
//   && product.quantity > 0 
//   && product.price < 10;
// });
// console.log(filteredProducdts);

// var post = {id: 4,title:'初めての投稿'};
// var comments = [
//   {postId: 4, content:'いい記事ですね'},
//   {postId: 3, content:'勉強になりました'},
//   {postId: 4, content:'なるほど'}
// ];

// function commentsForPost(post, comments) {
//   return comments.filter(function(comment) {
//     return comment.postId === post.id;
//   });
// }

// commentsForPost(post, comments);

// console.log(commentsForPost(post,comments));

// var users = [
//   { id: 1, admin: true },  
//   { id: 2, admin: false },
//   { id: 3, admin: false },
//   { id: 4, admin: false },
//   { id: 5, admin: true },
//  ];
 
//  var filteredUsers = users.filter(function(user) {
//      return user.admin === true;
//  });
//  var filteredUsers;





// findメソッド

// var users = [
//   {name: '太郎'},
//   {name: '次郎'},
//   {name:'三郎'}
// ];

// var user;

// for (var i = 0; i < users.length; i++) {
//   if (users[i].name === '次郎') {
//     user = users[i];
//     break;
//   }
// }

// user; 
// console.log(user);

// var user;
// users.find(function(user) {
//   return user.name === '次郎';
// });

// var posts = [
//   {id: 1, title:'古い投稿'},
//   {id: 2, title:'新しい投稿'}
// ];

// var comment = { postId: 2, content: 'イイネ！'}

// function postForComment(posts, comment) {
//   return posts.find(function(post) {
//     return post.id === comment.postId;
//   });
// }

// postForComment(posts,comment);
// console.log();

// var users = [
//   { id: 1, admin: false },
//   { id: 2, admin: false },
//   { id: 3, admin: true }
// ];

// var admin = users.find(function(user) {
//   return user.admin === true;
// })




// everyとsomeメソッド

// var computers = [
//   {name: 'Apple', ram: 24},
//   {name: 'Compaq', ram: 4},
//   {name: 'Acer', ram: 32}
// ];

// // 全てで動かせるフラグ
// // var allComputersCanRun = true;

// // どれかでは動かせるフラグ
// // var someComputersCanRun　= false;
//   allComputersCanRun = true;
//   someComputersCanRun = false;

// // 全ての要素が当てはまるのか
// computers.every(function(computer) {
//   return computer.ram >= 16;
// });

// // 要素が一つでも当てはまるか
// computers.some(function(computer) {
//   return computer.ram >= 16;
// });

// var names = [
//   'ミッキー',
//   'ミニー',
//   'ドナルド'
// ];

// names.every(function(name) {
//   return name.length >= 4;
// });

// var names = [
//   'ミッキー',
//   'ミニー',
//   'ドナルド'
// ];

// names.some(function(name) {
//   return name.length >= 4;
// });





// reduceメソッド
 
// var numbers = [10, 20, 30];
// var sum = 0;

// numbers.reduce(function(sum, number) {
//   return sum + number;
// }, 0);

// var primaryColors = [
//   {color: 'red'},
//   {color: 'yellow'},
//   {color: 'blue'}
// ];

// primaryColors.reduce(function(previous,primaryColors) {
//   previous.push(primaryColors.color)
//   return previous;
// }, []);

function balanceParens(string) {
  return !string.split('').reduce(function(previous,char) {
     if (char === '(') { return previous + 1}
     if (char === ')') { return previous - 1}
  }, 0);
};

balanceParens('()');
