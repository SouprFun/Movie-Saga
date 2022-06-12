import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom'
import Details from '../Details/Details';

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
            <div className='row row-cols-1 row-cols-md-4'>
                <section className="movies">
                    {movies.map(movie => {
                        return (
                            <div key={movie.id} className="card" >
                                <div className='card-body'>
                                <h3 className='card-title'>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} onClick={() => movieClick(movie)} />
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
        </main>

    );
}

export default MovieList;