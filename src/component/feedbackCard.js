import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const FeedbackCard = ({ name, job, description }) => {

    return (
        <div className='feedback-card'>
            <div className="feedback-card-front">
                <MDBRow className='feedback-card-head'>
                    <MDBCol md={4} style={{width:'40%'}} >
                        <img src='https://fakeimg.pl/64x64' ></img>
                    </MDBCol>
                    <MDBCol md={5} style={{width:'60%'}} >
                        <h4>{name}</h4>
                        <h6>{job}</h6>
                    </MDBCol>
                </MDBRow>
                <div className='feedback-card-info'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;