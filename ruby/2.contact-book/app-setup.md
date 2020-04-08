---
layout: default
title: Contact Book - Set Up
---

**Challenge:** We are going to build a contact book as a CLI app. The contacts will be stored in an array and will be lost when the application is closed.


### Step by step instructions

We are going to create a contact book that runs in the terminal. When we run the app, it will print a menu with options, then it will read the option written by the user and call the right action.

#### Main user interface

* It prints this menu, where `_` represents where the user prompt is. Please respect empty lines and spaces, ignore text color:

```plaintext
---------------------
  CONTACT BOOK
---------------------

  1) Exit the program

  Choose a menu option: _
```

* it clears the screen before printing the menu (to clear the screen, just write `"\033[H\033[2J"` to the output stream. Observe the double quotes)

* it reads an input from the user

* it validates the input. If the input is not a number, or is a number other than one, the input is invalid

* if the input is invalid it prints this in a new line and reads the input again. It keeps printing this until the input entered is valid:

```plaintext
Wrong input. Please try again: _
```

* If the input is valid, it returns it.

**Instructions:**

* Isolate all strings from the logic using constants

* require the user interface in your `bin/app` file, instantiate it and call the relevant methods

* run the app and make sure that the behaviour is expected


#### Controller

Create a controller class that will be the layer in between your user interface and the actions to perform.

* it tells the user interface to print the menu

* it receives the input from the user interface

* it selects the right action to perform according to the input (Exit in this case)

* it runs the action


**Instructions:**

* Use dependency injection to inject the user interface as a collaborator

* Pass the possible actions to the controller as an array in the constructor. For the exit action [use the null object pattern](https://www.youtube.com/watch?v=9lv2lBq6x4A) and pass a `NullAction`, which does nothing.

* Update the `bin/app` file to require the controller, instantiate it and run the relevant methods

* Run the app and check it behaves as expected
