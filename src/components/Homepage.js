import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ImageHomepage } from "./ImageHomepage";
import { Prestations } from "./Prestations";
import { DevisModal } from "./DevisModal";

export const Homepage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [numberPhone, setNumberPhone] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [projectDate, setProjectDate] = useState("")
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")

    const subject = "CBJ.com demande de devis de : " + email

    const message = `Nom Prénom : ${name}
Email : ${email} 
Numéro de téléphone : ${numberPhone} 
Code postal : ${postalCode}

Délai du projet : ${projectDate} 
    
    
Description du besoin : ${description}`

    return (
        <div>
            <Header setModalIsOpen={setModalIsOpen}/>
            <ImageHomepage setModalIsOpen={setModalIsOpen}/>
            <Prestations setModalIsOpen={setModalIsOpen}/>
            <Footer/>
            {
                modalIsOpen ? 
                    <DevisModal 
                        name={name}
                        email={email}
                        numberPhone={numberPhone}
                        projectDate={projectDate}
                        setName={setName}
                        setEmail={setEmail} 
                        setNumberPhone={setNumberPhone}
                        setPostalCode={setPostalCode}
                        setDescription={setDescription}
                        setProjectDate={setProjectDate}
                        setModalIsOpen={setModalIsOpen}
                        modalIsOpen={modalIsOpen}
                        message={message}
                        subject={subject}
                    /> 
                    : undefined
            }
        </div>
    )
}