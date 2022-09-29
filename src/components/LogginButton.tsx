import React from 'react';
import './LogginButton.css';
import BasicModal from './Modal';
import Button from '@mui/material/Button';

function LogginButton(){
    return(
        <div className="logginButton">
            <button><BasicModal /></button>
            <button><Button>Dark</Button></button>
            
        
        </div>
    );
}

export default LogginButton;