import React from 'react';
import './estilo.css';
import Chat2 from '../../img/Chat2.svg'
export default function PropagandaUm(){
    return(
        <div>
           <div className="novoBloco row">

                <div className="col propaganda">
                    
                    <h1 className="titulo">Solicite um guia rápido por chamada de video</h1>
                    <p className="paragrafo1">Cada recurso de segurança implantado e cada orientação no Código de Conduta da Guiddex representam nosso compromisso com a segurança dos usuários.
                    </p>
                    <a href="#">click fortmat</a>
                    
                </div>
               <div className="col ">
                    <img src={Chat2} className="imagem"/>
               </div>
            </div>
          
        </div>)
}