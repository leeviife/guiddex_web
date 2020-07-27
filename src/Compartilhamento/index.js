import React from 'react'
import Navinha from '../Components/Header';
import Button from '@material-ui/core/Button';
import api from '../services/api';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Compartilhamento(){
    const handleSubmitClick = (e) => {
        if(Cookies.get("Token")){
            console.log("brabo");
        }
        Cookies.remove('Token');

    }
    return(
        <div>
            <Navinha />
            <h1>Olá</h1>

            <Button onClick={handleSubmitClick}><Link to='/'>Sair</Link></Button>
        </div>
    )
}