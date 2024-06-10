import React, { useState } from 'react';

const SpecialityCard = ({ speciality, description }) => {

    return (
        <div className='speciality-card'>
            <div className="speciality-card-front">
                <h3>{speciality}</h3>
                <div className='speciality-card-info'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialityCard;