import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const everything = useSelector(store => store);
    console.log("everything: ", everything);
    const selected = everything.selected
    const genres = everything.selectedGenre;
    console.log('genres: ', genres);
    return (
        <div>
            <h3>Details</h3>
            <h3>{selected.title}</h3>
            <div> 
                <h4> Genres:</h4>
                {genres ? genres.map(genre => (
                    <section key={genre.id}>{genre.name} </section>
                )) : ''}
            </div>
            <img src={selected.poster} alt={selected.title} />
            <p>{selected.description}</p>
            <Router>
                <nav id='navBar'>
                    <div>
                        <NavLink to="/">
                            <h3>Back</h3>
                        </NavLink>
                    </div>
                </nav>
            </Router>
        </div>
    )
}
export default Details;