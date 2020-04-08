---
layout: default
title: Contact Book - Array database
---

**Challenge:** We are going to build a contact book as a CLI app. The contacts will be stored in an array and will be lost when the application is closed.


### Step by step instructions


#### UI

**Create contacts:**

Update the UI so that it can ask questions about contacts.

Contact field: `name`  
Prompt: `Contact name:`

Contact field: `address`  
Prompt: `Contact address:`

Contact field: `phone`  
Prompt: `Contact phone:`

Contact field: `email`  
Prompt: `Contact email:`

Contact field: `notes`  
Prompt: `Contact notes:`

* Add a method `ask_for_fields` that asks for each contact field and returns a hash. Example:

```ruby
{
  name: 'Matt Damon',
  address: 'Some address',
  phone: '1234567',
  email: 'matt@damon.com',
  notes: 'I think he has an Oscar'
}
```

* you can create another hash to map the question to ask for every field, and loop through it. For example:

```ruby
FIELDS_TO_PROMPTS = {
  name: NAME_PROMPT,
  address: ADDRESS_PROMPT,
  # etc.
}
```

* Once all fields have been obtained, the method returns the hash it has built.

* As with the menu, it will ask for the field until it's valid.

* The field validation rules apply to phone and email only, and every other field will always be valid:
  * the phone has to be 11 characters long and contain numbers only
  * the email has to contain the `@` symbol

* You could again create a hash with the contact fields as keys, and the values will be the result of calling validation methods on the input

* Create a `display` method in the UI that takes a `contact` as an argument and prints it to the terminal.

* The contact is provided as a hash, for example:

```ruby
{
  name: 'Matt Damon',
  address: 'Some address',
  phone: '1234567',
  email: 'matt@damon.com',
  notes: 'I think he has an Oscar'
}
```

* It should print it in the following format `Field display name: data`. It also calculates the longer field display name and adjusts the data to be aligned:

```plaintext
Name:    Matt Damon
Address: Some address
Phone:   1234567
Email:   matt@damon.com
Notes:   I think he has an Oscar
```

* The field name and the field display name are two different concepts. Create a hash in the UI to map field name to field display name.

* Update the UI to add a boolean method `add_another_contact?` that prints a question asking the user if they want to add another contact:

```plaintext
Add another contact? (y/n): _
```

The `_` indicates where the user prompt is.

The user can reply `y` or `n`.

If the user replies `y`, the method returns `true`, if not, it returns `false`.


**Tests:**

Suggestion: build the method one contact field at a time.

* it asks for all fields (happy path)

* it gets valid phone

* it gets valid email

**List contacts:**

Extract a validator class out of the user interface, moving all the boolean `valid_X?` methods to it.

* Add a method `display_no_contacts_message` that prints `No contacts were found.`

* Also add a method `display_letter_header(letter)` that takes a letter with any casing and prints a header.
For example, if passed `a` it will print:

```plaintext
------------------------------
              A
------------------------------
```

* Finally, modify the method that displays a contact to print an empty line at the end.

**Search contacts:**

* Create a method `search_term` to ask the user for a search term. It prints this to the terminal :

```plaintext
Type search term: _
```

(`_` is where the user prompt goes).
It returns the search term typed by the user.

* Create a boolean method `search_again?` to ask the user to search for another contact. It prints this to the terminal:

```plaintext
Search again? (y/n): _
```

(`_` is where the user prompt goes).
It returns `true` if the user wants to search for another contact and `false` if not.

**Update contacts:**

Update the User Interface with the following four methods:

_1. Choose contact_

Create a **public** method `choose_contact(contacts)` which takes an array of contacts as an argument and returns a contact index. It uses the following methods:

* Create a **private** method `display_all_with_index(contacts)` which takes an array of contacts and displays them with their index in the array. It should print each field in the following format: `Field display name: data`. It also calculates the longer field display name and adjusts the values to be aligned. Check if there is similar behaviour in an existing user interface method.

Example:

```plaintext
[0]
Name:    Matt Damon
Address: Some address
Phone:   12345678901
Email:   matt@damon.com
Notes:   I think he has an Oscar

[1]
Name:    Another Contact
Address: Another address
Phone:   12345678901
Email:   another@contact.com
Notes:   Just another contact
```

* Create a **private** method `contact_index(size)` that takes the size of an array of contacts as an argument and returns a contact index. It asks the user for a contact index and returns a valid contact index. It keeps asking the user until they enter a valid index.

_2. Edit field_

* Create a method called `edit_field(contact)` which takes a contact as an argument and returns a hash `{field: value}`. It first displays the contact, then asks for a field to update until the user enters a valid field. Once it gets the field, it asks the user for the new value for that field. If asks for the value until the user enters a valid value. Check if there is a similar behaviour in an existing user interface method and refactor to avoid repetition.

_3. Update another field_

* Create a boolean method `update_another_field?` that returns true if the user wants to update another field and false if they don't.

_4. Update another contact_

* Create a boolean method `update_another_contact?` that returns true if the user wants to update another contact and false if they don't.


**Delete contacts:**

* Add a boolean method `delete?(contact)` that takes a contact as an argument and returns true if the user wants to delete the contact and false if they don't. It displays the contact before prompting for an answer.

* Add a method `display_deletion_message` that takes no arguments and prints `Contact was deleted`.

* Add a boolean method `delete_another_contact?` that takes no arguments and returns true if the user wants to delete another user and false if they don't.


#### Database

Create a database class that represents your persistence layer, i.e., it encapsulates the manipulation and operations on your application's data, isolating the application from these type of changes.

It will be in charge of creating, updating, deleting and searching for contacts.

For now, it will just create contacts and save them in an array. So it is going to be called `ArrayDatabase`.

**Create contacts:**

* The class is initialized with an `@all` array that is empty and publicly readable but not publicly writable.

* Add a `create` method that takes a `contact` as an argument. The contact is provided as a hash. For example:

```ruby
{
  name: 'Matt Damon',
  address: 'Some address',
  phone: '1234567',
  email: 'matt@damon.com',
  notes: 'I think he has an Oscar'
}
```

* The contact hash is then added as an item to the `all` array.

* Create a `count` method that returns the size of the array.

**List contacts:**

Add a boolean method to the database class called `any?` that checks if there are any contacts in the database.

**Search contacts:**

Add a `search` method to the database that takes a search term as an argument. It searches for the term in any of the fields of a contact, for every contact in the database. For example:

Suppose we have these contacts in the database:

```ruby
contacts = [
  {
    name: 'Matt Damon',
    address: 'Some address',
    phone: '1234567',
    email: 'matt@damon.com',
    notes: 'I think he has an Oscar'
  },
  {
    name: 'Oscar Wilde',
    address: 'Paris',
    phone: '00000000000',
    email: 'oscar@wilde.com',
    notes: 'I think he has an Oscar'
  },
  {
  #  another contact
  }
  ...
]
```

Calling:

```ruby
database.search('Oscar')
```

Returns a list of all the findings:

```ruby
[
  {
    name: 'Matt Damon',
    address: 'Some address',
    phone: '1234567',
    email: 'matt@damon.com',
    notes: 'I think he has an Oscar'
  },
  {
    name: 'Oscar Wilde',
    address: 'Paris',
    phone: '00000000000',
    email: 'oscar@wilde.com',
    notes: 'I think he has an Oscar'
  }
]
```

**Update contacts:**

* Add a method called `contact_at(index)` which takes an index as an argument and returns the contact in that index of the array.

* Add an `update(index, new_data)` method that takes the index of a contact in an array and a field/value pair, and updates the contact in that index with the data in the field/value pair.


**Delete contacts:**

Create a method `delete(index)` that takes an array index and deletes a contact from the contacts array.


#### Creator action

Add a `Creator` class that is in charge of orchestrating the logic to create a contact.

It takes a user interface and a database as arguments in the constructor.

The creator class is a **Command Object:** a class that has just one method, a **command method** (`run`) that performs the creation operation. This operation has the following steps:

* It tells the UI to ask for contact details

* It tells the database to add the contact returned by the UI

* It tells the user interface to display the contact that was added

* It tells the user interface to ask the user if they want to add another contact

* If the user wants to add another contact it repeats the previous steps

* if not, it finishes and returns control to the caller.

#### Pager action

Add a Pager class that is in charge of orchestrating the logic to list all contacts.

It takes a user interface and a database as arguments in the constructor.

The Pager class is a **Command Object**: a class that has just one method, a **command** method (`run`) that performs the listing operation.

It works like this:

* If the database is empty, it prints an informative message to the user. If not, it proceeds with the listing.

* It will first sort the contacts by name alphabetically in ascendant order (A to Z), if two people have the same name it will sort them by email.

* The pager then checks the first letter of the first contact, and prints a header with the letter, then prints the contact. It keeps checking the first letter of every contact. If it changes, it prints another header with the new letter.


#### Finder action

Add a Finder class that is in charge of orchestrating the logic to search for contacts matching a search term.

It takes a user interface and a database as arguments in the constructor.

The Finder class is a **Command Object**: a class that has just one method, a **command** method (`run`) that performs the listing operation.

It works like this:

* first it asks the user for a search term

* then passes that search term to the database to retrieve a list of contacts

* if no contacts were found, it prints a message informing the user that no contacts were found

* if any contacts were found, it lists them

* it keeps asking the user if they want to search for  another contact, until the user doesn't want to search more.

#### Updater action

Add an Updater class that is in charge of orchestrating the logic to update one or several fields in one or several contacts.

It takes a user interface and a database as arguments in the constructor.

The Updater class is a **Command Object**: a class that has just one method, a **command** method (`run`) that performs the updating operation.

It works like this:

* First its asks the user for a contact to update.

* Then it asks the user for information on which field to update with which value, and updates the contact with the new data.

* Then it displays the contact with the data updated and asks the user if they want to update another field.

* Once the user is done updating this contact, it asks if they want to update another contact.


#### Terminator action

Add a Terminator class that is in charge of orchestrating the logic to delete one or several contacts.

It takes a user interface and a database as arguments in the constructor.

The Terminator class is a **Command Object**: a class that has just one method, a **command** method (`run`) that performs the updating operation.

It works like this:

* First its asks the user for a contact to delete.

* Then it prints the contact and asks if they want to delete that contact

* If they don't, it exits, if they do, the contact is removed from the database

* It prints a confirmation that the contact was removed

* Finally, it asks the user if they want to delete another contact.


#### bin/app

**Create contacts:**

* Update the UI to add an option to the menu to add contacts. The menu now looks like this:

```plaintext
---------------------
    CONTACT BOOK
---------------------

1) Add contact
2) Exit the program

Choose a menu option:
```

* Update controller to print the menu after an action was run, unless the option is to exit the program

* Update the array of actions in `bin/app` to include the `Creator` class.


**List contacts:**

* Update the UI to add an option to the menu to list contacts. The menu now looks like this:

```plaintext
---------------------
    CONTACT BOOK
---------------------

1) List contacts
2) Add contact
3) Exit the program

Choose a menu option:
```

* Update the array of actions in `bin/app` to include the `Pager` class in the right position of the array.


**Search contacts:**

* Update the UI to add an option to the menu to search for contacts. The menu now looks like this:

```plaintext
---------------------
    CONTACT BOOK
---------------------

1) List contacts
2) Add contact
3) Search contact
4) Exit the program

Choose a menu option: _
```

* Update the array of actions in bin/app to include the Finder class in the right position of the array.


**Update contacts:**

* Update the UI to add an option to the menu to update contacts. The menu now looks like this:

```plaintext
---------------------
    CONTACT BOOK
---------------------

1) List contacts
2) Add contact
3) Search contact
4) Update contact
5) Exit the program

Choose a menu option: _
```

* Update the array of actions in bin/app to include the Updater class in the right position of the array.


**Delete contacts:**

* Update the UI to add an option to the menu to delete a contact. The menu now looks like this:

```plaintext
---------------------
    CONTACT BOOK
---------------------

1) List contacts
2) Add contact
3) Search contact
4) Update contact
5) Delete contact
6) Exit the program

Choose a menu option: _
```

* Update the array of actions in bin/app to include the Terminator class in the right position of the array.
