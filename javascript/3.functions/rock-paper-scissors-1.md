---
layout: default
title: Rock, Paper, Scissors - Part 1
---

**Challenge:** Rock paper scissors (part 1)

Create a simple program to play rock paper scissors. The user should be able to select one of the three options, rock, paper or scissors, and then wait for the computer to play its turn. Once the computer has made its choice, the result will be printed to the screen.

These are the rules:

- Rock wins over scissors.
- Paper wins over rock.
- Scissors win over paper.
- If both human and computer get the same result, it's a draw.

If the human wins, print: You win!

If the human loses, print: You lose!

If both coincide, print: It's a draw!

**To practice:** `if`/`else` conditionals, functions, scope, arrays, adding and removing classes through JavaScript.

**Example:**

```plaintext
Choose a gesture!

- rock
- paper
- scissors
(user selects paper)

Computer gesture:

- rock

You win!
```

<figure>
  <video controls>
    <source src="rock-paper-scissors-1.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>
    Video showing the basic logic of the game.
  </figcaption>
</figure>

### Step by step instructions:

#### HTML

* For this challenge we are going to use [a group of radio inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio), one for each gesture. With radio inputs, you can only select one option at once. What do you have to add so that when you select one radio input the others are deselected.

* The computer options don't need to go in any radio buttons, they are just text displayed in an HTML element. But each option goes in it's own element, so that you can target them separately.


#### CSS

* Remember [grid areas](https://css-tricks.com/snippets/css/complete-guide-grid/)? Use them for the different parts of this layout: header, human, computer, footer.

* The title in the header and the result in the footer have to be centered both vertically and horizontally. You know how to do that :D

* There is a subtle box shadow in the main container, you know how to do that too!

* Font is Nunito sans, from Google fonts. Get only the light, regular and black variations.

* Colors are: background and button green: #49b971, gray background on header and footer is #d2dae2, human background and computer text is white, computer background and page text is #333.


#### JS

* Think about your program, separate the different parts: reading inputs, doing the calculation, and printing the outputs. **This applies to any project in any programming language**.

* This challenge makes heavy use of functions. Remember the separation between function declaration and function call. You can define your functions anywhere in your program, and you can call them later. You can also call functions inside other functions. The code won't be executed until you call the function.

* You can have as many functions as you want outside the event listener, and just call the ones you need inside of the listener. Think about what needs to happen when the user clicks, and be sure to call that code inside. The code can be in a function that you defined somewhere else. As long as you call the right function inside of the listener, your code will be executed when the user clicks the button.

* Create a function to get the human gesture. How do you get the one radio input that is checked? [Take a look at querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

* Create a function to get the computer gesture. Generate the computer gesture [with Math random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random). Use an array to store the possible gestures, and then select an index randomly. For example, `var gestures = ['rock',  'paper', 'scissors']`, and then select a random index, like this: `gestures[randomIndex]`.

* Create a function to check if there is a draw. The function takes the human gesture and the computer gesture as arguments and returns a Boolean.

* Create a function to check if the human wins, sending the human and the computer gestures as arguments, comparing them and applying the rules. It returns a Boolean. To check who won, you only need to check the conditions for when the human wins.

* Create a play function to trigger the game. This function gets the gestures, and then checks if the result is a draw, a win or a lose, printing the right message every time.

* Did you know that [you can apply or remove classes from an element via JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)? Once you target an element with JavaScript, you can call `classList.add(CLASS_NAME`) on it to apply any class you have defined in your CSS. Create a class "selected" in your CSS file. Then, once you know the gesture of the computer, target the HTML element that displays that gesture so that the user knows which gesture the computer selected.

* Once you have the previous point working, you will notice that the style stays applied forever. Create a cleanup function that restores the three HTML elements of the computer gesture to their original state with `classList.remove(CLASS_NAME)`.


#### GIT

* Work on a branch other than master in a new project. Remember to have a first commit in master before you branch off.

* When you are finished, create a pull request as you did in the previous challenge.


#### DEBUGGING

* Use your browser's developer tools as you did in the previous challenge. Remember that `console.log()` is your friend.
