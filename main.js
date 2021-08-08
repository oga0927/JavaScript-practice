
// mapメソッド
var cars = [
  { type: '軽自動車', price: '安い'},
  { type: 'フェラーリ', price: '高い'}
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;



// forEachメソッド
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

var products = [
  { name: 'きゅうり', type: '野菜', quantity: 0,price: 1},
  { name: 'バナナ', type: 'フルーツ', quantity: 10,price: 15},
  { name: 'セロリ', type: '野菜', quantity: 30, price: 9},
  { name: 'オレンジ', type: 'フルーツ', quantity: 3, price: 5}
];



// filterメソッド
var filteredProducdts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'フルーツ') {
    filteredProducdts.push(products[i]);
    console.log(filteredProducdts);
  } 
}

products.filter(function(product) {
  return product.type === '野菜'　
  && product.quantity > 0 
  && product.price < 10;
});
console.log(filteredProducdts);

var post = {id: 4,title:'初めての投稿'};
var comments = [
  {postId: 4, content:'いい記事ですね'},
  {postId: 3, content:'勉強になりました'},
  {postId: 4, content:'なるほど'}
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

console.log(commentsForPost(post,comments));

var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin === true;
});
var filteredUsers;



// findメソッド(特定のデータを探す)
var users = [
  {name: '太郎'},
  {name: '次郎'},
  {name:'三郎'}
];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === '次郎') {
    user = users[i];
    break;
  }
}

user; 
console.log(user);

var user;
users.find(function(user) {
  return user.name === '次郎';
});

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




everyとsomeメソッド

var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];

// 全てで動かせるフラグ
var allComputersCanRun = true;

// どれかでは動かせるフラグ
var someComputersCanRun　= false;
  allComputersCanRun = true;
  someComputersCanRun = false;

// 全ての要素が当てはまるのか
computers.every(function(computer) {
  return computer.ram >= 16;
});

// 要素が一つでも当てはまるか
computers.some(function(computer) {
  return computer.ram >= 16;
});

var names = [
  'ミッキー',
  'ミニー',
  'ドナルド'
];

names.every(function(name) {
  return name.length >= 4;
});

var names = [
  'ミッキー',
  'ミニー',
  'ドナルド'
];

names.some(function(name) {
  return name.length >= 4;
});



// reduceメソッド
var numbers = [10, 20, 30];
var sum = 0;

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

primaryColors.reduce(function(previous,primaryColors) {
  previous.push(primaryColors.color)
  return previous;
}, []);

function balanceParens(string) {
  return !string.split('').reduce(function(previous,char) {
    if (char === '(') { return previous + 1}
    if (char === ')') { return previous - 1}
  }, 0);
};

balanceParens('()');

var name = '太郎';
var title  = 'Webエンジニア';
var hourlySalary = 4000;

const name = '太郎';
let title = 'Webエンジニア';
let hourlySalary = 4000;



// ES5の書き方
function getMesssage() {
  const year = new Date().getFullYear();
    return "今年は" + year + "年" + "です。"
}
getMesssage();


// ES6のテンプレート文字列
function getMesssage() {

  return `今年は${new Date().getFullYear()}年です。`// バックテックで囲う
}
getMesssage();

const team = {
  members: ['太郎','はな子'],
  teamName: 'スーパーチーム',
  teamSummary: function() {
    return this.members.map((member) => {
      // lexical this = アロー関数を書く場所でthisが確定する
      return `${member}は${this.teamName}の所属です`;
    });
  }
};

team.teamSummary();

// ES5
const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// リファクタリング
const fibonacci = (n) => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// ES5
const profile = {
  name: '太郎'
};
// ES６リファクタリング
const profile = {
  name: '太郎',
  getName: function() {
    return this.name;
  }
};






// オブジェクトリテラル
// ES5
function createBookShop(inventry) {
  return {
    inventry: inventry,
    inventryValue: function() {
      return this.inventry.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventry.find(book => book.title === title).price;
    }
  };
}

const inventry = [
  {title: 'ハリーポッター', price: 1000 },
  {title: 'JavaScript', price: 1500}
];

const bookShop = createBookShop(inventry);
// bookShop.inventryValue();
bookShop.priceForTitle('ハリーポッター');



// ES６リファクタリング
function createBookShop(inventry) {
  return {
    // オブジェクトのキーとvalueが同じなら1回の記述でOK
    inventry,
     // :とfunctionは不要
    inventryValue() {
      return this.inventry.reduce((total, book) => total + book.price, 0);
    },
    // :とfunctionは不要
    priceForTitle(title) {
      return this.inventry.find(book => book.title === title).price;
    }
  };
}

const inventry = [
  {title: 'ハリーポッター', price: 1000 },
  {title: 'JavaScript', price: 1500}
];

const bookShop = createBookShop(inventry);

// bookShop.inventryValue();
bookShop.priceForTitle('ハリーポッター');



// ES5
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };



// ES６リファクタリング
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { 
  red, 
  blue 
};



// ES5
const fields = ['firstName', 'lastName', 
'phoneNumber'];
      
const props = { fields: fields };

// ES６リファクタリング
const fields = [
  'firstName', 
  'lastName', 
  'phoneNumber'
  ];
    
const props = { fields };


// ES5
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}

// ES６リファクタリング
const canvasDimensions = (width, initialHeight) => {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}


// ES5
const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'ブーーン!';
  },
  getColor: function() {
    return this.color;
  }
};


// ES６リファクタリング
const color = 'red';

const Car = {
  color,
  drive() {
    return 'ブーーン!';
  },
  getColor() {
    return this.color;
  }
};




// 関数デフォルト引数を指定する


// ES5
function makeAjaxRequest(url, method) {
  if (!method) {
    method ='GET'
  }
  // ajaxリクエストをする必要があると想定
  return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST')


// ES６リファクタリング
function makeAjaxRequest(url, method = 'GET') {
  return method;
}

makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com', 'POST');

function User(id = generateId()) {
  this.id = id;
}

function generateId() {
  return Math.randam() * 99999;
}

function createdAdminUser(user = new User()) {
  user.admin = true;

  return user;
}

createdAdminUser();


JavaScriptのコード実行方法について
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  },3000)
});

promise
  .then(() => console.log('処理が完了しました'))
  .then(() => console.log('こんにちは'))
  .catch(() => console.log('問題発生'))
// promise.catch();


// fetchを使ってajaxリクエスト
url = "https://jsonplaceholder.typicode.com1234/posts/";

fetch(url)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log("問題発生!!" ,error));

// Restとspread演算子

// ES5
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  },0)
}

addNumbers([1,2,3,4,5]);

// ES6
// Rest演算子
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  },0);
}

addNumbers(1,2,3,4,5,6);

var names = [
  'けん',
  'はなこ',
  'そういちろう',
  ];

names.every((name) => {
  return name.length >= 3;
});

names.some((name) => {
  return name.length >= 3
})

function Field(value) {
	this.value = value;
}

Field.prototype.validate = function() {
	return this.value.length > 0;
}

var username = new Field('my_username');
var password =  new Field('my_password');
var birthday = new Field('2020/10/10');


var fields = [
  username,
  password,
  birthday,
  ]


fields.every((field) => {
  return field.validate();
})

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some((request) => {
    return request.status === 'pending';
});

function addNumbers(numbers) {
return numbers.reduce((sum, number) => {
  return sum + number;
  },0)
}

addNumbers([1,2,3,4,5]);
// rest演算子
function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
  return sum + number;
  },0)
}

addNumbers(1,2,3,4,5,6,7);

const fruits1 = ['みかん', 'りんご', 'スイカ'];
const fruits2 = ['いちご', 'メロン', 'キウイ'];

// concatメソッドは配列を結合させる
fruits1.concat(fruits2);




