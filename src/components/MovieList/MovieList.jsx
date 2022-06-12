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
            <div className='container'>
                <section className="movies">
                    {movies.map(movie => {
                        return (
                            <div key={movie.id} >
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} onClick={() => movieClick(movie)} />
                                {/* <img src={movie.poster} alt={movie.title} onClick={() => (
                                <Details movie={movie} />
                            )} /> */}
                            </div>
                        );
                    })}
                </section>
            </div>
        </main>

    );
}

export default MovieList;