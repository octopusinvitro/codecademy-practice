---
layout: default
title: Contact Book - File database
---

**Challenge:** Until now we have been saving contacts in an array, but that means that when we exit the app, the data is lost. So now we are going to persist the data in a JSON file.

First, familiarize with the JSON format and the File class in Ruby.

### JSON

Check the [Ruby docs for JSON here](https://ruby-doc.org/stdlib-2.7.0/libdoc/json/rdoc/JSON.html).

JSON is a file format consisting of keys and values, which can be strings, numbers, booleans or other JSON objects. It is also a file extension: `.json`. **JSON is saved as a string**.

Its structure is very similar to a hash, and in Ruby **you can easily switch from a hash object to a JSON string and viceversa**. It's a format often used by APIs to return their data.

This is what JSON looks like if you open a `.json` file (observe the double quotes):

```js
[
  {
    "name": "Matt Damon"
    "address": "Some address"
    "phone": "12345678901"
    "email": "matt@damon.com"
    "notes": "I think he has an Oscar"
  },
  {
    "name": "Another name",
    // etc.
  }
]
```
Here is [a video about JSON](https://www.youtube.com/watch?v=GpOO5iKzOmY).

### File

Check [the Ruby docs for File here](https://ruby-doc.org/core-2.7.0/File.html).

File is the Ruby class that allows us to read from and write to files.

Like the terminal, **File handles input and output streams of binary data**, and it also shares methods with the `IO` and `StringIO` classes.

However the difference is that we have to give File **a path** where our stream is (the path to the file), and once we `write` to it, we have to **close the stream** or **flush it** with `flush`. We don't do any of this for terminal streams.

We can also `rewind` files, or we can `truncate` them to wipe their contents. They can be created with [a lot of different modes that are described in the `IO` class](https://ruby-doc.org/core-2.7.2/IO.html#method-c-new).

**Instructions:**

* Play with the Ruby JSON library in pry. Go through the examples in the docs and try them yourself. Check all the things you can do with it. Convert from JSON to hash and viceversa.

* Do the same with the Ruby File class. Try all the methods mentioned, create files with different modes and see what you can and can not do to them.


### Step by step instructions


#### List contacts

Create a database class that represents your persistence layer, i.e., it encapsulates the manipulation and operations on your application's data, isolating the application from these type of changes.

It will be in charge of creating, updating, deleting and searching for contacts.

This class will have exactly the same methods as the array database class, with the same names and the same behaviour, just it will read and write to a file, rather than store an array. For now, it will just read a list of contacts form a JSON file. So it is going to be called `FileDatabase`.

* The class is initialized with an instance of the File class that we can both read and write to. However for this ticket, we only need a file that we can **read**. What mode would you use?

* Add an `all` method that reads contacts in JSON from a file and parses the JSON into an array of hashes. The hashes should have symbol keys.

* We always read from the beginning of the file, which means we have to rewind the file before reading, in case we had read it before (reading moves the file cursor to the end of the file).

* Add a `database_empty?` method that will return true if the database is empty and false if not.

**Tests:**

* The class can be tested passing a `StringIO` object as we did for the user interface.


**Create contacts:**

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

* The contact hash is always appended at the end of the other contacts.

* The file needs to be able to be written to. Which mode would you use?

* Even though we work with an array of hashes, we write JSON to the file.

* We always wipe out the file and write the full contents to it.

* After we replace the contents of the file, we need to flush.

* Create a `count` method that returns the size of the array.


**Rest of methods:**

* Add a method called `contact_at(index)` which takes an index as an argument and returns the contact in that index.

* Add an `update(index, new_data)` method that takes an index and a field/value pair as arguments, and updates the contact in that index with the data in the field/value pair.

* Create a method `delete(index)` that takes an index as an argument and deletes a contact from the contacts list.


#### Swap array database with file database

Swap the array database with the file database in each of the actions, one at a time. You can do one action class per commit.

When you swap one database with the other, you still have to make sure that all the actions behave in the same way no matter which database you pass in.

In order to ensure that, we use RSpec "**Shared Examples**", which is a feature that allows us to test exactly that.

To use shared examples, you just have to slightly modify your actual action tests, so that you test the action with each database and they share the same tests. For example, for the Creator:


```ruby
RSpec.shared_examples 'a Creator' do |database_class, argument|
  describe '#run' do
    let(:database) { argument ? database_class.new(argument) : database_class.new }
    let(:creator) { Creator.new(ui, database) }
    # rest of lets

    after do
      # Make sure to delete the contents of the test file
      # created with `TempFile.new` after every test
    end

    # all the tests
  end
end

RSpec.describe 'With Array Database' do
  it_behaves_like 'a Creator', [ArrayDatabase, nil]
end
```

First do that change and check that everything works. This should print:

```plaintext
With Array Database
  behaves like a Creator
    #run
      ALL YOUR TESTS HERE
```

Then you can add the describe for the other database:

```ruby
RSpec.describe 'With File Database' do
  it_behaves_like 'a Creator', [FileDatabase, Tempfile.new('TEST_FILE')]
end
```

After adding the last describe, your tests should still be green! if not, you should update the code so that the action behaves in the same way with any of the two databases.

When all actions are green, update the `bin/app` file to pass the file database to all actions.

Run the code. It should behave in the same way as with the array database.

Check the [shared examples docs page](https://relishapp.com/rspec/rspec-core/docs/example-groups/shared-examples).


#### Define an interface for all database classes

The conversation between objects takes place using their **interfaces**. Classes implement methods, some of those methods are intended to be used by others and these methods make up its public interface. **You are always supposed to code to an interface**, to an API (Application Programming Interface).

Because we want to be able to swap our database classes without our code breaking, we have to **enforce a common public API for all the database classes**, so that future databases also comply with the API. We are going to define the interface that all database classes must follow in order to be used by other classes in this application.

To define the interface of a database class we will use **inheritance**. There are very few cases in software development when it makes sense to use inheritance. This is one of them.

**When to use inheritance:**

You would use inheritance in the very few cases when all of these apply:

* you have some classes (array database, file database) that are a specialization of a more generic concept (a database)

* no code is shared or duplicated between the specialized classes, but you need to enforce the same public interface for all (i.e. they have the same methods, but the implementation details of those methods are different)

* in the same spirit, all of the code in a parent class should apply to every class that inherits from it. Parent classes should not contain code that applies to some, but not all, child classes. If we define four methods in the parent class, then all child classes should have their own specific implementation of each of these four methods.

* all child classes have just one parent. Ruby already enforces this for us (you can not inherit from two classes). This is called shallow hierarchy.

* the number of child classes is small. This is called narrow inheritance.

**Intructions:**

* Create a `DatabaseInterface` class with the methods you want to enforce in all database classes

* Because this is an abstract-interface parent-class, we are not supposed to create objects out of it. We are only supposed to create classes that inherit from it.

* To ensure no instances are created from the abstract parent class, all the methods that define the interface and are supposed to be specialized by the child classes should raise a `NotImplementedError`.

```ruby
def method_name
  raise NotImplementedError
end
```

* Make the child classes inherit from the parent class

```ruby
class ChildClass < ParentClass
  #...
end  
```

Define an interface for all database classes

**To expand further:**

* Learn about [the Liskov Substitution principle](https://www.youtube.com/watch?v=Mmy1EUKC_iE), one of the SOLID principles (responsible for the L in SOLID)

* Listen to [Barbara Liskov herself talking about the Liskov substitution principle](https://www.youtube.com/watch?v=-Z-17h3jG0A)
