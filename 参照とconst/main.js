
let a = 2;

function fn(num) {
  if(num === undefined || num === null) {
    num = -1;
  }
  console.log(num);
}

fn(a);