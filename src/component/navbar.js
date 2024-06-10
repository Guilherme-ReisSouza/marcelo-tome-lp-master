import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import Logo from '../logo/Tome - Logo.png'

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light className='navbar-main'>
            <MDBContainer fluid style={{ padding: 0 }}>
                <div className='navbar-icon' href='/'><img src={Logo}></img></div>
                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item' href='/'>Inicio</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item' href='/#especialidades'>Especialidades</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item' href='/#depoimentos'>Depoimentos</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item' href='/#atuacao'>Atuação</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink className='navbar-item' href='/#contato'>Contato</MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>

                    <MDBBtn className='navbar-button'>Entre em Contato</MDBBtn>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}