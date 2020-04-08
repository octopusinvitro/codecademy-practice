let passwordMatches;

function calculateSalt() {
  const rounds = 5;

  try {
    return gensalt(rounds);
  } catch(error) {
    console.log(error);
  }
}

function displayResult(same) {
  passwordMatches.push(same);
}

function compare(hashedUserPassword) {
  const passwords = ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'];

  try {
    passwords.forEach(function(password) {
      checkpw(password, hashedUserPassword, displayResult, null);
    });
  } catch(error) {
    console.log(error);
  }
}

function hashUserPassword() {
  let password = document.getElementById('password').value,
      salt = calculateSalt();

  try {
    hashpw(password, salt, compare, null);
  } catch(error) {
    console.log(error);
  }
}

function printResult() {
  let same = passwordMatches.some(function(match) { return match; }),
      result = document.getElementById('result');

  same ?
    result.textContent = 'Welcome!' :
    result.textContent = 'I don\'t know you';
}

document.getElementById('login').addEventListener('click', function() {
  passwordMatches = [];
  hashUserPassword();
  setTimeout(printResult, 500);
});
