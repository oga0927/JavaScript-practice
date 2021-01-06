// var cars = [
//   { type: '軽自動車', price: '安い'},
//   { type: 'フェラーリ', price: '高い'}
// ];

// var prices = cars.map(function(car) {
//   return car.price;
// });

// prices;
// console.log(prices);

function handlePosts() {
  var posts = [
    { id: 23, title: 'JSニュース' },
    { id: 52, title: 'リファクター・シティ' },
    { id: 105, title: 'Rubyの良いところ' }
  ];
  posts.forEach(function(post) {
    savePost(post);
  });
}