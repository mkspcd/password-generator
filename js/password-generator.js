const options = {
  numbers: true,
  uppercases: true,
  lowercases: true,
  symbols: true,
  similars: false
}

const numbers = '1234567890';
const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!?#$%&*+-=';

// Similar characters are : 1lI! 0OQ 8B
const numbersNoSimilar = '2345679';
const upperCasesNoSimilar = 'ACDEFGHJKLMNPRSTUVWXYZ';
const lowerCasesNoSimilar = 'abcdefghijkmnopqrstuvwxyz';
const symbolsNoSimilar = '?#$%&*+-=';

const passwordLength = 12;
let charPool = numbers + upperCases + lowerCases + symbols;

document.getElementById('numbers').addEventListener('change', function () {
  options.numbers = this.checked;
  updateCharPool();
  updateSubmitButton();
});

document.getElementById('uppercases').addEventListener('change', function () {
  options.uppercases = this.checked;
  updateCharPool();
  updateSubmitButton();
});

document.getElementById('lowercases').addEventListener('change', function () {
  options.lowercases = this.checked;
  updateCharPool();
  updateSubmitButton();
});

document.getElementById('symbols').addEventListener('change', function () {
  options.symbols = this.checked;
  updateCharPool();
  updateSubmitButton();
});

document.getElementById('similars').addEventListener('change', function () {
  options.similars = this.checked;
  updateCharPool();
  updateSubmitButton();
});

document.getElementById('form').addEventListener('submit', generate());

function updateCharPool() {
  charPool = '';
  if (options.similars) { // if true, we don't include similar characters
    if (options.numbers) { charPool += numbersNoSimilar };
    if (options.uppercases) { charPool += upperCasesNoSimilar };
    if (options.lowercases) { charPool += lowerCasesNoSimilar };
    if (options.symbols) { charPool += symbolsNoSimilar };
  } else {
    if (options.numbers) { charPool += numbers };
    if (options.uppercases) { charPool += upperCases };
    if (options.lowercases) { charPool += lowerCases };
    if (options.symbols) { charPool += symbols };
  }
}

function updateSubmitButton() {
  if (options.numbers === false && options.uppercases === false && options.lowercases === false && options.symbols === false) {
    document.getElementById('submit-btn').classList.add('inactive');
  } else {
    document.getElementById('submit-btn').classList.remove('inactive');
  }
}
