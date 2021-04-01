import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import axios from 'axios';

export const DevisModal = ({
        name,
        numberPhone, 
        email,
        projectDate,
        setName,
        setDescription, 
        setNumberPhone, 
        setEmail, 
        setPostalCode, 
        setProjectDate, 
        setModalIsOpen, 
        modalIsOpen,
        message,
        subject}) => {

    const [readyToSubmit, setReadyToSubmit] = useState(false)
    const emailRegex = /[@]/
    const numberPhoneRegex = /[0-9 ]+/

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onNumberPhoneChange = (e) => {
        setNumberPhone(e.target.value)
    }

    const onPostalCodeChange = (e) => {
        setPostalCode(e.target.value)
    }

    const onProjectDateChange = (e) => {
        setProjectDate(e.target.value)
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const userData = {name, subject, message}

    const submitEmail = (e) => {
        e.preventDefault();
        axios({
          method: "POST", 
          url:"/send",
          data: userData
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("La demande de devis a été envoyé."); 
            resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
    }

    const resetForm =() => {
            setDescription("")
            setEmail("")
            setNumberPhone("")
            setProjectDate("")
            setPostalCode("")
            setName("")
    }

    useEffect(() => {
        if (name === "" || email === "" || emailRegex.test(email) === false || numberPhoneRegex.test(numberPhone) === false || projectDate === "" || numberPhone === "") {
            setReadyToSubmit(false)
        } else {
            setReadyToSubmit(true)
        }
    }, [email, name, projectDate, numberPhone])

    return (
        <div>
            <Modal
                className="ReactModal__Overlay"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >
                <h3 className="devis__title">Obtenir mon devis</h3>
                <form onSubmit={readyToSubmit ? submitEmail : undefined} className="devis__form">

                    <p className="devis__description">Votre nom prénom <span className="devis__redstar">*</span></p>
                    <input className="devis__input" onChange={onNameChange} placeholder="Nom Prénom"/>

                    <p className="devis__description">Votre email <span className="devis__redstar">*</span></p>
                    <input className="devis__input" onChange={onEmailChange} placeholder="Email"/>

                    <p className="devis__description">Votre numéro de téléphone <span className="devis__redstar">*</span></p>
                    <input className="devis__input" onChange={onNumberPhoneChange} placeholder="Numéro de téléphone"/>

                    <p className="devis__description">Votre code postal</p>
                    <input className="devis__input" onChange={onPostalCodeChange} placeholder="Code postal"/>

                    <p className="devis__description">Date où vous voulez commencer votre projet <span className="devis__redstar">*</span></p>
                    <select className="devis__input" onChange={onProjectDateChange}>
                        <option value="">Veuillez sélectionner</option>
                        <option value="Dès que possible">Dès que possible</option>
                        <option value="Dans moins de 3 mois">Dans moins de 3 mois</option>
                        <option value="Dans entre 3 et 6 mois">Dans entre 3 et 6 mois</option>
                        <option value="Pas de date fixée">Pas de date fixée</option>
                    </select>

                    <p className="devis__description">Description de votre projet (limité à 400 caractères)</p>
                    <textarea 
                        className="devis__textarea" 
                        onChange={onDescriptionChange} 
                        placeholder="Description"
                        maxLength="400"
                    />
                    
                    {
                        readyToSubmit ? undefined : 
                            <p className="devis__alert">
                                Les éléments avec une * sont nécessaires.
                            </p>
                    }

                    {
                        emailRegex.test(email) ? undefined : 
                            <p className="devis__alert">
                                L'adresse email doit être correcte.
                            </p>
                    }

                    {
                        numberPhoneRegex.test(numberPhone) ? undefined : 
                            <p className="devis__alert">
                                Le numéro de téléphone doit être composé de nombre.
                            </p>
                    }

                    <button className="devis__button" disabled={readyToSubmit ? false : true}>Envoyer</button>
                </form>
            </Modal>

        </div>
    )
}