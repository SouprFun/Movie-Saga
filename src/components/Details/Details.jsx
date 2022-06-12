import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Details.css"
import Link from '@mui/material/Link';

function Details() {
    const history = useHistory();
    const everything = useSelector(store => store);
    console.log("everything: ", everything);
    const selected = everything.selected
    const genres = everything.selectedGenre;
    console.log('genres: ', genres);
    
    return (
        <div>
            <h3>Details</h3>
            <div className='details'>
                <h3>{selected.title}</h3>
                <div>
                    <h4> Genres:</h4>
                    {genres ? genres.map(genre => (
                        <section key={genre.id}>{genre.name} </section>
                    )) : ''}
                </div>
                <img src={selected.poster} alt={selected.title} />
                <p>{selected.description}</p>
            </div>
            <Router>
                <nav id='navBar'>
                    <div>
                        <Link underline='hover' className='backlink' onClick={() => history.push('/')}>
                            <h3 className='backLink'>Back</h3>
                        </Link>
                    </div>
                </nav>
            </Router>
        </div>
    )
}
export default Details;