import React from 'react';
import './estilo.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ImgRecover from "../img/recoverPass.svg"
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
export default function Senha(){

    const classes = useStyles();

    return(
        <div className="geralRecupera">
            <div className = "fundoRecupera">
                <img className="imgRecupera" src={ImgRecover}></img>
            </div>
            <div className="card cardCadastro">
            <h3> Esqueceu a senha ?</h3>
            <p>Tudo bem, só iremos precisar do seu email de cadastro para enviar a sua senha</p>       
            <TextField
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    label="E-mail"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                /> 
                 <br>
                </br>
             <Button  variant="contained" color="secondary">Enviar</Button>   
            </div>
        </div>
    )

 }