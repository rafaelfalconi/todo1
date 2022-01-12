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
                            ><img className={'pokeball'}
                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png'}
                                alt={'pokeball'}/> {pokemon.name}</Link>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
}

export default GridData;
