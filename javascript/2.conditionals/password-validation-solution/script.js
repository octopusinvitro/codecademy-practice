document.getElementById('login').addEventListener('click', function() {
  var password = document.getElementById('password').value,
      result = document.getElementById('result');

  password === 'abc$123' ?
    result.textContent = 'Welcome!' :
    result.textContent = 'I don\'t know you';
});