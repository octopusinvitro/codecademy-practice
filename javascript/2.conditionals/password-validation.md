---
layout: default
title: Password validation
---

**Challenge:** Create a simple program that validates user login credentials. The program should prompt the user for a username and a password.

If the password matches the right value, the program should display "**Welcome!**" If it doesn't match, the program should display "**I don't know you.**".

**To practice:** if/else conditionals, emojis in HTML, CSS positioning, CSS box-shadow.

**Example:**

<pre><code class="language-plaintext">username: matt
password: 12345
I don't know you.
</code></pre>

or

<pre><code class="language-plaintext">username: matt
password: abc$123
Welcome!
</code></pre>

### Step by step instructions:

#### HTML

* Investigate how you can prevent the password from being displayed on the screen in clear text when typed. [Is there a type of input for that](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)? How can you help people with phones **switch to the right keyboard** when they give focus to the password field? Is there an input attribute that lets you validate the **length** of the password?

* Again, use pairs input/label and a button, but don't wrap them in a form, as that would require much more complex JavaScript to handle it.

* You can use [the span element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) inside other elements for styling (but don't abuse it!). For example, in the title and in the button.

* In the last challenge we used emojis as text in CSS. Did you know that you can use emojis and other unicode characters as text **in HTML too**? Use emoji text for the labels text. [Choose whatever you like from this list](https://en.wikipedia.org/wiki/Miscellaneous_Symbols_and_Pictographs). You should be able to just copy-paste. Make sure you have the [charset meta tag in place](https://www.w3.org/International/questions/qa-html-encoding-declarations)!

```markup
<meta charset="utf-8"/>
```

* If copy-paste doesn't work, you have to use the emoji code and add some symbols before and after the emoji code. For example, to show the icon with the code 1F30D, type &amp;&num;x1F30D; This option ALWAYS works in all systems, but is less readable.

#### CSS

* Use a grid for just the labels and inputs. Use absolute positioning for the button.

* Remember that top, left, right and bottom refer to the sides of the element, but the value refers to the parent. And that transform always refers to the element. Use this information to position the button!

* For the background image use any you like from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns).

* Font is Raleway from Google fonts. How can you customise the font to get only the light, regular and black variations?

* This challenge uses a lot of box-shadows. You can have external or internal shadows (adding inset at the beginning) and you can also have several box-shadows, separated by a comma. [Check the documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).

#### JS

* The password can be anything you want.

* A work colleague has been observing that you've been using `innerHTML` to update the contents of an HTML element, and warns you about [some security considerations](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations). You decide to ask Google for a better option. What can you use instead of `innerHTML`?

#### GIT

* Work on a branch other than master in a new project. Remember to have a first commit in master before you branch off.

* When you are finished, create a pull request as you did in the previous challenge.

#### DEBUGGING

Use your browser's developer tools as you did in the previous challenge.
