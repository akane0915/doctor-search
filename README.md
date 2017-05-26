# _Spot a Doc_

#### _Find a doctor in your area!  This application allows a user to input a symptom or medical specialty and returns a list of doctors nearby (Portland, OR) to treat their medical issue.  May 26, 2017_

#### By _**Asia Kane**_

### Screen Shot
![Homepage](img/screenshot.png)

## Description

This application makes it convenient and quick for a user to find a nearby doctor to treat a particular medical condition.  It allows the user to type a symptom or to select a medical specialty from a drop down menu. The searches return the doctor name, facility, address, and website if applicable.  

The application utilizes the Better Doctor API in the JSON format https://developer.betterdoctor.com/. (Sign Up for your own API key to test this app, and follow the setup instructions below to create a .env file). If no results are returned, the application displays an error message.

The application is written in JavaScript and its dependencies are conveniently managed by Node Package Manager and Bower.  It can be run via a development server and uses a Gulp based asset pipeline which includes concatenation, minification, browserify, live reloading, build and clean (delete) tasks, and automatic updates of js (vendor.min.js) and css (vendor.css) files through Bower dependencies.     

### Prerequisites

Web browser with ES6 compatibility
Examples: Chrome, Safari

* npm
* bower
* ruby

## Setup/Installation Requirements
* _In a terminal window, clone this repository to your machine and navigate to the file path_
* _Run $npm install_
* _Run $bower install_
* _Sign up for your own API Key at https://developer.betterdoctor.com/_
* _Create a file in the top level of your project folder titled ".env"_
* _Type in your .env file: exports.apiKey = "Your API Key goes here in quotes";_
* _Save the .env file_
* _Run $gulp build_
* _Run $gulp serve_
* _If you would like to make changes to this project, do so in the text editor_
* _Make frequent commits with detailed comments_
* _Submit changes as pull request to Asia at akane0915 on Github_

## Known Bugs
_N/A_

## Support and contact details
_I encourage you to update/make suggestions/refactor this code as you see fit. I am always open to improvement! Please contact Asia Kane at asialkane@gmail.com with questions._

## Technologies Used
* JavaScript
* Node
* Bower
* AJAX
* API integration (JSON)
* jQuery
* CSS (SASS)
* Bootstrap
* HTML
* ES6

### License
*This software is licensed under the MIT license*
Copyright © 2017 **Asia Kane**
