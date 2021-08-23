// 関数コンストラクターで表した場合
// 関数コンストラクターは大文字から始まるFunctionのこと
const fn1 = new Function('a', 'b', 'return a + b');

const result = fn1(1, 2);
console.log(result);

function fn2(a, b) {
  return a + b;
}

// fn2はFunctionコンストラクターから生成されたインスタンスでありオブジェクトである
console.log(fn2 instanceof Function);
