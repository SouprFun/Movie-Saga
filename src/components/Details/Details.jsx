import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {

    return (
        <div>
            <h3>Details</h3>
            <Router>
                <nav id='navBar'>
                    <div>
                        <NavLink to="/">
                            <h3>Back</h3>
                        </NavLink>
                    </div>
                </nav>
            </Router>
            <p></p>
        </div>
    )
}
export default Details;