---
layout: default
title: Installation
---


### How to install the environment

When working with a programming language, we often will have to install a couple of things on top of the language:

* Library version managers
* Interactive prompts
* Debuggers
* Test frameworks
* Linters


### Library version manager

When you work with several Ruby projects, they may all use similar libraries, but in different versions. Whenever we deal with different versions of something, we need a version manager. The library version manager in Ruby is **bundler**. It's open source and [can be found in GitHub](https://github.com/rubygems/bundler).

Bundler is a tool that allows us to install multiple versions of a **gem**, which is how Ruby libraries are called. It then sandboxes each project so that its gem dependencies don't conflict with other projects.

Bundler is a gem itself. A gem that installs gems. We install gems using the `gem` command. Hence, to install bundler, type:

```bash
gem install bundler
rbenv rehash
```

You'll need to install bundler for each version of Ruby you install.

#### Installing gems

The gems that a Ruby project needs to work are manually specified in a file called `Gemfile`, together with their version. To install them, we could manually go gem by gem and type `gem install GEM`, but that is tedious, and you would need to handle version conflicts yourself. Instead, to install the gems in a Gemfile, we type:

```bash
bundle install
```

Bundler will examine your Gemfile and install all of the listed dependencies, creating a file called `Gemfile.lock` with all the gems that were installed and their versions. This is because some gems may depend on other gems as well which will need to be installed too. This file and the `Gemfile` should both be added to git.

Once you do this, you have to run all your Ruby commands starting with:

```bash
bundle exec RUBY_COMMAND
```

so that bundler can choose the right gem versions to use by looking at the `Gemfile.lock` generated during gem installation.

### Interactive prompts

Interactive prompts run in the terminal and allow you to run Ruby commands. They are like the Console tab of your browser, which lets you run JavaScript commands.

Ruby comes with its own interactive prompt called **irb**. To run it you just have to type `irb` on a terminal. To exit just press <kbd>Ctrl</kbd> + <kbd>D</kbd>.

However [pry is a better prompt](http://pry.github.io/), but you have to manually install it with `gem install pry`. You can also add the pry gem to the Gemfile of your project and tell bundler to install it for you with `bundle install`. Once installed, we can run it typing `pry` on a terminal (or `bundle exec pry` if we are inside a project).


### Debuggers

The most used debugger in Ruby is pry (again). You can type `binding.pry` at the point in your code where you need to debug, much like `console.log()`, and when you run the code or the tests, it will open an interactive prompt where you can type commands.

It is recommended to get yourself familiar with pry and it's commands.

### Test frameworks

Ruby comes with a test framework out of the box. It's called [Minitest](https://github.com/seattlerb/minitest). However, the most used test framework in Ruby is [RSpec](https://rspec.info/), by far. It's so popular that other test frameworks, like Jasmine, are inspired on it.

RSpec has its own guidelines or best practices that you should follow when writing tests. [You can find those guidelines here](http://www.betterspecs.org/), and it's recommended to get familiar with them.

RSpec allows you to run a specific test file, and also a specific test in a test file, by specifying the line number where the test starts.

### Linters

The most used linter in Ruby is [rubocop](https://rubocop.org/). It also defines [a styleguide](https://github.com/rubocop-hq/ruby-style-guide) or best practices that you should follow when writing Ruby code. There are plugins for most text editors so that rubocop can be checking your code as you type.

In the root of your project, you would usually have a `.rubocop.yml` file with configuration for the linter.
