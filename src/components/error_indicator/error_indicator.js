import React from 'react';
import errorPic from '../../assets/error.jpg';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={errorPic} alt='error_message' width='600' height='400' />
        </div>
    );
};

export default ErrorIndicator;
