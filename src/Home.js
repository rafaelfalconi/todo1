import {useEffect, useState} from "react";

import {Button, Typography} from "@material-ui/core";
import axios from "axios";
import GridData from "./GridData";
import Bread from "./BreadCrumbs"

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    const loadMore = () => {
        axios
            .get(`${API_URL}?limit=40`)
            .then((res) => setPokemons(res.data.results))
            .catch((err) => console.error);
    };

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => {
                setPokemons(res.data.results);
            })
            .catch((err) => console.error);
    }, []);

    return (
        <div>
            <Typography component="h1">POKEDEX</Typography>
            <GridData data={pokemons} link={'pokemon'}/>
            <div>
                <Button variant="contained" color="primary" onClick={loadMore}>
                    Load More
                </Button>
            </div>
            <Bread/>

        </div>
    );
};

export default Home;
