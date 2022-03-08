import React from 'react';

const styleContactUs = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
};

export default function ContactUs() {
    return (

 
        <div>
            <img
                src={require('./../images/logo.jpeg')}
                alt="Logo"
                loading="lazy"
                height="50%"
                width="50%"
                style={{
                    position: 'absolute',
                    top: '15%',
                    left:'15%',
                    padding: '1rem',
                }}
            />

            
        </div> 
    );

}