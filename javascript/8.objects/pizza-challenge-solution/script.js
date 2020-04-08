;(function() {
  const pizzasDivider = {
    _slices: 8,

    divide(people, pizzas) {
      let totalSlices = pizzas * this._slices,
          slicesPerPerson = Math.floor(totalSlices / people),
          leftovers = Math.floor(totalSlices - slicesPerPerson * people);

      return {
        people: people,
        pizzas: pizzas,
        slicesPerPerson: slicesPerPerson,
        leftovers: leftovers
      };
    }
  };

  const userInterface = {
    _people: document.getElementById('people'),
    _pizzas: document.getElementById('pizzas'),

    _calculateButton: document.getElementById('calculate'),
    _divisionResult: document.getElementById('division'),

    initialize() {
      this._calculateButton.addEventListener('click', event => {
        let result = pizzasDivider.divide(this.people, this.pizzas);
        this._divisionResult.textContent = this._createResult(result);
      });
    },

    get people() {
      return this._people.value;
    },

    get pizzas() {
      return this._pizzas.value;
    },

    _createResult(result) {
      return `${result.people} people with ${result.pizzas} pizzas. Each person gets ${result.slicesPerPerson} pieces of pizza. There are ${result.leftovers} leftover pieces.`;
    }
  }

  userInterface.initialize();
})();
