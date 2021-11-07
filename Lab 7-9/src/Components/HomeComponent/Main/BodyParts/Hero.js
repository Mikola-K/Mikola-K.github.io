import React from "react";
import hero from '../../../../Assets/Images/tell-us-hero.png'
function Hero() {
    return (
        <div className="hero__main">
            <div className = "hero__main__text">
                <h1 className="hero__title">Tell us what you want.
                    What you  <span className = "hero__span">really really</span> want.</h1>
                <p className="hero__text">
                Buying a car can be a leap into the unknown, however knowledgeable you are.
                </p>
                <p className="hero__text">                    
                That’s where BuyaCar comes in. We’re the easiest and most trusted way to buy a car.
                And we’re with you every step of the way, from finding the finance to delivering your new vehicle to the door.
                </p>
                <p className="hero__text">
                We’re expert, simple and trustworthy. 
                Everything we say and do is easy to understand without ever being patronising. And we never over-promise or sugarcoat anything.
                </p>
            </div>
            <img class="hero__img" src={hero} alt="oops"/>
        </div>
    )
}

export default Hero