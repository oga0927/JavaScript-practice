function fn() {
  let a;
  if(true) {
    a = 'fn called';
  }
  return a;
}

const result = fn();
console.log(result);

var val = 'val1';

function fn2() {
  console.log(val);
  
  if(true) {
    let val = 'val2';
    console.log(val);
  }
  console.log(val);
}
fn2();

function incrementFactory() {

let num = 0;

  function increment() {
    num = num + 1
    console.log(num);
  }
  return increment;
}

const increment = incrementFactory();

increment();
increment();
increment();
