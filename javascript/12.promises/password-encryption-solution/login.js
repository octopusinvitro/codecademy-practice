;(function() {
  const login = {
    _passwordMatches: [],
    _passwords: [
      'greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'
    ],

    resetPasswordMatches() {
      this._passwordMatches = [];
    },

    storeResult(same) {
      login._passwordMatches.push(same);
    },

    calculateSalt() {
      const rounds = 5;

      try {
        return gensalt(rounds);
      } catch(error) {
        console.log(error);
      }
    },

    compare(hashedUserPassword) {
      try {
        login._passwords.forEach(function(password) {
          checkpw(password, hashedUserPassword, login.storeResult, null);
        });
      } catch(error) {
        console.log(error);
      }
    },

    async hashUserPassword(password) {
      let salt = this.calculateSalt();

      try {
        hashpw(password, salt, this.compare, null);
      } catch(error) {
        console.log(error);
      }
    },

    didPasswordMatch() {
      console.log(login._passwordMatches)
      console.log(login._passwordMatches.includes(true))
      return this._passwordMatches.includes(true);
    }
  };

  const ui = {
    initialize() {
      document.getElementById('login').addEventListener('click', async () => {
        login.resetPasswordMatches();
        let finished = await login.hashUserPassword(this.getPassword());
        this.printResult();
      });
    },

    getPassword() {
      return document.getElementById('password').value;
    },

    getResult() {
      return document.getElementById('result');
    },

    printResult() {
      let result = this.getResult();

      login.didPasswordMatch() ?
        result.textContent = 'Welcome!' :
        result.textContent = 'I don\'t know you';
    }
  };

  ui.initialize();
})();
