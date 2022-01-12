import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from "react-router-dom";

const Bread = (props) => {
    const pokemon = props.pokemon;
    const movement = props.movement;
    console.log(props)
    let pokemonBread;
    let moventBread;
    if (pokemon != undefined) {
        pokemonBread = <Link  className={'a'} to={{
            pathname: '/pokemon/' + pokemon
        }}><b>{pokemon}</b></Link>
    }
    if (movement != undefined) {
        moventBread = <b>{movement}</b>
    }
    return (<Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link to="/" className={'a'}> <b>Inicio</b></Link>
        {pokemonBread}
        {moventBread}
    </Breadcrumbs>);
}

export default Bread;
