function fn() {
  if(true) {
    let a = 'fn called';
    return a;
  }
}

const result = fn();
console.log(result);