import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router";
import axios from 'axios'
import Bread from "./BreadCrumbs"
import {Typography} from "@material-ui/core";

const Move = () => {
    let history = useHistory();
    let {name} = useParams();
    let data = useLocation();
    let url = '';
    let pokemonName = '';
    if (data.state === undefined) {
        history.push("/not-found")
    } else {
        url = data.state.url;
        pokemonName = data.state.name;
    }

    const [effect, setEffect] = useState([]);
    const [power, setPower] = useState([]);
    const [accuracyMove, setAccuracy] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setPower(response.data.power)
                setAccuracy(response.data.accuracy);
                response.data.effect_entries.forEach(data => setEffect(data));
            })
            .catch((err) => history.push("/not-found"))
    }, []);

    return (
        <div>
            <Bread pokemon={pokemonName} movement={name}/>
            <Typography component="h1" className={"center"}>{name}</Typography>
            <b>Effect Entries: </b>{effect.effect}
            <br/>
            <b>Short Effect:</b> {effect.short_effect}
            <br/>
            <b>Power:</b> {power}
            <br/>
            <b>Accuracy:</b> {accuracyMove}
        </div>);
};

export default Move;



