import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const ServicesCard = ({ service, description, icon }) => {

    return (
        <div className='services-card'>
            <div className="services-card-front">
                <h3>{service}</h3>
                <p>{description}</p>
                <MDBContainer fluid>
                    <MDBRow className='services-card-info'>
                        <MDBCol md={4}>
                            {icon}
                        </MDBCol>
                        <MDBCol className='services-button' md={4}>
                            <MDBBtn>Saiba Mais</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
};

export default ServicesCard;