---
layout: default
title: Mad Lab part 2
---

**Challenge:** Mad Labs is a phrasal template word game where one player prompts others for a list of words to substitute for blanks in a story before reading the - often comical or nonsensical - story aloud.

Create a simple Mad Lab game that prompts for a noun, a verb, and adjective and an adverb and injects those into a story.

**To practice:** Click Events, targeting and manipulating HTML elements from JS, Inputs, String concatenation.

**Example:**

<pre><code class="language-plaintext">Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly
Do you walk your blue dog quickly? That's hilarious.
</code></pre>

<h3 id="stepbystepinstructions">Step by step instructions:</h3>

<h4 id="html">HTML</h4>

* Use pairs of label/input to collect the data from the user. You don't need to wrap them in a form. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input">Read the documentation about inputs</a> and choose the right type of input element.

* Make all inputs required.

* Use a button for the user to click after they entered the data. When the user clicks the button, the data is read from the text inputs, converted into the output, and printed in the page. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">Here's the documentation about buttons</a>.

* Use whatever HTML element of your choice to display the sentence, a div, a p, etc.


<h4 id="css">CSS</h4>

You are free to style and layout things as you please.

<h4 id="js">JS</h4>

* Target the button as you did in the previous challenge and save it into a variable. Use a click event listener to listen for clicks on the button. Like this:


```js
YOUR_BUTTON_VARIABLE.addEventListener('click', event => {
  // Put here the code that you want to run
  // when the user clicks the button
});
```

* Inside the event listener, target the inputs and save their content into variables. You can use ".value" to get the value of a text field. <a href="https://www.w3schools.com/jsref/prop_text_value.asp">Read documentation about value</a>.

* Use string interpolation to build the output into a variable.

* Target the HTML element where the output goes. Then add the constructed output inside of the HTML element, as you did in the previous challenge.


<h4 id="git">GIT</h4>


* Work on a branch as you did in the previous challenge. We are also working on the same project.

* When you are finished, create a pull request as you did in the previous challenge.


<h4 id="debugging">DEBUGGING</h4>

Use your browser's developer tools as you did in the previous challenge.
