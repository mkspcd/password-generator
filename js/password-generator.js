const options = {
  numbers: true,
  uppercases: true,
  lowercases: true,
  symbols: true,
  similars: false
}

const numbers = '1234567890'
const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCases = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!?#$%&*+-='

// Similar characters are : 1lI! 0OQ 8B
const numbersNoSimilar = '2345679'
const upperCasesNoSimilar = 'ACDEFGHJKLMNPRSTUVWXYZ'
const lowerCasesNoSimilar = 'abcdefghijkmnopqrstuvwxyz'
const symbolsNoSimilar = '?#$%&*+-='

const NUMBER_OF_PASSWORDS_TO_GENERATE = 3
const PASSWORD_LENGTH = 12

let charPool = numbers + upperCases + lowerCases + symbols

document.getElementById('numbers').addEventListener('change', function () {
  options.numbers = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('uppercases').addEventListener('change', function () {
  options.uppercases = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('lowercases').addEventListener('change', function () {
  options.lowercases = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('symbols').addEventListener('change', function () {
  options.symbols = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('similars').addEventListener('change', function () {
  options.similars = this.checked
  updateCharPool()
  updateSubmitButton()
})

document.getElementById('submit-btn').addEventListener('click', generatesRandomPasswords)

function generatesRandomPasswords() {
  const randomPasswords = []
  for (let i = 0; i < NUMBER_OF_PASSWORDS_TO_GENERATE; i++) {
    randomPasswords
      .push(Array(PASSWORD_LENGTH)
        .fill(charPool)
        .map(x => x[Math.floor(Math.random() * x.length)])
        .join('')
      )
  }
  showResults(randomPasswords)
}

function updateCharPool() {
  charPool = ''
  if (options.similars) { // if true, we don't include similar characters
    if (options.numbers) { charPool += numbersNoSimilar }
    if (options.uppercases) { charPool += upperCasesNoSimilar }
    if (options.lowercases) { charPool += lowerCasesNoSimilar }
    if (options.symbols) { charPool += symbolsNoSimilar }
  } else {
    if (options.numbers) { charPool += numbers }
    if (options.uppercases) { charPool += upperCases }
    if (options.lowercases) { charPool += lowerCases }
    if (options.symbols) { charPool += symbols }
  }
}

// Desactivate the generate button if the charPool is empty
function updateSubmitButton() {
  if (
    !options.numbers
    && !options.uppercases
    && !options.lowercases
    && !options.symbols
  ) {
    document.getElementById('submit-btn').classList.add('inactive')
  } else {
    document.getElementById('submit-btn').classList.remove('inactive')
  }
}

function showResults(randomPasswords) {
  document.getElementById('password-1').value = randomPasswords[0]
  document.getElementById('password-2').value = randomPasswords[1]
  document.getElementById('password-3').value = randomPasswords[2]
}

function copyPassword(password) {
  document.getElementById(password).select()
  document.execCommand('Copy')
}
