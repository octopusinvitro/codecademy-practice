---
layout: default
title: Game of life
---

**Challenge:** We are going to build [Conway's game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), a cellular automaton devised by John Conway in 1970. It's not a game in the sense that the user interacts with the user interface during the game, but rather it's more of an artificial intelligence that, starting with initial conditions set up by the user, evolves on its own.

**THE RULES**

**For a space that is 'populated':**
* Each cell with one or no neighbours dies, as if by solitude.
* Each cell with four or more neighbours dies, as if by overpopulation.
* Each cell with two or three neighbours survives.

**For a space that is 'empty' or 'unpopulated'**
* Each cell with three neighbors becomes populated.

**To practice:** Node

This is what the game of life looks like (in Spanish but just look at the images):

<iframe class="youtube" src="https://www.youtube.com/embed/omMcrvVGTMs" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Step by step instructions:

#### HTML

Your game is going to happen in [a canvas element](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). Canvas is an element that allows us to draw geometrical figures. It is very dependent of specific pixel positions, and is not as fluid and flexible as what you can draw with CSS, but it is very useful for other applications like games.

Familiarize yourself with the different methods that you can use in canvas to draw different objects, text, etc.

* Pick the `index.html` and the `css` folder from the [HTML5 boilerplate project](https://github.com/h5bp/html5-boilerplate/tree/master/dist)

* Add a canvas with specific width and height (this is important so that we are in control of the dimensions in the code). This canvas will represent the grid in which the cells will live. The grid is **squared**:

```markup
<canvas id="screen" width="640" height="640">
Your browser does not support canvas.
</canvas>
```

* Add a button to start the game.

* Initialize the user interface with the number of cells that your grid will have in one dimension (should be the same number of cells in both x and y dimensions since the grid is a square) and the HTML id attributes of any GUI elements you want to access from the JavaScript code:

```markup
<script>
;(function() {
  window.addEventListener('load', () => {
    let cellCount = 50; // # of cells in 1 dimension
    let ids = {
      // your ids here
    };

    (new UserInput(cellCount, ids)).initialize();
  });
})();
</script>
```

* You can add a song to start playing when the user clicks the start button. For that, add an audio element to the page:

```markup
<audio id="song" src="sounds/staying-alive.mp3"></audio>
```


#### CSS

Style as you wish.

Lea Verou has [an amazing gallery to make simple backgrounds with pure CSS](http://projects.verou.me/css3patterns/), including a nice blueprint grid.


#### JS

**Location class**

* Create a `Location` class that takes a `row` and a `cell` as arguments to the constructor. It has a command method `setLocation` to overwrite the values of `row` and `cell` at any point of the game (takes a `row` and `cell` as arguments), and a query method  `neighbours` to calculate the locations of its eight neighbours (takes the `cellCount` as an argument).

* The `neighbours` method takes into account the limits of the grid. If a cell is in the first row already, the neighbours on "top" of it would be in the last row of the grid. If a cell is in the first column, the neighbours to the "left" of it would be in the last column of the grid.

* The `neighbours` method returns an array of locations as JS objects:

```js
[
  { row: top,      cell: left }, {row: top,    cell: this.cell }, { row: top,      cell: right },
  { row: this.row, cell: left },                                  { row: this.row, cell: right },
  { row: bottom,   cell: left }, {row: bottom, cell: this.cell }, { row: bottom,   cell: right }
];
```

* Tests: test for a grid of `cellCount = 3` (3 cells in the X dimension and 3 cells in the Y dimension) and make sure you cover all these cases (draw the grid in a piece of paper to help you think around it):
  * `(1, 1)` no border issues
  * `(1, 0)` left border issues
  * `(1, 2)` right border issues
  * `(0, 1)` top border issues
  * `(2, 1)` bottom border issues


**Grid**

* Create a `Grid` class to encapsulate operations in the grid, and the rules of the game of life, which takes the `cellCount` as an argument.

* The constructor creates a grid and a location in the constructor. The location is an instance of `Location` at point (0, 0). The grid is an array of `cellCount` rows, where each row is an array of `cellCount` dead cells. A dead cell is represented with an integer value of zero. A live cell is represented with an integer value of 1. Since zero and one are magic numbers, you can represent them with class constants instead:

```js
static DEAD = 0;
static ALIVE = 1;
```

* The grid class has the following methods:

  * a getter method to return the `cellCount`

  * a getter method to return the `grid`

  * a setter method to set the `grid` which takes a `rows` array as an argument and overwrites the `grid` with it.

  * a method to get the state of a cell, which takes a `row` and `cell` as arguments and returns the value stored in that position of the grid.

  * a method to set the state, which takes a `row`, `cell` and `state` as arguments and sets the given state in the given position.

  * a method to add a starter in the center of the grid, that receives a `starter` as a `Grid` object and copies the state of each starter cell into the right positions of the grid.

  * a method `applyRules` which takes no arguments and applies the rules of the game of life in one iteration. To avoid the unexpected results of mutation, it makes a copy of the grid, then uses the original grid to calculate the state but applies the state in the copy. Make sure that the grid copy is independent from the original.

**Display**

* WIP

**Starters**

* WIP

**User interface**

* Create a user interface class for your game.
* WIP



<!-- https://www.youtube.com/watch?v=qPtKv9fSHZY -->
