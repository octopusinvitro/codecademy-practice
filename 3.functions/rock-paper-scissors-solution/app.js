function getHumanGesture() {
  return document.querySelector('input[name="gesture"]:checked').value;
}

function getComputerGesture() {
  var gestures = ['rock', 'paper', 'scissors'],
      randomIndex = Math.floor(Math.random() * 3);

  return gestures[randomIndex];
}

function isDraw(humanGesture, computerGesture) {
  return humanGesture === computerGesture;
}

function humanWins(humanGesture, computerGesture) {
  return humanGesture === 'rock' && computerGesture === 'scissors' ||
         humanGesture === 'paper' && computerGesture === 'rock' ||
         humanGesture === 'scissors' && computerGesture === 'paper';
}

function updateDisplay(humanImageLocation, robotImageLocation, message) {
  document.getElementById('human').src = humanImageLocation;
  document.getElementById('robot').src = robotImageLocation;
  document.getElementById('result').textContent = message;
}

function playAudio(audioFile) {
  var audio = new Audio(audioFile);
  audio.play();
}

function play() {
  var humanGesture = getHumanGesture(),
      computerGesture = getComputerGesture();

  document.getElementById(`computer-${computerGesture}`).classList.add('selected');

  if (isDraw(humanGesture, computerGesture)) {
    updateDisplay('images/human.png', 'images/robot.png', 'It\'s a draw');
    playAudio('audio/kongas.mp3');
    return;
  }

  if (humanWins(humanGesture, computerGesture)) {
    updateDisplay('images/human-win.png', 'images/robot-sad.png', 'You win!');
    playAudio('audio/tada.mp3');
    return;
  }

  updateDisplay('images/human-sad.png', 'images/robot-win.png', 'You loose!');
  playAudio('audio/ups.mp3');
}

function cleanup() {
  document.getElementById('computer-rock').classList.remove('selected');
  document.getElementById('computer-paper').classList.remove('selected');
  document.getElementById('computer-scissors').classList.remove('selected');
}

document.getElementById('play').addEventListener('click', function () {
  cleanup();
  play();
});
