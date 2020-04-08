---
layout: default
title: Rock, Paper, Scissors - Part 3
---

The next part is about adding audio effects. For this [we are going to use the audio API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio).  This API creates and returns a new `HTMLAudioElement` which can be either attached to a document for the user to interact with and/or listen to, or can be used offscreen to manage and play audio.

We are going to use it in it's **offscreen** version.

### Step by step instructions

[Download the audio from here](rock-paper-scissors-audio.zip).

#### HTML

No changes.

#### CSS

No changes.

#### JS

We want to change the audio we play depending on the result of playing the game. For this we are going to use the audio API to create an audio element like this:

```js
var audio = new Audio(audioFile);
```

and then we can play it like this:

```js
audio.play();
```

* Three audio files are provided. Make it so that when there is a draw, we play kongas, when there is a human win, we play tada, and when the computer wins, we play ups.

When you are finished, look at your code. The if / else conditions are starting to get a bit messy. How can we clean the code?

* Can you separate different responsibilities, for example, updating the display or playing audio? This concept of separating responsibilities applies to all programming languages.


* Can you see what parts of the code get always repeated, and which parts change? Identify what gets repeated and extract it to a functions. Then pass the part of the code that changes as arguments of those functions.
