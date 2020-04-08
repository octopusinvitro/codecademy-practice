---
layout: default
title: Space invaders
---

This challenge is about watching a live coding session and following along, writing the code as you watch. Pause the video when you need, replay as many times as you need, reduce the speed, try things in the console, go and read documentation if you come accross something you've never seen before.

In summary, use this exercise to practice, but also to learn new things.

The video shows the amazing [Mary Rose Cook](https://maryrosecook.com/), ex-Recourse Center mentor and ex-Makers teacher (among other things). She has made programming environments, compilers, video games, and a version of Git in JavaScript.

<blockquote>
When I made my first game, I was scared of writing graphics code and dealing with browser quirks and player input events. So, I used a game framework to handle that stuff for me. Later, I discovered that stuff is not so scary. I will live-code an action game from scratch without using any libraries. We will cover keyboard input, graphics, collision detection and sound.
</blockquote>

Enjoy and have fun coding!

<iframe class="youtube" src="https://www.youtube.com/embed/hbKN-9o5&lowbar;Z0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Step by step instructions

This video is showing the ES5 way of creating classes. You can follow along with the ES5 syntax or translate to the new ES6 syntax as you go. Up to you!

The ES5 syntax is still in use and will probably be for a long time. Also, it is supported by all browsers, while ES6 syntax is not. However is good for you to practice the ES6 syntax too. My recommendation would be to follow along with the ES5 syntax, then translate to the ES6 syntax when your game is finished.

The ES5 syntax shows that modern JavaScript classes are internally just functions. The ES6 syntax introduces the reserved word `class`, but that is just syntactic sugar. Behind the scenes, `class` is just creating a function.  The `class` declaration was introduced to make JavaScript look more like other programming languages.

These are the main differences between classes in ES5 vs ES6:

<table class="es-table">
  <thead>
    <tr>
      <th></th>
      <th>ES5</th>
      <th>ES6</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>Constructor</th>
      <td>
        <pre><code class="language-js">
let Bullet = function(center, velocity) {
  this.center = center;
  this.velocity = velocity;
  this.size = { x: 3, y: 3 };
};
        </code></pre>
      </td>
      <td>
        <pre><code class="language-js">
class Bullet {
  constructor(center, velocity)  {
    this.&lowbar;center = center;
    this.&lowbar;velocity = velocity;
    this.&lowbar;size = { x: 3, y: 3 };
  }
}
        </code></pre>
      </td>
    </tr>
    <tr>
      <th>Instance methods</th>
      <td>
        <pre><code class="language-js">
Bullet.prototype = {
  update: function() {
    this.&lowbar;center.x += this.&lowbar;velocity.x;
    this.&lowbar;center.y += this.&lowbar;velocity.y;
  },

  draw: function() {
    this.&lowbar;screen.fillStyle = '#00c4fe';
    this.&lowbar;screen.fillRect(
      this.&lowbar;center.x - this.&lowbar;size.x/ 2,
      this.&lowbar;center.y - this.&lowbar;size.y/ 2,
    );
  }
};
          </code></pre>
      </td>
      <td>
        <pre><code class="language-js">
class Bullet {
  update() {
    this.&lowbar;center.x += this.&lowbar;velocity.x;
    this.&lowbar;center.y += this.&lowbar;velocity.y;
  }

  draw() {
    this.&lowbar;screen.fillStyle = '#00c4fe';
    this.&lowbar;screen.fillRect(
      this.&lowbar;center.x - this.&lowbar;size.x/2,
      this.&lowbar;center.y - this.&lowbar;size.y/2,
    );
  }
}
        </code></pre>
      </td>
    </tr>
    <tr>
      <th>Static methods</th>
      <td>
        <pre><code class="language-js">
Invader.createInvaders = function() {
  // your code here
};
        </code></pre>
      </td>
      <td>
        <pre><code class="language-js">
class Invaders {
  // ...
  static createInvaders() {
    // your code here
  }
}
        </code></pre>
      </td>
    </tr>
  </tbody>
</table>

* Feel free to make changes on top the game. Refactor it, break it into files, try using images for the ships or a space background, try adding more sounds, more invader types, etc.

* If at any point you get lost, take a look at [the annotated code in Mary's personal website](http://annotated-code.maryrosecook.com/space-invaders/index.html).

* Part of a developer's job is to read other people's code. Search on GitHub for other vanilla JavaScript examples of Space Invaders. Different developers may implement it in different ways and different levels of complexity. Did you find any interesting approaches?

* Can you think of a way to adapt your game to be played on mobile as well? What events are available for you to listen to?

* Create a new repository to store the game when you are finished.

* Publish it through GitHub pages as we did with the Rock Paper Scissors game.

* Share with friends!
