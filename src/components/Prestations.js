import React from "react";

export const Prestations = ({setModalIsOpen}) => {
    const openModal = () => {
        setModalIsOpen(true)
    }

    return (
        <div>
            <h1 className="prestations__title">Nos prestations & travaux d'Electricité</h1>

            <div className="prestations__background">

                <div className="prestations">

                    <div className="prestations__item">
                        <img className="prestations__image" src={require("../images/tab élec.jpg").default}/>
                        <p className="prestations__text">Remplacement de tableau électrique</p>
                    </div>

                    <div className="prestations__item">
                        <img className="prestations__image" src={require("../images/maintenance elec.jpg").default}/>
                        <p className="prestations__text">Maintenance et/ou mise aux normes</p>
                    </div>

                    <div className="prestations__item">
                        <img className="prestations__image" src={require("../images/prise elec.jpg").default}/>
                        <p className="prestations__text">Ajout ou déplacement de prise de courant</p>
                    </div>

                </div>

                <div className="prestations__button__div">
                    <button className="prestations__button" onClick={openModal}>Obtenir mon devis</button>
                </div>
                
            </div>
                  
        </div>
    )
}