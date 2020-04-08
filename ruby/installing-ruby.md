---
layout: default
title: Installation
---

### How to install Ruby

When you work with a Ruby project, it may be using any version of Ruby. You may even work in several Ruby projects who are all using different versions of Ruby. For this, Ruby version managers where created, so that you can easily switch from one version to another.

We will use a Ruby version manager called `rbenv`, which is open-source and both the code and [the documentation can be found in GitHub](https://github.com/rbenv/rbenv#readme). In order to install `rbenv` and Ruby, follow this guide:

* Make sure you have the right libraries installed in your system:

```bash
sudo apt install -y libssl-dev zlib1g-dev libreadline-dev
```

* git clone the `rbenv` repository and the `ruby-build` repository and configure your `.bashrc` file:


```bash
git clone git://github.com/sstephenson/rbenv.git ~/.rbenv
git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL -l
```

* After this, `rbenv` and `ruby-build` are installed, and you can keep them up to date just by doing a git pull.

* You can now install a Ruby version. You can list the available Ruby versions and choose one to install:

```bash
rbenv install --list
# lists all available Ruby versions
rbenv install 2.7.0
# Install a version, will take some time
rbenv rehash
```

* Now you can set a global Ruby version for your system, and a local Ruby version for each of your projects:

```bash
rbenv global 2.7.0
# Sets version 2.7.0 as default Ruby version
rbenv local 2.7.1
# Sets version 2.7.1 as THIS project's Ruby version
```

* Configure your gems installation. Create a file called `.gemrc` (starts with a dot) in your home directory with the following contents:

```yml
install: --no-ri --no-rdoc
update:  --no-ri --no-rdoc
```


This is how you install Ruby. Through a Ruby version manager. Now we have `rbenv` installed under `~/.rbenv/` and our rubies under `~/.rbenv/versions/`.
