---
layout: default
title: Rock, Paper, Scissors - Part 4
---

Up until now you have been uploading your files to a Github repository, but looking at the page in your browser.

Usually, in web development, people buy a domain, upload the files of their site to a server, and then configure the server so that when anyone goes to that domain in their browser, the server serves that website.

You can go into the rabbit hole of finding free hosing and free domains. However, there is a better solution.

GitHub itself has something called GitHub pages, which allows you to serve your site from your repository, without any maintenance. This is cool because you can both version control and serve your site at the same time, just from your repository.

We are going to use **GitHub pages** to serve this site for free. These are the steps to follow:

* For the GitHub magic to work, you need to tell GitHub to use your master branch as the source for the site. In your repository, click on **Settings**, scroll down to "**Github Pages**", and in "**Source**" select your **master** branch.

* Rename your html file to "**index.html**", this is because all servers in the world look for a file called "index" to serve the website, and GitHub is not an exception.

```git
git mv YOUR_FILE.html index.html
git commit
git push origin master
```

* Now you have your site officially "hosted" by GitHub. We just need the domain. By default, GitHub serves user pages from `USERNAME.github.io/PROJECT_NAME`, so after doing the previous steps, your page should magically load when you go there.

You have successfully hosted your rock paper scissors project in GitHub and can now share it around and ask friends to play!
