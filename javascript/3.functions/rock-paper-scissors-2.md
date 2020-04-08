---
layout: default
title: Rock, Paper, Scissors - Part 2
---

We are going to add the floating faces now.

* When there is a draw, human and robot/computer show their normal faces.

* When the human wins, the human shows a happy face and the robot a sad face.

* When the human loses, the human shows a sad face and the robot a happy face.


**To practice:** CSS animations with keyframes, modifying HTML attributes from JavaScript

<figure>
  <video controls>
    <source src="rock-paper-scissors-2.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>
    Video showing the animations on the faces representing the human and the computer.
  </figcaption>
</figure>

### Step by step instructions

[Download the images from here](rock-paper-scissors-images.zip).

#### HTML

* The images for the human and the robot are provided. Store them inside an images folder. When the page is loaded, images/human.png and images/robot.png are displayed.

* A more semantical way to markup an image that is part of the content (i.e, not decorative) is [using the `figure` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure). It can be used also for tables, diagrams and all sorts of content. We are going to use it for our images. Add a `figure` element below the human gestures and another one below the computer gestures. Add also a `figcaption` with a description of the image.

#### CSS

##### Faces

The images of the faces have an animation applied to them where they just go up and down forever. To make an animation like this, [we will use the animation property](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) (the shorthand). One of the values passed to the animation property is the animation name. We are going to use a custom name for the value of the animation name. We will declare this custom name [using the @keyframes rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes). Like this:

* Using @keyframes, create an animation called `float` that applies a vertical translate down transform with just one step at 50%. Then in the animation property shorthand, use the name `float` as your animation name. [Here you have some examples that use keyframe animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations).

* There are other values that you can pass to the animation property shorthand. Make the duration of the animation be `3s`, the `timing-function` be `ease-out` and the iteration count `infinite`.

##### Shadow

* We are going to make the `figcaption` be the "shadow" below the images. So we will just make the text color transparent. The background color is black with opacity, so use `rgba()`.

* Since we want the `figcaption` to look like the shadow of the image, we are going to set width and height, giving it more width than height, and a border radius.

* The figcaption also has an animation. Use the animation property shorthand to add an animation called `shadow` that you will declare with the `@keyframes` rule. Then make the duration of the animation be `3s`, the `timing-function` be `ease-out` and the iteration count `infinite`.

* For the shadow animation defined with the `@keyframes` rule we are going to make the width and height a bit bigger and the background color a big darker. Add just one step at 50%. This is the same percentage that we used for the image animation to make it look like when the face comes down at 50% and is closer to the floor, the shadow also gets bigger and darker.


#### JS

We want to switch the images depending on the result of playing the game. For this we are going to update the value of the `src` attribute of the images via JavaScript. We can do this by first getting the image element we want to update, and then calling `.src` on it and storing the path to the image, in the same way we do when we call `.setContent` to store some text in an element.

* If the result is a draw, set the src of the human image to `images/human.png` and the src of the robot image to `images/robot.png`.

* If the result is human wins, set the src of the human image to `images/human-win.png` and the src of the robot image to `images/robot-sad.png`.

* If the result is human loses, set the src of the human image to `images/human-sad.png` and the src of the robot image to `images/robot-win.png`.


#### GIT

* Work on a branch other than master in a new project. Remember to have a first commit in master before you branch off.

* When you are finished, create a pull request as you did in the previous challenge.


#### DEBUGGING

* Use your browser's developer tools as you did in the previous challenge. Remember that `console.log()` is your friend.
