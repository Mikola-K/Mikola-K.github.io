import React from 'react'
import mustang from '../../../Assets/Images/mustang.png'
import anaconda from '../../../Assets/Images/Anaconda.jpg'

function TileSection() {
    return (
        <div className="tile-section"> 
              <ul id="items_container">
                <li className="car__card">
                        <img className="mustang__img" src={mustang} alt="loading..."/>
                        <h2 className="tile-section__title">Ford Mustang 1967 fastback</h2>
                        <h1 className="tile-section__subtitle">The 1968 Mustang GT 2+2 Fastback R Spec is Revology’s most track-focused model to date.Powered by the 460hp 5.0-liter Ti-VCT Coyote V-8 backed by a T56XL 6-speed manual, it features serious go-fast hardware, includingAP Racing brakes, Forgeline wheels</h1>
                        <h1 >340 lc</h1>
                        <h1 >240 km</h1>
                </li>
                <li className="car__card">
                        <img className="mustang__img" src={mustang} alt="loading..."/>
                        <h2 className="tile-section__title">Ford Mustang 1967 fastback</h2>
                        <h1 className="tile-section__subtitle">The 1968 Mustang GT 2+2 Fastback R Spec is Revology’s most track-focused model to date.Powered by the 460hp 5.0-liter Ti-VCT Coyote V-8 backed by a T56XL 6-speed manual, it features serious go-fast hardware, includingAP Racing brakes, Forgeline wheels</h1>
                        <h1 >340 lc</h1>
                        <h1 >240 km</h1>
                </li>
                <li className="car__card">
                        <img className="mustang__img" src={anaconda} alt="loading..."/>
                        <h2 className="tile-section__title">DMV Anaconda 4×4 Armoured Vehicle</h2>
                        <h1 className="tile-section__subtitle">The Dutch Military Vehicles (DMV) Anaconda is a new armoured vehicle designed and built by Deba Bedrijfswagens (Deba Trucks), a military vehicle manufacturer based in the Netherlands.
                            The armoured vehicle was officially launched by Deba Trucks in 2018. It aims to address the troop carrier, patrol, and maritime mission requirements of the armed and naval forces of the Netherlands.
                        </h1>
                        <h1 >1000 lc</h1>
                        <h1 >180 km</h1>
                </li>
              </ul>
        </div>
    )
}

export default TileSection