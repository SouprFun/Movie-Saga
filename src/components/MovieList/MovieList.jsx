import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'
// MUI imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
        // <Details movie={movie} />
        history.push("/details")
    }

    return (
        <main>
            <h1>MovieList</h1>
            {movies.map(movie => {
                return (
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={movie.poster} 
                            alt={movie.title}
                        />
                        <CardContent>
                            <div key={movie.id}>
                                <div className='card-body'>
                                    <h3 className='card-title'>{movie.title}</h3>
                                    <img src={movie.poster} alt={movie.title} onClick={() => movieClick(movie)} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </main>

    );
}

export default MovieList;