import React from 'react';
import Nav from '../Components/Nav';
import './estilo.css';
import Camera from '../img/Camera.jpg';
import Person from '../img/Person.jpg';
import CustomizedSteppers from './stepper/stepper.js'
import Black from '../img/Black.jpg';
import PropagandaUm from './Corpo/index.js'
import PropagandaDois from './Propaganda/index.js'
import Card from './Card/index.js'

const Home = () => {
  
    return (
        <div>
            <Nav/>
            <div className="top1 row">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active carouselIndicator"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className=" carouselIndicator"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className=" carouselIndicator"></li>
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item banners active">
                        <img className="d-block w-100 imgBanner" src={Camera} alt="First slide"/>
                        <div className="carousel-caption tituloBanners d-none d-md-block">
                            <h2>Venha conosco ser nosso parceiro de viagem!</h2>
                            <p>Ligue sua câmera e descubra lugares com experiencias que nunca teve!</p>
                        </div>
                    </div>
                    <div className="carousel-item banners">
                        <img className="d-block w-100 imgBanner" src={Person} alt="Second slide"/>
                        <div className="carousel-caption tituloBanners d-none d-md-block">
                            <h2>Venha conosco ser nosso parceiro de viagem!</h2>
                            <p>Ligue sua câmera e descubra lugares com experiencias que nunca teve!</p>
                        </div>
                    </div>
                    <div className="carousel-item banners">
                        <img className="d-block w-100 imgBanner" src={Black} alt="Third slide"/>
                        <div className="carousel-caption tituloBanners d-none d-md-block">
                            <h2>Venha conosco ser nosso parceiro de viagem!</h2>
                            <p>Ligue sua câmera e descubra lugares com experiencias que nunca teve!</p>
                        </div>
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="row">
              <Card/>  
            </div>
            <div className="row">
             <PropagandaUm/>
            </div>
            <div className="row">
            <PropagandaDois/>
            </div>
             
            
            
        
            </div>     

        </div>
        
    )
}
export default Home;
