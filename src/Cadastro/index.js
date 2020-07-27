import React, { FormEvent, useState, useEffect } from 'react'
import Nav from '../Components/Nav';
import './estilo.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Amigos from '../img/Amigos.svg';
import api from '../services/api';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik, Form, Field, ErrorMessage } from 'formik';

/**Folha de estilo para os elementos do Material io */
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
        },
    },

}));

/** função de validação dos campos do formulário */
function Login() {
    const classes = useStyles();
    const avaliar = Yup.object().shape({
            nome_guia: Yup.string().min(3, "Quantidade de caracteres insuficientes").required("é necessário"),
            senha_guia: Yup.string().min(8, "A sua senha tem que ter no mínimo 8 digitos").required("senha obrigatória").max(15, "A quantidade máxima é 15"),
            email_guia: Yup.string().email("Digite um e-mail válido").required("email necessário"),
            confirmPassword: Yup.string().
            oneOf([Yup.ref('senha_guia'), null], 'Passwords must match').required(),
            idade_guia: Yup.number().moreThan(17, "idade mínima: 18 anos").required(),


        })
        /**anexando os valores e mandando os dados para o servidor */
    async function CadastroElementos(values) {
        const data = {
            nome_guia: values.nome_guia,
            email_guia: values.email_guia,
            senha_guia: values.senha_guia,
            idade_guia: values.idade_guia,
            "telefone_guia": "5511964785213",
            "logado_guia": true
        };
        /**caso tenha algum problema com a conexão mostra o erro específico */
        try {
            const response = await api.post('guia', data);
            alert(`Seu email de acesso: ${data.email_guia}`);
        } catch (err) {
            alert('Erro no cadastro, tente novamente. ' + err.message);
        }

    }
    /**usando hooks para enviar, adicionar ou modificar as informações passadas 
     * entre Yup and react hook from
     * handleSubmit(onSubmit)
    */
   

          
    {/** caso tudo corra conforme o planejado, o onSumit mandará as configurações para o json */}

        return(
            <div> 
                <Nav />
              <div className="row">
                <div className="card carde">
                  <h3 className="titleLogin">Diga-nos um pouco sobre você...</h3>
                  <Formik initialValues={{
                    nome_guia:'',
                    senha_guia:'',
                    email_guia:'',
                  idade_guia:0,
                    confirmPassword:''
                  }}
                  validationSchema={avaliar}
                  onSubmit={(
                    values
                  )=>{
                    CadastroElementos(values)
                  }}
                  >
                    {({ values,dirty,isValid }) => (
                      <Form className="formulario">
                        <div className="row">
                        <div className="col">
                          <Field name="nome_guia" as={TextField} label="Name"/>
                          <br>
                          </br>
                          <ErrorMessage name="nome_guia"></ErrorMessage>
                  
                              <br>
                              </br>

                          <Field name="email_guia" as={TextField} label="E-mail" type="email"/>
                          <br>
                          </br>
                          <ErrorMessage name="email_guia"></ErrorMessage>
                         

                        </div>

                        <div className="col">
                          <Field name="senha_guia" as={TextField} label="password" type="password"/>
                          <br></br>
                          <ErrorMessage name="senha_guia"></ErrorMessage>
                          <br>
                          </br>
                          <Field name="confirmPassword" as={TextField} label="confirm Password" type="password"/>
                          <br></br>
                          <ErrorMessage name="confirmPassword"></ErrorMessage>
                          
                        </div>


                        </div>
                       
                        <hr>
                        </hr>
                        <div className="col">

                           <Field name="idade_guia" as={TextField} label="Age" type="number"/>
                           <br>
                            </br>
                            <ErrorMessage name="idade_guia"></ErrorMessage>

                        </div>
                        
                
                        <br>
                        </br>
                        
                        
                        <Button
                        
                        variant="contained"
                        color="secondary" 
                        type="submit"
                        disabled={ !isValid || !dirty}
                        >Enviar</Button>
                        <Link to="/tel">Fone</Link>
                        
                        {/** <pre>{JSON.stringify(values, null, 4)}</pre>*/} 
                        </Form>
                    )}
                        </Formik>

                </div>
           {/**<div className="card carde2 col">
                    <h3>Venha fazer parte</h3>
                    <p>Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
                    Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
                    Praesent malesuada urna nisi, quis volutpat erat hendrerit non
                    </p>
                      <img src={Amigos} className="tamanhoImg">
                          </img> 
                          </div>
              
              */}     
                </div> 
                  </div>
       
    )
}
export default Login;

