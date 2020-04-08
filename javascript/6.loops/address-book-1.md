---
layout: default
title: Address Book - Part 1
---

**Challenge:** Your company wants to be original and has decided that another address book is exactly the product that humanity needs. The product manager and the web designer have agreed on the look and feel as well as the branding. They have now given you the mockup and have asked you to implement the business logic behind it.

We are going to build an address book that will allow us to delete contacts, search contacts, sort contacts, etc. In the first part of this challenge, we are going to add the logic to delete a contact, since it's the simpler action.

**Things you'll practice:** Iterators, working with tables.

**Example:**
```plaintext
(contacts table is displayed)
Delete contact from database:
Orson Meadows
(Orson Meadows is deleted)
```

<figure>
  <video controls>
    <source src="address-book-1.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>
    Video showing how deleting contacts works.
  </figcaption>
</figure>


### Step by step instructions:

#### HTML

An address book is proper tabular data, so we are going to use a table element to display it. [Review HTML tables first](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).

* First to represent the data coming from the database, we are going to generate random data to fill the table:

  1. Go to <http://www.generatedata.com/>
  1. Fill in the four fields, choose any data type you like but at least include a column of the "Name" type.
  1. For the name column you have to specify the format. In the text field next to it, type `FemaleName Surname|MaleName Surname`.
  1. Down in "**Export types**" click on the HTML tab and data format **<table>**.
  1. Check the "**Generate in page**" radio button and click on **Generate**.
  1. You can't change how many rows it generates, so it will generate 100 rows. Copy just the first 5 or 10 rows.
  1. Remember to close the table with `</table>` if it is not closed already. And remove the `cellpadding="1" cellspacing="1"`.

* Wrap the headers row in a `thead` and the rest of the rows in a `tbody`.

* Use a pair label/input to ask for the name of the contact to be deleted.

* Download the [deletion image here](address-book-solution/images/delete.svg).

* Add an element to display errors, for example, when the user asks to delete a contact that doesn't exist.


#### CSS

* We are going to use `normalize.css` from a CDN. CDN stands for "_Content Delivery Network_". It's recommended to serve resources from a CDN. If everyone does that, chances are that you have requested a page that used the source from the CDN, which means you have already downloaded it and your browser has cached it, which makes requests to other pages faster. Also, CDNs are optimized to be fast too. [Learn more about CDNs here](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/).

```markup
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css">
```

When you start a new project, you can check with the library website what is the last version available, and update your link if there is an update.

* The font is our old friend Monserrat, from Google Fonts, weights 500 and 800.

* The colors are #f2f2f2 for the background, a linear gradient to bottom right corner (#e6e9e8, #dddfe1), #dedfe2 for the input background, #4b505c for text, #a7b2c5 for the explanation below the label and for links and #fb4633 for the error text.

* The paint image is a background image for the title. [Use the `background` shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/background) to place the image [and `background-size` to fill the element](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size). Download the [image here](address-book-solution/images/paint.svg).


#### JS

* As you can see, there is no button to click after we have entered the contact name. We are going to explore other ways we can use `addEventListener()`. Instead of listening for clicks on a button, we are going to [listen to the Enter key being pressed](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event). We are also going to use the `event` placeholder argument of the function we pass to `addEventListener()` to get the code of the key pressed. If the `code` is `'Enter'`, we proceed.

* If we want to do things to the cells, do we need to call `getElementById()` for every cell? No way, that would be pretty tedious. The table API has some nice methods for this. We just need to use it to get the table, and then we can get the HTML elements that represent the cells very easily:

  * We can get [the rows in a table using `TABLE_ELEMENT.rows`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)

  * We can get the cells in a row using `ROW_ELEMENT.cells`. Although no documentation has been created yet for it, it is [supported in all major browsers according to Can I use](https://caniuse.com/#feat=mdn-api_htmltablerowelement_cells).

* The rows in a table sound already like an array. What's more, the cells in a row also sound like an array. We can even do `TABLE_ELEMENT.rows[0]` to get the first row of the table, or `row.cells[0]` to get the first cell of that row. However, these methods don't return an array. They return an `HTMLCollection`. HTML collections don't have iterator methods, that is only for arrays. But we can easily [convert to an array from an HTML collection using `Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from):

```js
let table = document.getElementById('table-id');

table.rows.forEach(...);
// throws an error :(

Array.from(table.rows).forEach( ... );
// works! :)
```

* At all times work with the rows in the `tbody` element. The headers don't change, and the `tbody` element has the same methods as a `table` element to get rows and cells.

* To find the contact to delete, use an iterator that can loop through all rows, and return the row that has a **name cell** with a `textContent` equal to the name entered by the user.

* What can you use to [delete the row](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)?

* If the contact does not exist, display an error message. What does the iterator return if no row was found that matched the criteria?

* As an extra challenge, refactor the code to separate the logic that has to do with the user interface (reading input, writing output, manipulating the DOM) from the logic that actually does the job (deletion logic). This is useful to keep in mind as it applies to all programming languages.

#### GIT

Work in a new project, in a separate branch to master. When the branch is ready create a pull request and ping me to review.

#### DEBUGGING

Use `console.log()` as usual.
