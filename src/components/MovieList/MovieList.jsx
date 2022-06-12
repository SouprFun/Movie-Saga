import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
// MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';
import AddMovie from '../AddMovie/AddMovie';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    console.log('from the store:', movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function movieClick(movie) {
        console.log("movie click", movie);
        dispatch({ type: "SELECT", payload: movie });
        dispatch({ type: 'FETCH_GENRE', payload: movie })
        setTimeout(history.push("/details"), 3000)
        history.push("/details")
    }

    function AddMovie(){
        history.push("/addmovie")
    }

    return (
        <main >
            <Router>
                <nav id='navBar'>
                    <div>
                        <Link underline='hover' className='backlink' onClick={() => AddMovie()}>
                            <h3>Add Movie</h3>
                        </Link>
                    </div>
                </nav>
            </Router>
            <h1>MovieList</h1>
            <div className='movies'>

                {movies.map(movie => {
                    return (
                        <Card onClick={() => movieClick(movie)} key={movie.id} className='movies card' sx={{ maxWidth: 250 }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={movie.poster}
                                alt={movie.title}
                            />
                            <CardActionArea>
                                <CardContent>
                                    <div className='card-body'>
                                        <h3 className='card-title'>{movie.title}</h3>
                                        {/* <img src={movie.poster} alt={movie.title} onClick={() => movieClick(movie)} /> */}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </div>
        </main >

    );
}

export default MovieList;