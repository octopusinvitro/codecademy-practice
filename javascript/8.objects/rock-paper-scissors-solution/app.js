;(function() {
  let game = {
    _gestures: ['rock', 'paper', 'scissors'],

    getComputerGesture() {
      let randomIndex = Math.floor(Math.random() * this._gestures.length);
      return this._gestures[randomIndex];
    },

    isDraw(humanGesture, computerGesture) {
      return humanGesture === computerGesture;
    },

    humanWins(humanGesture, computerGesture) {
      return humanGesture === 'rock' && computerGesture === 'scissors' ||
             humanGesture === 'paper' && computerGesture === 'rock' ||
             humanGesture === 'scissors' && computerGesture === 'paper';
    },

    playAudio(audioFile) {
      let audio = new Audio(audioFile);
      audio.play();
    }
  };

  let ui = {
    initialize() {
      document.getElementById('play').addEventListener('click', () => {
        this._cleanup();
        this._play();
      });
    },

    _cleanup() {
      document.getElementById('computer-rock').classList.remove('selected');
      document.getElementById('computer-paper').classList.remove('selected');
      document.getElementById('computer-scissors').classList.remove('selected');
    },

    _play() {
      let humanGesture = this._getHumanGesture(),
          computerGesture = game.getComputerGesture();

      this._selectComputerGesture(computerGesture);

      if (game.isDraw(humanGesture, computerGesture)) {
        this._updateDisplay('images/human.png', 'images/robot.png', 'It\'s a draw');
        game.playAudio('audio/kongas.mp3');
        return;
      }

      if (game.humanWins(humanGesture, computerGesture)) {
        this._updateDisplay('images/human-win.png', 'images/robot-sad.png', 'You win!');
        game.playAudio('audio/tada.mp3');
        return;
      }

      this._updateDisplay('images/human-sad.png', 'images/robot-win.png', 'You loose!');
      game.playAudio('audio/ups.mp3');
    },

    _getHumanGesture() {
      return document.querySelector('input[name="gesture"]:checked').value;
    },

    _selectComputerGesture(computerGesture) {
      document.getElementById(`computer-${computerGesture}`).classList.add('selected');
    },

    _updateDisplay(humanImageLocation, robotImageLocation, message) {
      document.getElementById('human').src = humanImageLocation;
      document.getElementById('robot').src = robotImageLocation;
      document.getElementById('result').textContent = message;
    }
  };

  ui.initialize();
})();
