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

var products = [
  { name: 'きゅうり', type: '野菜', quantity: 0,price: 1},
  { name: 'バナナ', type: 'フルーツ', quantity: 10,price: 15},
  { name: 'セロリ', type: '野菜', quantity: 30, price: 9},
  { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5}
];

var filteredProducdts = [];

// for (var i = 0; i < products.length; i++) {
//   if (products[i].type === 'フルーツ') {
//     filteredProducdts.push(products[i]);
//     console.log(filteredProducdts);
//   } 
// }

products.filter(function(product) {
  return product.type === '野菜'　
  && product.quantity > 0 
  && product.price < 10;
});
console.log(filteredProducdts);