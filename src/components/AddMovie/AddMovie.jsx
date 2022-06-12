import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom';
import "./AddMovie.css"
//MUI
import Link from '@mui/material/Link';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";


function AddMovie() {
    const history = useHistory();
    const dispatch = useDispatch();
    let [title, setTitle] = useState();
    let [posterUrl, setPosterUrl] = useState();
    let [movieDesc, setMovieDesc] = useState();
    let [genre, setgenre] = useState();

    


    return (
        <div className='form'>
            <h3>Add Movie</h3>
            <div>
                <TextField
                    helperText="Enter Movie title"
                    id="demo-helper-text-misaligned"
                    label="Movie Title"
                    className='input'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    helperText="Enter Movie Poster Url"
                    id="demo-helper-text-misaligned"
                    label="Poster Url"
                    className='input'
                    value={posterUrl}
                    onChange={(event) => setPosterUrl(event.target.value)}
                />
                <TextField
                    helperText="Add a description of the movie"
                    id="demo-helper-text-misaligned"
                    label="Description"
                    className='input'
                    value={movieDesc}
                    onChange={(event) => setMovieDesc(event.target.value)}
                />
                <Button variant="contained" className='submitButton input' color="primary" onClick={() => submitButton()}>Submit</Button>

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

export default AddMovie;