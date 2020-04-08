---
layout: default
title: Pizza challenge as an object
---

**Challenge:** Rewrite the Pizza Challenge as an object. Feel free to use as many objects as you need to separate concerns. For example, you could add a pizza divider object with the logic to divide pizzas, and a user interface object with all the DOM manipulation and event listeners.

**To practice:** Objects

### Step by step instructions:

#### HTML

No changes.

#### CSS

No changes.

#### JS

We can avoid those globals we used to have, using objects. As you may remember, globals pollute the global namespace and should be avoided. Objects are a good step forwards, as everything is encapsulated inside of the object.

However, we still have to create the objects themselves (`let objectName = { // etc.}`), so at least those objects will be globals hanging out in the namespace.

To avoid this, we could put all the definitions inside of a function, and then call the function, like this:

```js
function aFunction() {
  const myObject = {
    // add code here
  };

  const anotherObject = {
    // add code here
  }
};

aFunction();
```

However, that one function would still be a global hanging around. Just one, that's true, but a global nevertheless. To avoid this, we can make it anonymous and invoke it immediately, like this:

```js
(function() {
  const myObject = {
    // add code here
  };

  const anotherObject = {
    // add code here
  }
})();
```

We changed `function aFunction() {}` for an anonymous function `function() {}` and then wrapped the whole thing in parentheses `(the function)()` so that we can call it immediately with the `()` at the end. This leaves no trace of globals anywhere and it's called an **Immediately Invoked Function Expresion (IIFE)**. You can read more about it in [the dedicated page at MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE).

**Caveat:** The IIFE does not work for the case when you have several files, but we will see how to fix this in a future lesson.

* Start with an empty IIFE.

* Inside of it, create an object to hold the logic to divide pizzas.

* Create a user interface and move the event listener to an initialize method. Use an arrow function for the event listener.

* The pizza divider logic reads some inputs from the DOM. Create the relevant getters in the user interface and pass them as arguments to the method that has the logic.

* Remember that the `value` should not be read until the user clicks the button.

* Avoid circular dependencies (i.e. user interface calls the piza divider, pizza divider calls the user interface). Since the user interface has the event listeners, it is better if it calls the pizza divider, and not the other way around. In most applications, no matter the language, the user interface is usually the one in charge of deciding which logic gets called depending on the user interactions.

* Call the initialize method at the end of the IIFE to put everything into motion.
