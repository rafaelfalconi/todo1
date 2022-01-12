import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Divider from '@material-ui/core/Divider';
import {Typography} from "@material-ui/core";
import axios from 'axios'
import GridData from "./GridData";
import Bread from "./BreadCrumbs"

const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const Pokemon = () => {
        let history = useHistory();
        let {name} = useParams();
        const [pokemon, setPokemon] = useState([]);
        const [moves, setMoves] = useState([]);
        const [isLoading, setLoading] = useState(true);
        useEffect(() => {
            axios.get(API_URL + name)
                .then((response) => {
                    let tempMove = [];
                    response.data.moves.forEach(move => {
                        tempMove.push({name: move.move.name, url: move.move.url})
                    })
                    setMoves(tempMove);
                    setPokemon(response.data);
                    setLoading(false);
                })
                .catch((err) => history.push("/not-found"))
        }, []);
        if (isLoading) {
            return <div className="App">Loading...</div>;
        }
        return (
            <div className={"center"}>
                <Bread pokemon={name}/>
                <Typography component="h1" className={"center"}>{name}</Typography>
                <img className="img-fluid" src={pokemon.sprites.other.dream_world.front_default}/>
                <Divider/>
                <Typography component="h1">Movimientos</Typography>
                <GridData data={moves} link={'move'} pokemon={name}/>
                <Bread pokemon={name}/>
            </div>

        );


    }
;

export default Pokemon;
