import React from "react";

export const ImageHomepage = ({setModalIsOpen}) => {
    const openModal = () => {
        setModalIsOpen(true)
    }

    return (
        <div>
            <img className="homepage__image" src={require("../images/homepage.png").default}/>
            <div className="homepage__content">
                <h1 className="homepage__title">Obtenez un devis pour vos travaux d'électricité</h1>
                <p className="homepage__description">Faites confiance à ...</p>
                <button className="homepage__button" onClick={openModal}>Obtenir mon devis</button>
            </div>
        </div>
    )
}