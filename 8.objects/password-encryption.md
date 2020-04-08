---
layout: default
title: Login challenge as an object
---

**Challenge:** Rewrite the Login Challenge as an object. Feel free to use as many objects as you need to separate concerns. For example, you might add a login object with the logic to divide pizzas, and a user interface object with all the DOM manipulation and event listeners.

**To practice:** Objects

### Step by step instructions:

#### HTML

No changes.

#### CSS

No changes.

#### JS

Pretty much like we did in the previous example, but with one caveat: In this challenge some of our functions were called from inside another function, being this function in another file, in a library.

In this case, when we move the code to objects, the reference to `this` which usually would point to the object, would be lost. So `this.myFunction` will be undefined, because `this` will be a reference to the whole browser window (which is also an object), rather than a reference to our object. Since the browser window doesn't have a `myFunction` defined, `this.myFunction` returns undefined.

This didn't happen before because all our functions were outside of an object, meaning they were globals, meaning they became functions of the browser window.

To avoid getting an undefined value when calling one of our functions, just call them explicitly on the variable that represents the object, rather than on `this`. For example, if the variable that holds our object is called `login`, call those functions as `login.myFunction` rather than `this.myFunction`.

This does not apply to all functions, just those that we pass to the library as an argument, i.e. the functions that will be called from inside the library, and any function that is called from another function.

You could also use arrow functions, but they are discouraged as object methods. [See the documentation to learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
