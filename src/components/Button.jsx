import React from 'react';
import '../index.css';

const Button = (props) => {
    return (
            <button className='btn' type='button'>{props.text}</button>
    );
};

export default Button;