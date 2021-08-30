const character = {
  name: 'micky',
  kinds: 'mouse',
}
console.log(character.name)

const members_2 = {
  'honda': {
    'height': '175',
    'hobby': 'サッカー'
  },
  'kagawa': {
    'height': 170,
    'hobby': 'サッカー'
  }
};

console.log(members_2.honda.height);

const members_3 = {
  '1kumi': {
    'kagawa': {
    'height': 170,
    'hobby': 'サッカー'
  },
  'nagatomo': {
    'height': 165,
    'hobby': 'サッカー'
  }
  },
  '2kumi': {}
}

console.log(members_3);