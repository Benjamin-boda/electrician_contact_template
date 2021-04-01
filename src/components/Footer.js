import React from "react";

export const Footer = () => {
    return (
        <div className="footer__background">

            <div className="footer">

                
                    <img className="footer__logo" src={require("../images/logo.png").default}/>
                    <p className="footer__text"> 
                        © ...  All rights reserved.
                    </p>

                
                    <p className="footer__text"><img className="footer__icon" src={require("../images/Location_icon.png").default}/>Ile de France - IDF</p>
                    <p className="footer__text"><img className="footer__icon" src={require("../images/Email.png").default}/>example@gmail.com</p>
                

            </div>
            
        </div>
    )
}