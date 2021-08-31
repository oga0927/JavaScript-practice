function printTypeAndValue(val) {
  console.log(typeof val, val);
}


let a = 0;

printTypeAndValue(a);



// 文字列を数値に変換するときはparseInt
let b = parseInt('1') + a;

printTypeAndValue(b);

// 15から文字列の10を計算した場合、- の演算子は数値の計算にしか
// 使われないため、bの文字列は数値に変換される
let c = 15 - b;

printTypeAndValue(c);

// nullは参照を保持していない　空を意味する
let d = c - null;
printTypeAndValue(d)

// trueは数値の1に変換する
let e = d - true;
printTypeAndValue(e)

