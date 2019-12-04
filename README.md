# HomeBrewed - https://homebrewed-sigma-nine.now.sh/

## Fullstack Capstone Application(Thinkful)

The third wave of coffee has brought amazing brews to local coffee shops who consider coffee to be artisanal food rather than commodity. As patrons we love and enjoy these roasts and have the ability to order some of the best coffee the world has to offer right from our phones and have it delivered to our door. Without the knowledge of a barista, how are you supposed to get those delicious beans into something more than just a regular cup of joe? You could do some research on the internet, but with such a saturated market and varying recipes, ratios, and brew methods all depending on what type of bean you have your early morning pick me up can turn into a drag and you begin to feel like you’re back in high school doing a research project for your science class. 
	That’s where HomeBrewed comes in! HomeBrewed gives you clear, concise, and simple brewing guides to achieve an amazing cup of coffee. With customizable features, bean freshness tracking, and personal logs you can continue to tweak your experience and truly understand what you like and don’t like about certain coffees. HomeBrewed allows you to get that time you lost researching back, so you can sit down and experience something more than just a cup of coffee.


## Technologies Used

  Created and bootstrapped with create-react-app this application uses HTML/CSS/JavaScript/JSX to present a simple and streamlined frontend and uses Node/Express/PostgreSQL for a full backend/database texted by a mixture of mocha/chai/enzyme, which you can check out here-- https://github.com/TreyTiller/HomeBrewed-api
  

## High Level User Stories
        - Have access to an introduction/ tutorial 
        - Be able to easily register for site entrance
        - Should be able to easily pick brew method from a list
        - Should be able to get brewing directions from database
        - Be able to POST they're ratio tweaks on their account
        

## Landing Page
        The landing page is meant to be an introduction/tutorial to the functionality of the app! All the information needed           is laid out right there and easy to follow! The user can choose to sign up or login right from this page.

![Screen Shot 2019-12-04 at 12 31 21 PM](https://user-images.githubusercontent.com/52612098/70166068-04d00780-1692-11ea-8a81-3285bc3b9b26.png)



## Authentication System

        The authentication system works using JWT and a bearer token system. Everything is stored within session storage and           cleared on exit or logout, and all passwords are hashed in the front and back end.

![Screen Shot 2019-12-04 at 12 33 56 PM](https://user-images.githubusercontent.com/52612098/70166255-6bedbc00-1692-11ea-96d4-a5f93f57cfb4.png)


![Screen Shot 2019-12-04 at 12 34 09 PM](https://user-images.githubusercontent.com/52612098/70166226-61332700-1692-11ea-971a-7369b33ca489.png)

## Dashboard
        The dashboard holds a set of 4 undeletable default brew guides to every user and then every brew guide created by an           individual user which are completely exclusive to that user.

![Screen Shot 2019-12-04 at 12 36 45 PM](https://user-images.githubusercontent.com/52612098/70166432-be2edd00-1692-11ea-8634-6001a2d53487.png)


## Brewing Guide
        The brewing guides are short and simple and feature an integrated stopwatch for easier use during brewing.

![Dec-04-2019 12-49-39](https://user-images.githubusercontent.com/52612098/70167390-a0fb0e00-1694-11ea-9f54-3e9cb1f38442.gif)



## Add Brew Form

        This form is completely dynamic and allows the user to added whatever amount of supplies/directions they need.
        
![Dec-04-2019 12-53-41](https://user-images.githubusercontent.com/52612098/70167649-2ed6f900-1695-11ea-8995-9c6bb4f9be33.gif)

