import {Link} from "react-router-dom";

import {Grid} from "@material-ui/core";

const GridData = (props) => {
    const link = props.link;
    const data = props.data;
    const name = props.pokemon;

    return (
        <div>
            <Grid container spacing={1} className={'grid'}>
                {data.map((pokemon, index) => (
                    <Grid container item xs={3} spacing={3} key={index}>
                        <div className={'pokemon'}>
                            <Link to={{
                                pathname: '/' + link + '/' + pokemon.name,
                                state: {url: pokemon.url, name: name}
                            }}
                            >{pokemon.name}</Link>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
}

export default GridData;
