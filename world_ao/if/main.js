const character_1 = 'ミッキー';
const character_2 = 'ミニー';


if(character_1 === 'ミッキー' | character_2 === 'ミニー') {
  console.log('ディズニー');
}

if(character_1 === 'プーさん' || character_2 === 'ミニー') {
  console.log('ディズニーキャラクター');
}

// 三項演算子
// 条件 ? 真 : 偽

const score = 80;

const comment = score >= 80 ? 'good!!' : 'bad'
console.log(comment);
