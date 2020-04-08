Did you know you can find out exactly who's in space right now? The Open Notify API provides that information. Visit <http://api.open-notify.org/> to see not only how many people are currently in space, but also their names and which spacecraft they are on.

Create a dashboard to show real time information from space. Pull in this data and display the information from this API in a tabular format. Read the data directly from the API and parse the results each time the page is loaded and refresh the results every 5 seconds.

Next to the table, display a map of Earth showing the position of the ISS in real time.

Example:

```plaintext
Astronauts

There are 4 people in space right now:

Name            | Craft
------------------------
Mae Jemison     | ISS
Sunita Williams | ISS
Christina Koch  | ISS
Jessica Meir    | ISS

ISS

* Map with ISS *
```







HTML

progressive enhancement: text and table contain text, in case js is off

JS

read the docs, there are 3 endpoints, which one is the best? what do you see when you load this endpoints in a browser? what kind of data do they return? Identify what is the data you need for your project?

play with the api

Client

spies, fixtures, no requests

https://github.com/jasmine/jasmine-ajax

https://jasmine.github.io/tutorials/mocking_ajax
