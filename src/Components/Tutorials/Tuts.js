import React from 'react';
import { Link } from 'react-router-dom';
import './Tuts.css'

class Tut extends React.Component {
    render() {
        return (
            <div>
                <section className="upper">
                    <h1 className="welcome">Welcome to Homebrewed!</h1>
                    <hr className="welcome"></hr>
                    <h4 className="tagline">Your one stop guide to amazing home brewed coffee</h4>
                    <p className="routes">Please <Link to="/register">Sign Up</Link> or <Link to="/login">Log In</Link> to use, or check out the tutorial below for more details on the app!</p>
                </section>
                <hr className="lower"></hr>
                <section className="lower">
                    <h5>About:</h5>
                    <p>The third wave of coffee has brought amazing brews to local coffee shops who consider coffee to be artisanal food
                         rather than a commodity. As patrons, we love and enjoy these roasts and have the ability to order some of the
                         best coffee the world has to offer right from our phones and have it delivered to our door. Without the
                         knowledge of a barista, how are you supposed to get those delicious beans into something more than just a
                         regular cup of joe? You could do some research on the internet, but with such a saturated market and varying
                         recipes, ratios, and brew methods all depending on what type of bean you have your early morning pick me up can
                         turn into a drag and you begin to feel like you’re back in high school doing a research project for your science
                         class. That’s where HomeBrewed comes in! HomeBrewed gives you clear, concise, and simple brewing guides to
                         achieve an amazing cup of coffee. With customizable features, bean freshness tracking, and personal logs you
                         can continue to tweak your experience and truly understand what you like and don’t like about certain coffees.
                         HomeBrewed allows you to get that time you lost researching back, so you can sit down and experience something
                         more than just a cup of coffee.</p>

                    <h5>Functionality:</h5>
                    <p>The functionality is simple! Choose a brew guide to follow from the main dashboard screen. If you don't see what 
                        you're looking for click the 'Add Brew' button in the top right corner to create a personal brewing guide! </p>
                    <p>The brew guides consist of a list of supplies and directions telling you how to achieve the perfect cup.
                        The guides also feature a built in timer for anyone who might not have one!</p>
                    <p>And there ya go! That's all you need for success. Man, this is easy...</p>

                    <h5>Development:</h5>
                    <p>If you'd like to checkout any of the working code or how this was made follow any of the links bellow!</p>
                    <a href="https://github.com/TreyTiller/HomeBrewed-api" target="_blank" rel="noopener noreferrer">Server Repo</a>
                    <a href="https://github.com/TreyTiller/Homebrewed-app" target="_blank" rel="noopener noreferrer">Client Repo</a>

                    <h5>Upcoming Features:</h5>
                    <ul>
                        <li>Hot and Cold Beverage Brew Guides</li>
                        <li>Bean Information Storage</li>
                        <li>Bean Expiration/Freshness Tracking</li>
                        <li>In app supplies and product purchasing</li>
                        <li>Learn Tab for further learning in coffee</li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Tut;

