import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import RouteAuthet from './RoutAttent.js'
import Login from '../Login/index';
import Compartilhamento from "../Compartilhamento/index";
import Cadastro  from "../Cadastro/index";
import Home from "../Home/index";
import Feed from "../Feed/index";
import Historico from "../Historico/index"
import Senha from "../Senha"
import Tel from '../Tel';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}isPrivate exact />
      <RouteAuthet path="/feed" component={Feed} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/login" component={Login} />
      <RouteAuthet path="/compartilhamento" component={Compartilhamento} />
      <RouteAuthet path="/historico" component={Historico} />
      <Route path="/senha" component={Senha}/>
      <Route path="/tel" component={Tel}/>
    </Switch>
  </BrowserRouter>
);


export default Routes;