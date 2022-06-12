import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {
const selected = useSelector(store => store.selected)
console.log("selected: ", selected);
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