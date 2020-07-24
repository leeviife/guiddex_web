import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
/*import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './estilo.css';

const useStyles = makeStyles({
  root: {
    width: 600,
    background:'rgb(45, 64, 78)'
  },
});*/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default function Navinha() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="defaultMenu">
      <Button className="itemMenu"><Link to="/" className="estilo">Página Inicial </Link></Button>
      <Button className="itemMenu"><Link to="/cadastro" className="estilo">Chamada </Link></Button>
      <Button className="itemMenu"><Link to="/login" className="estilo">Histórico </Link></Button>
      <Button className="itemMenu"><Link to="/login" className="estilo">Notificação </Link></Button>
    </div>
  );
}