import React from 'react';
import './estilo.css';
import App from '../../img/App.svg'
export default function PorpagandaDois(){
    return(

        <div>
            <div className="novoBloco2 row">

                <div className="col loc ">
                    <img src={App} className="imagem1"/>
                </div>
                <div className="col loc2">
                    <div className="compont ">
                    <h1 className="titulo">Solicite um guia rápido por chamada de video</h1>
                    <p className="paragrafo1">Cada recurso de segurança implantado e cada orientação no Código de Conduta da Uber representam nosso compromisso com a segurança dos usuários.
                    </p>
                    <a href="#">click fortmat</a> 
                    </div>
                </div>
                </div>
          
        </div>

        )

}