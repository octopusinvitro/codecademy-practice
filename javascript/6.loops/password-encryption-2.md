---
layout: default
title: Password encryption - Part 2
---

**Challenge:** We are going to compare the password entered by the user against a list of passwords taken from our database. If the password exists in our database, we will print a success message. If not, we will print a failure message.

**To practice:** arrays, scope, iterators.

**Example:** Same as in the original password validation challenge.

### Step by step instructions:

#### HTML

No changes.

#### CSS

No changes.

#### JS

In the previous challenge we saw how to pass functions around as an argument. Iterators are native JavaScript functions that take a function as an argument. You have to define the function that gets passed to the iterator. Another old friend of ours, `addEventListener()`, is also a native JavaScript function that takes another function as an argument.

* We made a call to our server to get all the passwords we have stored in our database and it returned this:

```markup
const passwords = ['greenbear757', 'organicswan134', 'bluemouse519', 'heavytiger886', 'heavyladybug575'];
```

* Choose the right iterator to loop through the passwords in the array and check if the hashed version of the user password matches any of the passwords we have in our database. [Check all available iterators in the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods). From all the functions you have in place, what is the right function to place this iterator?

* Every time we compare the password hashes, we call a function that deals with the result of the comparison. This function will be called in every iteration of your iterator. Instead of dealing with the result right there, we are going to store all the result values in a global array as they come. Although using globals is discouraged in general, we are going to use this variable for now, and in future lessons we will see how to improve this.

* For now, store each result of comparing the hashes in this global array. Every time the function that compares hashes is called, this array will get a new item. Wherever in your code you declare this global array, initialize it with an empty array `[]`. There is an array function that allows you to store a new item in an array, use it. Review [the arrays lesson](https://www.codecademy.com/courses/introduction-to-javascript/lessons/arrays/exercises/arrays) if you need to, or [check out the MDN documentation on arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

* When the password iterator is finished looping through all the passwords, we will have all the result values stored in our global array. Use another iterator to check if any of those values is `true`. That means the password entered by the user matched some of the passwords we have in the database. Display the sucess message in the page if there is a match, and the failure message if there isn't.

* When you enter the right password, you may observe that the result is still false, and the global array may be empty. This happens because it takes some time for the bcrypt library to hash and compare all the passwords, so it may happen that when you call your iterator, the library has not finished yet doing its work. To avoid this, we are going to introduce a delay before we call our second iterator. For now we are going to use `setTimeout()`, but we will learn a better way to achieve this in a future lesson.

* [Check the documentation on how to use this function](https://javascript.info/settimeout-setinterval) and use it to wait for 500 miliseconds before checking the values of the global array. Feel free to increase the number of microseconds to wait if this number is not high enough.

* The `setTimeOut()` function is another example of a JavaScript native function that takes another function as an argument. Define this function and make it check the array with the iterator, then display the right message depending on the value returned by the iterator.

* Remember to clear up the contents of the global array for the next click.

#### GIT

Work in the same project you created for the login, in a separate branch. When the branch is ready create a pull request and ping me to review.

#### DEBUGGING

Use `console.log()` as usual. Printing the value of the array in every iteration may be helpful.
