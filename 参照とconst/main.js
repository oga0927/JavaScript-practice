// const a = {
//   prop: 0
// }

// let { prop } = a;
// prop = 1;

// console.log(a, prop);

// function fn({ prop }) {
//   prop = 1;
//   console.log(a, prop);
// }

// fn(a);

// const c = {
//   prop1: {
//     prop2: 0
//   }
// }

// let { prop1 } = c;

// prop1.prop2 = 1;

// console.log(c, prop1);

let obj = {
  prop1: 10
}

function minus(obj, val) {
  
  obj.prop1 = obj.prop1 - val; 
}

minus(obj, 1);
console.log(obj.prop1);



function double(obj) {
  // let { prop1 } = obj;
  // console.log(obj);
  obj.prop1 = obj.prop1 * 2 
}

double(obj);
console.log(obj.prop1);


obj.prop2 = {
  prop3: 1
}

function fn({ prop2 }) {
  let prop = prop2;
  prop.prop3 = 2;
  prop = { prop3: 3 };
  return { prop2: prop };
}

obj = fn(obj);
console.log(obj.prop2.prop3);