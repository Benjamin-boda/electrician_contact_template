import React from "react";

export const Header = ({setModalIsOpen}) => {
    const openModal = () => {
        setModalIsOpen(true)
    }

    return (
        <div className="header__content">
            <div className="header">
                <img className="header__logo" src={require("../images/logo.png").default}/>
                <h2 className="header__title">Electricien disponible en IDF, B2B & B2C</h2>
                <button className="header__button__phone header__button__phone__text">
                    <img className="header__phone" src={require("../images/phone.png").default}/>
                    06 00 00 00 00<br/>
                    Prix d'un appel local
                </button>
                <button className="header__button__devis header__button__phone__text" onClick={openModal}>
                    Obtenir mon devis
                </button>
            </div>
        </div>
        
    )
}