import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import Logo from '../logo/Tome - Logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBContainer fluid className='footer-container' style={{ height: '10vh', backgroundColor: '' }}>
            <MDBRow>
                <MDBCol md={3} className='footer-logo'>
                    <img src={Logo}></img>
                </MDBCol>
                <MDBCol md={3}>

                </MDBCol>
                <MDBCol md={3} className='footer-info'>
                    <h3>Entre em Contato</h3>
                    <p>Seu direito, simples, rápido e sob medida.</p>
                    <br></br>
                    <p>Telefone: (011) 0000 0000</p>
                    <p>Email: info@Exemplo.com</p>
                </MDBCol>
                <MDBCol md={3} className='footer-links'>
                    <h3>Links Rápidos</h3>
                    <a>Inicio</a>
                    <a>Áreas de Atuação</a>
                    <a>Depoimentos</a>
                    <a>Contato</a>
                </MDBCol>
            </MDBRow>
            <MDBRow className='footer-copyright'>
                <MDBCol md={6}>
                    <p>Copyright © Marcelo Tomé 2024</p>
                </MDBCol>
                <MDBCol md={6} className='footer-socials'>
                    <p>Nos siga: </p>
                    <FaFacebookSquare />
                    <FaInstagramSquare />
                    <FaLinkedin />

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}