import React from "react";
import instagram from '../../../Assets/Images/instagram.png'
import facebook from '../../../Assets/Images/facebook.png'
import google from '../../../Assets/Images/google.png'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <hr/> 
            <div className="footer__main">            
                <div className="copyright">2020 IoT @ Copyright all rights reserver, bla bla </div>
                <div className="footer__icons">
                    <img className="footer__ico" src={instagram} />
                    <img className="footer__ico" src={facebook} />
                    <img className="footer__ico" src={google} />
                </div>
            </div>
        </div>
    )
}

export default Footer