document.getElementById('calculate').addEventListener('click', event => {
  const slices = 8;
  let people = document.getElementById('people').value,
      pizzas = document.getElementById('pizzas').value,

      slicesPerPerson = Math.floor(pizzas * slices / people),
      leftovers = Math.floor(pizzas * slices - slicesPerPerson * people);

  document.getElementById('division').innerHTML = 
    `${people} people with ${pizzas} pizzas.<br>Each person gets ${slicesPerPerson} pieces of pizza.<br>There are ${leftovers} leftover pieces.`;
});