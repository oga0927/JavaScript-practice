let a = function b() {
  console.log('called');
}

a();

(function() {
  console.log('called');
})();