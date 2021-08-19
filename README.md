Welcome to BusyBee
=========================
<img width="800" alt="Screen Shot 2021-08-19 at 10 37 51 AM" src="https://user-images.githubusercontent.com/76131255/130117247-5749b91b-0a10-429f-829e-e20984205ee9.png">


* * * * *
### [Busy Bee Live Site](https://bizeebee.herokuapp.com/#/)


Sometimes, when you're planning out your day of errands, it can get overwhelming to keep track of everything you have to do, and the time you have to do it in. That's where we come in! BusyBee is a website that helps you plan those pesky errands in a way that gets you through your day efficiently, and leaves you with time to spare for the things you love to do. It's this problem that drove our team to create BusyBee.

Overview
-------------------------------------------------------------------------------
Busy Bee was built with:

* MongoDB
* JSX/JavaScript
* PostgreSQL
* React
* Redux
* Express
* Node.js
* Google Maps, Routes, and Places API

Busy Bee is an effective time-saving tool which allows users to input multiple locations and calculate fastest order of visitation using data from a variety of Google API’s. Google Maps and Places APIs provide map view and search functionality and business information such as ratings, reviews, and store hours, while Google Directions API is used to generate most routes and provide date/time specific data on traffic and road closures. BusyBee is built dynamically, with nearly global application available. Eventually, we would like to add functionality for time management, such as estimates with user input to get a better idea of how long their trip will be.

-   [ ]  User authorization: sign up and login
-   [ ]  Search functionality using location
-   [ ]  Interactive web page for planning out errands
-   [ ]  Ability to generate route to selected businesses
-   [ ]  Ability to save favorite businesses

Features and Technical Challenges
-------------------------------------------------------------------------------
#### Favorites
(image)
While planning out their routes, users are able to select businesses or locations that they find they are visiting frequently.  With a click, they can add the business to their favorites list, which is saved to the database for future reference.  This favorites feature creates easier, more efficient routing for the user, and access to more detailed information about each location.

#### Map View
(image)
Striving for an aesthetically-pleasing User Experience, the map has been styled with a custom color scheme.  Influenced by California's oceanside cities, the blues and oranges create a color palette that provides enough contrast to be accessible, while still standing out as a feature on its own.  In the future, we plan to execute customizable colors that the user can select, to make their account unique, and to accommodate any visual needs. 


#### Routes
(image)
The main feature of Busy Bee is the interactive map, which addresses the classic Traveling Salesman problem of finding the quickest path from point to point.  Once the user has selected each "errand" they'd like to run, the map routes out the fastest path from start to finish.
(talk about place id challenges here)

Future Features
-------------------------------------------------------------------------------
-   [ ]  Save whole trips for later use.
-   [ ]  Enable ability to change color themes

