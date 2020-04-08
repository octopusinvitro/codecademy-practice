---
layout: default
title: Mad Lab part 1
---

**Challenge:** Create a text that updates a number in a sentence with another random number as you refresh the browser. Every time you refresh the browser, you will see the same sentence, but that number would have been replaced with another random one.

**Things you&#39;ll practice:** targeting and manipulating HTML elements from JS, String concatenation, JS libraries like Math, GIT branches.

**Example:**

<pre><code class="language-plaintext">I am 8 years old.</code></pre>
(refresh browser)
<pre><code class="language-plaintext">I am 156 years old.</code></pre>
(refresh browser)
<pre><code class="language-plaintext">I am 23 years old.</code></pre>
etc.

<h3 id="step-by-step-instructions-">Step by step instructions:</h3>

<h4 id="html">HTML</h4>
Use whatever HTML element of your choice to display the sentence, a div, a p, etc.

<h4 id="css">CSS</h4>
You are free to style and layout things as you please.

<h4 id="js">JS</h4>

* Write your JS in a separate file, just as you have a separate file for CSS. How do you include a JS file in your HTML code? What is the best place in the HTML code to include your JS files? (Google it!)

* Use `getElementById()` to target the HTML element by id and save it into a variable. [Read the documentation here](https://www.tutorialkart.com/javascript/javascript-getelementbyid).

* Use the Math library to generate a random number and save it into a variable. [Read the documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

* Use string interpolation to build the output sentence and save it into another variable.

* Then use the method `innerHTML` to add the output sentence inside of the HTML element of your choice. [Read the documentation here](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).


<h4 id="git">GIT</h4>
Work on a branch for this challenge.

* First, create an initial commit on master and push it to your upstream repository on GitHub, as you&#39;ve been doing until now.

* Then branch from master with &quot;`git checkout -b YOUR_BRANCH_NAME`&quot;. The checkout command is usually for switching branches, but if you add the &quot;`-b`&quot; flag, it will create a new branch and switch to it. You can see your newly created branch with &quot;`git branch`&quot;. It should have an asterisk too, meaning you are now working in that branch.

* When you are ready you can push this branch to GitHub with &quot;`git push origin YOUR_BRANCH_NAME`&quot;. You will be able to see it in the branches tab.

* Let me know when you&#39;ve done this and I&#39;ll show you how to create a Pull Request on GitHub.

<h4 id="debugging">DEBUGGING</h4>

* Use right click --&gt; &quot;inspect element&quot; to display your browser&#39;s developer tools and check the generated HTML and CSS.

* Click on the Console tab of your browser&#39;s developer tools to debug JavaScript. You can type JavaScript there!


<h4 id="extra">EXTRA</h4>
Do this if you want to, but it&#39;s not needed for the challenge:

At the end of your JS file, print the output sentence to the console using `console.log()`. Then, in your browser, load the developer tools and click on the console tab. What do you see in the console tab when you refresh the browser?
