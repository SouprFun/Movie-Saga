import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';


function App() {
  console.log("in app");
  const history = useHistory();
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details" >
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route path="/addmovie" >
          <AddMovie />
        </Route>
      </Router>
    </div >
  );
}


export default App;
