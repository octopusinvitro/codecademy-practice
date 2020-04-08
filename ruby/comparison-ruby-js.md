---
layout: default
title: 'Comparison: Ruby vs JavaScript'
---

* Ruby has no `var`, `let` or `const`. You just type the name of the variable and if you want it to be a constant you type it in uppercase.

* Ruby uses no parenthesis for functions, unless the function takes arguments, in which case they are optional.

* Ruby uses no curly brackets `{}` to contain the body of a function, it uses the delimiters `def` and `end`

* if you can't access something, it just returns null, it doesn't error

* you can not pass functions as arguments as you do in JavaScript

* private stuff is actually really 100% private for reals

Ruby has:

* no semicolons at the end of every line`;`

* no `this` keyword

* no return, it returns whatever is in the last line (`return` exists but it used to exit early)

Ruby specific features:

* `null` is called `nil`

* `length` is also called `size` and `count`, so you can use any of them with the same result

* three equals (`x === y`) is just two equals (`x == y`)

* String concatenation is done using double quotes and adding all code inside this brackets: `#{}`

* In Ruby you can not only do something `if` some condition happens, you can also do something `unless` some condition happens

* You can also loop `while` some condition is met or `until` some condition is met.

* getters are called "_attribute readers_"

* setters are called "_attribute writers_"

* setter + getter is called "_attribute accessor_"

* boolean methods have to end in question mark `?`

* mutation methods end in exclamation mark `!`. These methods change the object they act on in place, rather than returning a new object.
