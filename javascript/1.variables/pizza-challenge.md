---
layout: default
title: Pizza challenge
---
**Challenge:** Division isn't always exact, and sometimes you will write programs that will need to deal with the leftovers as a whole number instead of a decimal.

Write a program to evenly divide pizzas. Prompt for the number of people, the number of pizzas, and the number of slices per pizza. Ensure that the number of pieces comes out even. Display the number of pieces of pizza each person should get. If there are leftovers, show the number of leftover pieces.

**Example:**

<pre><code class="language-plaintext">How many people? 8
How many pizzas do you have? 2

8 people with 2 pizzas.
Each person gets 2 pieces of pizza.
There are 0 leftover pieces.
</code></pre>

<figure>
  <video controls>
    <source src="{{ site.baseurl }}/1.variables/pizza-challenge.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>
    Video showing how the pizza challenge works.
  </figcaption>
</figure>

<h3 id="stepbystepinstructions">Step by step instructions:</h3>

<h4 id="html">HTML</h4>


* Use again pairs label/input to collect data.

* Make sure that the user can only enter numbers. Is there an input type that allows you to ensure that?

* Dividing by zero is nasty. Is there any attribute you can add to the input so prevent people from entering a zero?

* Use a button again to trigger the calculation.

* Use any HTML element to print the output.


<h4 id="css">CSS</h4>


* Style the challenge as in the video

* Use transitions to achieve the animations you see.

* Did you know that you can put almost anything as the content of a pseudo element? Even emojis! Find a nice arrow to use for the button.

* The font is Lato, from Google Fonts

* The background is <span data-color="#E96D65">#E96D65</span>, the input dashes are <span data-color="#b14943">#b14943</span>, the placeholder text is <span data-color="#b14943">#b14943</span>, the background of the inputs on focus is <span data-color="#76C3BD">#76C3BD</span>, the backgrounds of the button and it's pseudo element are <span data-color="#76C3BD">#76C3BD</span> and <span data-color="#69B1A9">#69B1A9</span>, but on hover they are <span data-color="#69B1A9">#69B1A9</span> and <span data-color="#58a199">#58a199</span>


<h4 id="js">JS</h4>


* The number of slices is always 8. Since this number won't change, make it a constant.

* Are there any Math methods you can use?


<h4 id="git">GIT</h4>


* Work on a branch other than master in a new project.

* When you are finished, create a pull request as you did in the previous challenge.


<h4 id="debugging">DEBUGGING</h4>

Use your browser's developer tools as you did in the previous challenge.
