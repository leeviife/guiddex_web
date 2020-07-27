import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'

const Nav = () => {
    return (



<nav className="navbar navbar-expand-md navbar-dark defaultMenu">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <img  className="logoNav" src={Logo}></img>
        <ul className="navbar-nav mr-auto d-flex justify-content-center">

            <li className="nav-item">
                <a className="nav-link" href="/feed">Feed</a>
            </li>

        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/cadastro' >Register</Link>
            </li>
        </ul>
    </div>




</nav>




      
      
 

      
    )
}

export default Nav;