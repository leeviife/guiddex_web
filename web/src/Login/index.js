import React,{Component,useState} from 'react'
import Nav from '../Components/Nav';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Sky from '../img/Sky.svg';
import {Link, useHistory} from 'react-router-dom';
import api from '../services/api'
import './estilo.css';
import Cookies from 'js-cookie';

const URL="http://localhost:3333"
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
export default function Login (){
     const history = useHistory();
     const classes = useStyles();
     const [valor,setValor]=useState(
       {
         email:"",
         password:""
       }
     )
     const OnSubmit=(e)=>{
       e.preventDefault()
       const {name,value}=e.target
       setValor(prevState=>({
         ...prevState,
         [name]:value
       }))
      }
      
     const handleSubmitClick = (e) => {
      e.preventDefault();
      const data={
        "email_guia":valor.email,
        "senha_guia":valor.password
      }
      console.log(valor)
      try{
    
          api.post('guia/login',data).then(function(response){
          console.log(response.data.token) 
          Cookies.set('Token', response.data.token)
          history.push('/compartilhamento')
          
        }).catch((err) => {
          console.log(err)
          alert("Ihh rapaz, mas a sua conta não foi encontrada.")
        })
        }catch(e){
        alert("Impossível se conectar")       
      }
     
    }
   
    return(
        <div>      
          <Nav />
          <div className="geralLogin">
              <div className="top">
                <img className="backLogin" src={Sky}></img>
              </div>
            <div className="card carde1 align-middle">
              <h2 className="titleLogin">Então vamos lá</h2>
              <form className={classes.root} >                   
                <TextField label="email" type="email" name="email" onChange={OnSubmit}/>
                <br>
                </br>
                <TextField label="password" type="password" name="password" onChange={OnSubmit}/>
                <br>
                </br>
                <Button onClick={handleSubmitClick} variant="contained" type="submit" color="secondary">Enviar</Button>
              </form>        
              <br>
              </br>
              <div className="senha">
                <Link to="/senha">Esqueceu a sua senha ?</Link>
              </div>        
            </div>
          </div>
        </div>
    )

}