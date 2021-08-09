function handlePosts() {
    var posts = [
      { id: 23, title: 'JSニュース' },
      { id: 52, title: 'リファクター・シティ' },
      { id: 105, title: 'Rubyの良いところ' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
};

// リファクタリング
function handlePosts() {
    var posts = [
      { id: 23, title: 'JSニュース' },
      { id: 52, title: 'リファクター・シティ' },
      { id: 105, title: 'Rubyの良いところ' }
    ];
    
    posts.forEach((post) => {
      savePost(post);
    });
};

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
]
var areas = [];


// リファクタリング
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach((image) => {
    areas.push(image.height * image.width);
});