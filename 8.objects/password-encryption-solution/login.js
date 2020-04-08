;(function() {
  const login = {
    passwordMatches: [],
    _passwords: [
      'greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'
    ],

    get passwords() {
      return this._passwords;
    },

    resetPasswordMatches() {
      this.passwordMatches = [];
    }

    hashUserPassword(password) {
      let salt = this._calculateSalt();

      try {
        hashpw(password, salt, this.compare, null);
      } catch(error) {
        console.log(error);
      }
    },

    compare(hashedUserPassword) {
      try {
        login.passwords.forEach(function(password) {
          checkpw(password, hashedUserPassword, login.storeResult, null);
        });
      } catch(error) {
        console.log(error);
      }
    },

    storeResult(same) {
      login.passwordMatches.push(same);
    },

    didPasswordMatch() {
      return this.passwordMatches.some((match) => { return match; });
    },

    _calculateSalt() {
      const rounds = 5;

      try {
        return gensalt(rounds);
      } catch(error) {
        console.log(error);
      }
    }
  };

  const ui = {
    _result: document.getElementById('result'),
    _password: document.getElementById('result'),

    initialize() {
      document.getElementById('login').addEventListener('click', () => {
        login.resetPasswordMatches();
        login.hashUserPassword(this._getPassword());
        setTimeout(() => this.printResult, 500);
      });
    },

    printResult() {
      login.didPasswordMatch() ?
        this._result.textContent = 'Welcome!' :
        this._result.textContent = 'I don\'t know you';
    },

    _getPassword() {
      return this._password.value;
    }
  };

  ui.initialize();
})();
