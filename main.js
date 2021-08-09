// Destructuring
const expense = {
  type: '交際費',
  amount : '4500JPY'
};

const { type, amount } = expense

type;
amount;


var savedFile = {
	extension: 'jpg',
  name: 'profile',
  size: 14040
}

function fileSummary({extension, name,  size}, {username}) {
	return `${username}:${name}. ${extension}の容量は${size}です`
}

fileSummary(savedFile, {username: 'hoge'});

const classes = [
  [ '化学', '1時限目', '鈴木先生' ],
  [ '物理', '2時限目', '佐藤先生'],
  [ '数学', '3時限目', '木村先生' ]
];



const classesAsObject = classes.map(([subject, time, teather]) =>{
    return [subject, time, teather];
});

classesAsObject;






