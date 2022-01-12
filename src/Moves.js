import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import axios from 'axios'
import Bread from "./BreadCrumbs"

const Move = () => {
    let {name} = useParams();
    let data = useLocation();
    const url = data.state.url;
    const pokemonName = data.state.name;
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setPokemon(response.data);

                response.data.effect_entries.forEach(data => setPokemon(data));
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <div>
            <h1>{name}</h1>

            <b>effect_entries: </b>{pokemon.effect}
            <br/>
            <b>short_effect:</b> {pokemon.short_effect}
            <Bread pokemon={pokemonName} movement={name}/>
        </div>);
};

export default Move;



