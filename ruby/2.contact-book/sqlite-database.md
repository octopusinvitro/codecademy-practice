---
layout: default
title: Contact Book - SQLite database
---

Data saved in a database is persisted permanently, so you won't lose it when the application is stopped. In databases, data is organized in tables. Each table can have several columns, and each row is a different record.

SQL is a query language that allows us to do database operations like create, read, update, or delete records (also called CRUD operations).

In order to plug a SQL database to our app we are going to use the **SQLite ruby gem**.


### Familiarize with the gem

[As the README says](https://github.com/sparklemotion/sqlite3-ruby#description-), you need to have the SQLite3 database installed in your system. SQLite is a very light implementation of a SQL database that usually comes pre-installed in Linux. If you don't have it, you can always install it with:

```sh
sudo apt install sqlite3
```

After you do that you can install the gem by adding it to your Gemfile.

* Familiarize yourself with **SQL** with [this Codecademy SQL course](https://www.codecademy.com/learn/learn-sql).

* Familiarize yourself with **the CLI version of the app**. [You can watch this video](https://www.youtube.com/watch?v=dFzJ4UPNL1w) and play with the SQLIte commands as you watch it. You can learn more about the SQLite CLI app including other useful commands in [this tutorial](https://www.tutorialspoint.com/sqlite/sqlite_commands.htm).  

* Familiarize yourself with **the SQLite ruby gem**, [using this post ](https://www.devdungeon.com/content/ruby-sqlite-tutorial#toc-14)that shows you how to do basic things with it. Play with it on pry, and experiment by yourself. Most of the time, you will be doing someting like `sqlite.execute(sql)`, where `sqlite` is a reference to the library and `sql` is a SQL statement.


**Testing:**

The SQLite gem also has a very interesting feature where you can use **an in-memory database** for tests, meaning you don't need to maintain a test database as well as a production database, but rather you can create a database on the fly that will stay in memory until the tests are finished, and then will vanish.

This is cool also because the tests run much faster with an in-memory database. And you always want your tests to run fast.

You can tell the Sqlite gem to use an in memory database with:

```ruby
SQLite3::Database.new(':memory:')
```

### Step by step instructions

#### Database

**List contacts:**

Create a database class that represents your persistence layer, i.e., it encapsulates the manipulation and operations on your application's data, isolating the application from these type of changes.

It will be in charge of creating, updating, deleting and searching for contacts.

This class will have exactly the same methods as the array and file classes, with the same names and the same behaviour, just it will read and write to a SQLite database, rather than an array or a file. It is going to be called `SQLiteDatabase`. To ensure it conforms to this application's database interface, it's going to inherit from the `DatabaseInterface`.

* The class is initialized with an instance of the SQLite class, which takes as an argument the name of the database file where our data will be saved. For example, if we wanted to save our database file in the root directory of our application, with a name of `contacts.db`, we would use:

```ruby
require 'sqlite3'
sqlite = SQLite3::Database.new('contacts.db')
```

* If the contacts table does not exist in the `contacts.db` database, we create it. If it exists already, we use it. How do we do this in SQL? How many columns would this table have? What is the data type of each column? Which column would be the primary key?

* Add the `all` and `database_empty?` methods with the same behaviour as they had in the array and file databases. How do you make SQLite return an array of hashes as we have been returning?

* Replace the database you pass to the listing action with the SQL database. Do you have to update anything?

**Tests:**

The class can be tested by passing an in-memory database:

```ruby
SQLite3::Database.new(':memory:')
```

#### Add the rest of methods and swap with the file database

Add the rest of the interface to the SQL database.

Check that all actions behave correctly when plugging this database in.

When all actions tests are green, update the `bin/app` file to pass the SQL database to every action.

Run the code. It should behave in the same way as with the array or file databases.
