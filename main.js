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

fileSummary(savedFile, {username: 'OGA'})



