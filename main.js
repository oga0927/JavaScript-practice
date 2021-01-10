// var cars = [
//   { type: '軽自動車', price: '安い'},
//   { type: 'フェラーリ', price: '高い'}
// ];

// var prices = cars.map(function(car) {
//   return car.price;
// });

// prices;
// console.log(prices);

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

// var users = [
//   {name: '太郎'},
//   {name: '次郎'},
//   {mname:'三郎'}
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

var posts = [
  {id: 1, title:'古い投稿'},
  {id: 2, title:'新しい投稿'}
];

var comment = { postId: 2, content: 'イイネ！'}

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts,comment);
console.log();

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
  return user.admin === true;
})