import React from 'react';
import {isAuthenticated} from '../services/auth.js';
import {BrowserRuoter,Route,Switch,Redirect}   from  "react-router-dom";
const PrivateRoute=({component:Component, ...rest })=>(
    <Route {...rest} render={props=>(
        isAuthenticated() ? (
            <Component {...props}/>
        ):(
                <Redirect to={{pathname:'/',state:{from:props.location}}}/>
        )
    )} />
);
export default PrivateRoute;