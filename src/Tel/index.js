import React from "react";
import Nav from '../Components/Nav';
import Button from '@material-ui/core/Button';
import './estilo.css';
import Celular from '../img/Celular.svg';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };

export default function Tel(){
    const classes = useStyles();
    const [values, setValues] = React.useState({
      textmask: '(  )    -    ',
      numberformat: '1320',
    });
  
    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
    return(

        <div>
            <Nav />
           <div className="row">
           <div className="card carde2 col">
                <h3>Precisamos verificar apenas um coisinha</h3>
                <p>Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
                Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non
                </p>
                   <img src={Celular} className="tamanhoImg">
                       </img> 
        
            </div>
            <div className="card carde col">
            <h5 className="titleLogin">Falta pouco</h5>

            <div className={classes.root}>
                    <FormControl className="models">
                        <InputLabel htmlFor="formatted-text-mask-input">Insira o número de telefone</InputLabel>
                        <Input
                        value={values.textmask}
                        onChange={handleChange}
                        name="textmask"
                        id="formatted-text-mask-input"
                        inputComponent={TextMaskCustom}
                        />
                        <br>
                        </br>
                        <InputLabel id="demo-simple-select-label">Pais</InputLabel>
                          
                        <Button  variant="contained" color="secondary">Enviar</Button>
                        
                    </FormControl>

            </div>          
            </div>
           
            </div>
        </div>
    )
}