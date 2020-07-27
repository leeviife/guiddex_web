import React from 'react';
import './estilo.css';
import Mat from '../img/mat.png'
import NavFeed from '../Components/Header/index.js';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Containe from '../img/Container.svg';

export default function Run() {
  const [value, setValue] = React.useState(2);
  return (

    <div className="row">
      
      <div className="col-md-2 coluna1">
      <div class="card cardProfile" >
          <div className="iconeProfile">
            <img class="card-img-top imgProfile" src={Mat} alt="Card image cap"/>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          </div>

        </div>
        <div class="card cardProfile" >
          <div className="iconeProfile">
            <img class="card-img-top imgProfile" src={Mat} alt="Card image cap"/>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          </div>
 
        </div>
        <div class="card cardProfile" >
          <div className="iconeProfile">
            <img class="card-img-top imgProfile" src={Mat} alt="Card image cap"/>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Controlled</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          </div>
 
        </div>

        
      </div>
      <div className="col-md-8 coluna2">
        <NavFeed></NavFeed>

        
       <h3 className="mt-3">O que deseja encontrar?</h3>
        
              
            <div class="input-group mb-3 ml-3 ">
              <input type="text" class="form-control" placeholder="Encontre aqui respostas, dúvidas e dicas " aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary mr-5" type="button">Encontrar</button>
              </div>
          
          </div>
        <div class="card cardNewPub" >

          <div class="input-group mb-2">

            <textarea class="form-control mb-3" placeholder="Conte pra gente o que você precisa..." aria-label="With textarea"></textarea>
          </div>
          
          <button type="button" class="btn btn-dark">Dark</button>
        </div>
        <div class="card cardPub mt-2">
          <div class="card-header text-left">
            Levi Teixeira
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Barraca da dona Joana, melhor pastel de Paris, rua champs elisé 54</p>
              <footer class="blockquote-footer">13:59 22/08 <cite title="Source Title">Paris - France</cite></footer>
            </blockquote>
          </div>
        </div>
        <div class="card cardPub mt-2">
          <div class="card-header text-left">
            Levi Teixeira
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Barraca da dona Joana, melhor pastel de Paris, rua champs elisé 54</p>
              <footer class="blockquote-footer">13:59 22/08 <cite title="Source Title">Paris - France</cite></footer>
            </blockquote>
          </div>
        </div>
        <div class="card cardPub mt-2">
          <div class="card-header text-left">
            Levi Teixeira
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>Barraca da dona Joana, melhor pastel de Paris, rua champs elisé 54</p>
              <footer class="blockquote-footer">13:59 22/08 <cite title="Source Title">Paris - France</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
      
      <div className="col-md-2 coluna3">
        <h5>Comunidade</h5>
        <div class="card cardProfile" >
          <div className="iconeProfile">
            <img class="card-img-top imgProfile" src={Mat} alt="Card image cap"/>
           
          </div>

        </div>
      </div>
    </div>

  );
}
