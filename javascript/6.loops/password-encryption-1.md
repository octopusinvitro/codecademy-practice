---
layout: default
title: Password encryption - Part 1
---

**Challenge:** Your product manager was very pleased with the login form you built some time ago, however some clients have concerns about security.

"_They are worried about us sending their passwords to our server in plain text as some "man-in-the-middle" could intercept them. Can you look into encrypting them?_"

You do your research and find out about [bcript](https://en.wikipedia.org/wiki/Bcrypt), which is a widely used encryption algorithm. But you don't want to implement bcript all from scratch! Has someone done that already and released it as an open source library?

Surfing the web you find this weird [Octopus user who shared a bcript library](https://github.com/octopusinvitro/javascript-bcrypt) but didn't put intructions in the README on how to use it. Developers these days! Can you figure out how it works just by studying how it's used in the different examples provided?

99% of your time as a developer will be spent reading code that others (or even yourself) wrote. You decide to download the repository to play with it locally.

You will use the bcrypt library to hash (encrypt) the login's password, and the password that the user enters. Then, instead of comparing the two passwords in plain text as before, compare their hashes.


**To practice:** using libraries, higher order functions

**Example:** Same as in the original password validation challenge.

### Step by step instructions:

#### HTML

No changes.

#### CSS

No changes.

#### JS

* Copy the `bCript.js` library in the Octopus repository to your project. Include it in your page before any of your JavaScript runs. Because it is a library, we use it "plug and play", and we never touch the library code.

* Study the usage examples, what is going on? How many library functions are they using? How do these work? There is a lot of function names being passed as arguments, right?

* When you study the usage examples, you will see a lot of [`try...catch` statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch). They are used to protect your application from logic that can throw errors and break the flow. You put the code that may explode inside of a `try {}` statement, then use `catch()` to define what happens if an error occurs. It is recommended to write your code in a robust way so that it is already protected from errors, but when you have no access to the code (like when using a library) you can use this feature.

* Use the library function that calculates a salt to programmatically calculate a salt using **five** rounds which is good enough for this challenge.

* Use the library function that hashes passwords to hash the password entered by the user, and pass it the salt you calculated before. The hashing function also takes two other arguments which are function names. Don't pass functions if there is no need, you can pass `null` instead. Which of those function names refers to the function that gives you access to the calculated hash? You have to define what that function does yourself. It will be called when the hash calculation is finished.

* In the function that gives you access to the calculated hash, use the library function that verifies hashes to check that the calculated hash is the same as the actual password hash. This function again takes two function names as arguments.  Which of those function names refers to the function that gives you access to the Boolean result of comparing both hashes? You have to define what that function does yourself. This function will be called when the comparison is finished.

* In the function that gives you access to the Boolean result, use it to decide which message to print to the user.

#### GIT

Work in the same project you created for the login, in a separate branch. When the branch is ready create a pull request and ping me to review.

#### DEBUGGING

Use `console.log()` as usual.
