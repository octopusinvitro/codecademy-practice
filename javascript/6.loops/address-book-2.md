---
layout: default
title: Address Book - Part 2
---

**Challenge:** We are now going to implement the search functionality. When the user enters some text, we return the rows that match that search query _in any of the columns_. As opposed to the delete feature, the search is not an exact match, and can also match text in any of the columns, not only the name column.

**Things you'll practice:** Iterators, working with tables.

**Example:**
```plaintext
(contacts table is displayed)
Search in contacts database:
Hop
(Kato Hopkins is returned)
```

<figure>
  <video controls>
    <source src="address-book-2.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>
    Video showing how searching contacts works.
  </figcaption>
</figure>


### Step by step instructions:

#### HTML

* Use a pair label/input to ask for the search query.

* Download the [search image here](address-book-solution/images/search.svg).

* Use the same element as before to display errors.


#### CSS

* Add a class to hide rows, that sets `display: none`. This will also hide them from screen readers.

* Make any other changes needed.


#### JS

* Just as before, we want to trigger the search when the user hits enter after typing the search query.

* When the user hits Enter, start by hiding all table rows except the header. Do this by applying a class to all rows of the table body.

* Then get the user query and use the right iterators to select the rows for which any of their cells contain the query. Which are the best iterators to use? Remember that you can iterate through rows and cells like this:

```plaintext
// pseudocode

loop through the rows of the table body (row) {
  // (the row cells can be converted into an array)

  loop through the cells of the current row (cell) {
    // do something with the cell
  }
}
```

* Make the comparison more relaxed, by not making the user have to type the exact search query. Instead of `===` use `includes()`. [Read the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes).

* When you find the contacts that match the query, unhide them.

* If no contacts where found, display an error message.

* Again, keep in mind the separation of concerns between user interface and logic.

* As an extra challenge, make the search [case insensitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).


#### GIT

Work in the same project but in a new branch. When the branch is ready create a pull request and ping me to review.

#### DEBUGGING

Use `console.log()` as usual.
