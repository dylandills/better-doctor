# Better Doctor API

#### An application in which users submit a form and receive a list of doctors nearby who can treat their medical issue. Utilizes node.js, moment, and API's  6/30/17

#### By **Dylan Dills**

##Description

Feeling meh? Don't want to have to call up your insurance and go through the long hold times, just to find a doctor for your cold? Better Doctor API is for you. In this application, you are able to find a doctor within the Portland, Or metropolitan area, that can cater to every sneeze, stomach woes, or ache. Then, you'll see their name, their phone number, and if they are accepting new patients at this time. Just type in the symptom and see what you find.


## Configuration/dependencies
  * Install the following packages:

    * Node Packages
      * The following were implemented for use in our Development Environment
        * gulp - allows us to run gulp commands on our project to ease the development process.
        * browser-sync - allows us to see our changes to our project as we save them.
        * browserify - makes our project browser compatible.
        * vinyl-source-stream - puts our browserified source code into a new file.
        * gulp-concat - concatenates our JS files into one.
        * gulp-uglify - consolidates our code into a form that is more easily digestible by the browser.
        * gulp-util - allows us to manage environment variables.
        * del - deletes all the files that are passed as arguments into the command.
        * jshint - analyzes code and warns about parts that don't follow stylistic conventions, or could cause bugs in the future.
        * sass - method translates our files into normal CSS sourcemaps
        * bower-files

    * Bower Packages
      * The following were implemented in our Production Environment
        * jquery
        * bootstrap
        * moment.js

  * It could include a short description of what each does for you

## Specifications
| Behavior | Input | Output |
|---|:---|:---|
| User Inputs Symptom| "Cough" | Accesses inputs into url of api call along with API Key|
User sees display of Doctor information of doctor's name, phone number, and if they are accepting patients or not |"Willam Bradford MD"| Pulls out relevant info from API return and displays it to user|

## Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
    * build/css/vendor.css
    * build/css/main.css
    * build/js/vendor.min.js
    * build/js/app.js

## Setup/Installation Requirements

* Recieve API key by going to https://api.betterdoctor.com
* Clone the repository (https://github.com/dylandills/better-doctor)
* Create .env file at top of directory, with putting exports.apiKey = "YOUR API KEY";
* Run 'npm install' in your chosen terminal application
* Run 'bower install' in your chosen terminal application
* Run 'gulp serve' in your chosen terminal application, then wait for your browser to be opened to the appropriate page.

## Known Bugs
* None at this time.

## Technologies Used

  * HTML
  * CSS
  * SASS
  * Bootstrap
  * Javascript
  * jQuery
  * Bower
  * Node
  * Node Package Manager

## Support and contact details

_Email Dylan Dills, at dylan.dills@gmail.com, for questions, comments, or concerns_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Dylan Dills}_**
