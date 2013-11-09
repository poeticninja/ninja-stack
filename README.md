Ninja Stack
===========

## The Goal:
Setup a front-end and server side framework that is not too opinionated on work flow. It gives you some of the best practices with out getting in the way with how you want to do things. Well commented for new people to learn how it works and why.

CSS preprocessor is a preference and should be chosen by the person using the stack. If you want a different Template engine it should be as easy as changing the template files and a couple line of code. People should be free to choose their workflow.

## The Stack and Why:
**Node.js** - Because it's fast, easy to get started, and Javscript is awesome. Much love here. :)
[http://nodejs.org/](http://nodejs.org/)

**Express** - It has the biggest community and documentation out there for a server framework on Node.js. Great for anyone getting started.
[http://expressjs.com/](http://expressjs.com/)

**Swig** - It looks like HTML, it's very fast, great for template inheritance, and allows you to use HTML syntax with the server and with front-end client Javascript includes.
[http://paularmstrong.github.io/swig/](http://paularmstrong.github.io/swig/docs/#browser)

**AngularJS** - A front-end Javascript framework that adds great power to the front-end.
[http://angularjs.org/](http://angularjs.org/)

**CSS Framework** - None. Choose your own CSS preprocessor and CSS framework. Good options for a CSS framework are Zurb's Foundation or Twitter's Bootstrap 3. I personally use Foundation, Sass, and Compass for my CSS.

### Requirements:
Install Node.js by using the big install button on the [http://nodejs.org/](http://nodejs.org/) homepage.

After Node.js is installed clone this repo. Go into the cloned directory and run:
```
$ npm install
```

Start the server by running the command:
```
$ node server
```

To see any changes you can manually just shutdown and restart the node server. This can be a pain so I use Supervisor to watch for file changes and restart the server [https://github.com/isaacs/node-supervisor](https://github.com/isaacs/node-supervisor).

To install run:
```
$ npm install -g supervisor
```

To use it run:
```
$ supervisor -e html,js  server
```
Now all of your server html and js files are being watched and on change the node server gets restarted automatically.

### Folder Structure
There are two main folders in the stack. The "**public**" folder for front-end (client side) code, and "**server**" folder for server side code.

By having the front-end folder and server side folder be specific, it provides for better consistancy when changing projects. This way when you change from a full front-end app (Phonegap), to a front-end and server side app you get to keep the same folder structure. Allowing for better consistency with your stack, projects, and tools.

This project is just getting started and will be moving very fast in a short amount of time.

## Authors

[Saul Maddox](https://github.com/poeticninja),
You?


## Contribute

If you wish to contribute please make sure your code is well commented and easy to read.


## TO DO's
- Work on todo wish list. :)

## To Do Wish List
- Setup Sessions with connect-redis or connect-mongo
- Setup user login authentication pages
- Setup Mongoose ORM Basic Models
- Setup user models
- Setup social logins

## Credits
Credit goes to all of the source code, tutorials, and blogs that people have made available.

#### License

The MIT License (MIT)

Copyright (c) 2013 Saul Maddox

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
