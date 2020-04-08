---
layout: default
title: To Do List
---

**Challenge:** Build a to-do list app that reveals parts of an image as you mark tasks as done. To mark a task as done, you click it. To remove a task from the task list, you click it again.

**To practice:** Testing a user interface.

<figure>
  <video controls>
    <source src="todo-list.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>
    Video showing how to use the To Do list.
  </figcaption>
</figure>

### Step by step instructions

#### SVG

SVG is a graphics format [based on XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction), as HTML once was. It basically means that you have specific tags to create specific elements, and they can have attributes and be applied styles or be targeted with JavaScript. Image formats based on XML are sometimes called "**vector**" images (SVG, EPS, PDF), since you create the images using geometrical figures. Instead, "**raster**" images (JPG, PNG, GIF) are made of a collection of pixels. You can read more about the differences between raster images and vector images [in this article](https://www.shutterstock.com/blog/raster-vs-vector-file-formats).

**You can open an SVG file in your browser**, and when you do that, you can see it's elements in the inspector, and you can access them from the console too.

SVG images are **rarely created by hand**. Instead, people use software to create vector images, like Inkscape in Linux (open-source, free), Adobe Illustrator (Mac & Windows, paid) or Sketch (Mac only, paid). However, is a good idea to familiarize with the syntax so that you can manipulate the SVG DOM.

MDN has a full [SVG elements reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element) and a [SVG attributes reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute). Another good resource about SVG is the blog of the SVG expert [Sara Soueidan](https://www.sarasoueidan.com/tags/svg/) and any of her talks. There is also a visual explanation of SVG paths in [this CSS tricks post](https://css-tricks.com/svg-path-syntax-illustrated-guide/).


SVG examples:

```markup
<svg width="200" height= "200">
  <circle cx="100" cy="100" r="70" stroke="#ff004a" stroke-width="15" fill="#ffa200" />
  Sorry but this browser does not support inline SVG.
</svg>
```

produces:

<p><svg width="200" height= "200">
  <circle cx="100" cy="100" r="70" stroke="#ff004a" stroke-width="15" fill="#ffa200" />
  Sorry but this browser does not support inline SVG.
</svg></p>

You can give it a class, from inside the SVG or from the page's CSS file:

```markup
<svg width="200" height="200">
  <style>
    .square {
      fill: #27aaff;
      stroke: #222e55;
      stroke-width: 2em;
    }
  </style>
  <rect class="square" x="15" y="15" width="165" height="165" />
  Sorry, your browser does not support inline SVG.  
</svg>
```

<p><svg width="200" height="200">
  <style>
    .square {
      fill: #27aaff;
      stroke: #222e55;
      stroke-width: 2em;
    }
  </style>
  <rect class="square" x="15" y="15" width="165" height="165" />
  Sorry, your browser does not support inline SVG.  
</svg></p>


or target it with js:

```markup
<svg id="star" height="200" width="200">
  <style>
    polygon {
      fill: lime;
      stroke: purple;
      stroke-width: 5;
      fill-rule: nonzero;
    }
    text {
      cursor: pointer;
    }
  </style>
  <polygon points="100,10 40,198 190,78 10,78 160,198" />
  <text x="75" y="120">Click me!</text>
  Sorry, your browser does not support inline SVG.
</svg>

<script>
  document.getElementById('star').addEventListener('click', () => {
    alert('clicked!');
  });
</script>
```

<p><svg id="star" height="200" width="200">
  <style>
    polygon {
      fill: lime;
      stroke: purple;
      stroke-width: 5;
      fill-rule: nonzero;
    }
    text {
      cursor: pointer;
    }
  </style>
  <polygon points="100,10 40,198 190,78 10,78 160,198" />
  <text x="75" y="120">Click me!</text>
  Sorry, your browser does not support inline SVG.
</svg></p>

<script>
  document.getElementById('star').addEventListener('click', () => {
    alert('clicked!');
  });
</script>


Download the [sample SVG image](punk.svg). Load the image in your browser and inspect it. What SVG tags can you see in it? Do they all have an id? Which tags do have an id? Does any of them have a class?

#### HTML

Create a pair label / text input and a div to hold all the to-dos. Each to-do is a div as well, and will be created when the user types a new to-do and hits Enter.

Use the image as an inline SVG, i.e., copy paste the actual contents of the file in the right place in your layout (it's a lot of code to paste, but later on we'll learn a better way to do this, for now this is good enough).

#### CSS

* Use grid for the page layout. Think about the position of all the elements, how would you mentally organize this layout into different sections/cells of the grid? The image container is provided with a class in case you need to apply any styles to it as a whole or use it as a grid cell.

* The font is [Eater](https://fonts.google.com/specimen/Eater).

* Page text color is `hsla(0,0%,100%,.56)` and page's background color is `#3a3a3a`.

* The input's background color is `#424242`, and the border `#333`. The focused state has a background color of `hsla(0, 0%, 100%,.56)`, and the text color for the placeholder text is` #333`.

* As you can see in the video I was lazy with the title but you can make it stay in place if you prefer.

* To make the items stroked, create a `stroke` class and apply it through JavaScript.

* To hide the elements in the SVG before they are shown, create a `hidden` class. As you can see, this class is applied to elements in the SVG file.


#### JS

This app is very UI intensive so all the code is doing DOM manipulation. Features:

* We will read the value entered by the user in the input when they press Enter. [What event](https://developer.mozilla.org/en-US/docs/Web/Events) have we used in the past to detect when the user presses Enter? What's the code of the Enter key?

* We will have to clear the value of the input after we read it.

* For every to-do the user adds, we will create a div to hold it inside of the to-dos container. Each needs an id generated programmatically. You can do that using a counter, to ensure each gets a unique id, and increment the counter every time you add a new to-do, so that the next one gets a different id.

* Once the to-do is created, if the user clicks it, a stroke will be added to it (we will apply the `stroke` class to it) and a new stage of the image will be revealed (we will remove the `hidden` class from it). You may need a stage counter as well. A stage is a reference to the SVG elements ids, since we will show each element incrementally.

* To get the todo that was clicked we can use the old trick of listening on the whole container and once it's clicked, getting the id of the children that was clicked. This simplifies the code a lot.

* Each group element in the SVG image represents a "stage", and so you will have a maximum number of stages (as many as there are in your image). After you reach the last stage you do nothing from there on.

* Suggestion: You could save the stage ids in an array and get a specific stage of the image by its position in the array, using the stage counter. That way, the order in which each of the stages will be revealed is given by their position in the array.

* If the user clicks a second time, and the item has a class of `stroked`, we will remove the item.

#### Testing

Use TDD to build this logic one test at a time. Considering all your app needs to do, sit and think of all the things you have to implement. Make a list of features. Then translate each into a test, one by one.

Example list of things to test, based on the features mentioned above:

* when adding a to-do
    * adds to-do item to the list
    * does not add to-do item to the list if empty
    * sets to-do item id
    * increments succesive to-do item ids
    * clears up the input contents

* when showing next stage
    * strokes to-do when user clicks it
    * removes stroked to-do when user clicks it again
    * shows the first stage on first click on a to-do
    * shows the next stage on next click on a to-do
    * stops after adding all stages

Remember to simulate user journey in your tests. The user types something, then presses enter, then something happens. Setup the DOM before the tests and then reset the DOM after the tests. It is recommended that when you reset the DOM you remove all the elements you created when you setup the DOM, or you will be adding more in every test.

You can simulate a user clicking Enter like this ([check the docs at MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)):
```js
let event = new Event('keydown');
event.code = 'Enter';
input.dispatchEvent(event);
```

Don't call any methods directly, unless you are going to call them directly explicitly in the HTML (for example, you would probably want to call an `initialize()` method explicitly in your HTML, in which case you would also have to call it in your tests.)

If the DOM is complex to setup (for example, many elements), you can just add minimal HTML as a string using `innerHTML`. The backticks allow you to type multiline strings. Don't overwrite the body contents because Jasmine adds stuff to the body. Better add your stuff in a div.

```js
let container = document.createElement('div');
container.innerHTML = `<anElement>
  Hello
</anElement>
<anotherElement>
  Hi
</anotherElement>`;
document.body.appendChild(container);
```

Production code: Put every class in its own file. If there is extra code to run (like creating the UI and calling initialize on it) that goes in your HTML page.

<!-- https://medium.com/humans-create-software/composition-over-inheritance-cb6f88070205 -->
