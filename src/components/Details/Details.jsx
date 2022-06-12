import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
    const everything = useSelector(store => store);
    console.log("everything: ", everything);
    const selected = everything.selected 
    const genre = everything.selectedGenre;
    console.log('genre: ',genre);
    return (
        <div>
            <h3>Details</h3>
            <h3>{selected.title}</h3>
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