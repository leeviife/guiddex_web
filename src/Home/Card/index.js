import React from 'react'
import Black from '../../img/Black.jpg'
import Person from '../../img/Person.jpg'
import './estilo.css'
export default function Card (){
    return(
        <div className="row-sm-2 bloc">
            <h2 className="text row-sm-2"> Guiddex para você</h2>
            <h3 className="text1 row-sm-2">Descubra dicas e lugares em nosso feed</h3>
                <div className="card-deck">
                    <div className="row align-items-start bloquinho">
                    
                        <div className="card cardinho">

                            <img className="card-img-top " src={Black} alt="Card image cap"/>
                            <div className="card-body">
                            <h2 className="card-title">Card title</h2>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            
                        </div>
                        <div className="card cardinho">
                            <img className="card-img-top" src={Person} alt="Card image cap"/>
                            <div className="card-body">
                            <h2 className="card-title">Card title</h2>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        
                        </div>
                        <div className="card cardinho">
                            <img className="card-img-top" src={Person} alt="Card image cap"/>
                            <div className="card-body">
                            <h2 className="card-title">Card title</h2>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                        
                    </div>
            </div>
    </div>

</div>)
}
