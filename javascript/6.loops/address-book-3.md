---
layout: default
title: Address Book - Part 3
---

**Challenge:** In this part of the challenge we are going to sort columns in ascendant or descendant order.

When the page loads, the contacts will be unsorted. If the user clicks the title of a column, the contacts will be sorted by that column. If they click again, the contacts will be sorted in the reverse order, and so on.

In addition to that, everytime the user clicks, the arrow indicator will be updated to show if the rows are sorted in ascendant or descendant order, to inform the user on the current sorting order.

**Things you'll practice:** Iterators, working with tables.

**Example:**
```plaintext
  (contacts table is displayed)
  Click on a column title
  Contacts get sorted by that column
  Click again
  Contacts get sorted in the reverse order
```

<figure>
  <video controls>
    <source src="address-book-3.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>
    Video showing how searching contacts works.
  </figcaption>
</figure>


### Step by step instructions:

#### HTML

* Make all column headers start with a class that sets their background image as the ascendant arrow. By default, when the user loads the page, the ascendant image should be shown, since that is the default sorting order in JavaScript, so it's the one that will happen first.

#### CSS

* Download the [ascendant arrow here](address-book-solution/images/asc.svg) and the [descendant arrow here](address-book-solution/images/desc.svg).

* Create two classes, one for each image, and use them to set the corresponding background image of the column headers.

#### JS

* Our JavaScript file is starting to get big. Let's separate the code into two files: one to hold all the code related with deletions, and one to hold all the code related with searching. Include them in your HTML file. Just rememner the order in which you include them matters. Also make sure that the functions that are shared get included first. Make sure that all functions are already defined before you call them, move them around if needed. Do one file at a time.

* Create a new file to hold the logic of the sorting, i.e., this challenge, and include it in your HTML.

* We are going to explore another cool feature of `addEventListener()`. You can listen for clicks on a **parent element** and get information about which **children** was clicked. That way you don't have to add ids to all of the children and then add an event listener to each of the children separately. That would be tedious! (for example, we have four columns, but imagine if we had 100).

* Add a listener to the header row, to listen for clicks. When the user clicks anywhere on the header row, get the `cellIndex` of the header cell that was clicked. We will use this index to know what column to sort by. Use the console to check out what comes in the `event.target` when you click the header row, and write your code accordingly. This will allow us to have one event listener for all columns instead of four event listeners.

We are going to use [a mutator method to sort the rows](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Mutator_methods) according to the content of the cells that belong to the column to sort by. The mutator method can be used with or without passing a sorting function as an argument. We are going to pass a custom sorting function to the mutator method.

* Check in the documentation of the mutator method what kind of function could you pass as an argument. It takes two arguments: the current row and the next row.

* For every iteration, get the current row and then the cell that is in the index of the column to sort by. Get the `textContent` of that cell. Then do the same for the next row, so that you can compare the contents of the two cells.

When we are done sorting, we'll have to replace the rows of the table body with the sorted rows. We could use a loop for this, and add them one by one. However, when adding several elements one by one, the browser will redraw the layout every time, which has a performance impact. In this case it is recommended to use a [document fragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), which is like a ghost document where you can append your elements without causing a reflow. Then you append the fragment to your actual document, so that the browser only redraws once.

* Read this short post about [browser reflow](https://developers.google.com/speed/docs/insights/browser-reflow).

* Check the usage example of the document fragment in the documentation page, to understand how it works.

* We don't have to create any elements, because the elements we are going to add are the sorted rows, which already exist, so we can just append them. Use an iterator for that.

* Append the document fragment to the table body.

Once we have done this, we should be able to click any column title and have the rows sorted. However, if we click the same column again, nothing happens. Let's fix that.

* Create a global variable (we will fix these globals in the future) to store an array with the state of the sorting at any point in time. It should have as many items as columns, since each item represents the sorting state of each column.

* Use an initializing function to create this array. Find out the number of columns programmatically (we could have loads of columns, so we don't want to do it manually) and create the array with `new Array(numberOfColumns)`. This will create an array of X undefined items. Their initial value should be false for all. Use an iterator to set that value on all items. What is a good iterator for the job?

* After sorting the rows, and before updating the table body, check the sorting flag for that column. If it is `true`, reverse the order. How can we reverse an array?

* After sorting the rows and updating the table body, switch the sorting flag to the opposite value, so that next time the user clicks on the same column, the sorting order is reversed.

* After you switch the flag, switch the class of the headers that changes the background image. We have one simple way of doing this. Check out [the documentation for `classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList). The challenge is to switch classes using `classList` in no more than two lines of code.


#### GIT

Work in the same project but in a new branch. When the branch is ready create a pull request and ping me to review.


#### DEBUGGING

Use `console.log()` as usual.
