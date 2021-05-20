//import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MovieDetalle } from "./pages/MovieDetalle";


//probando git
export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetalle />
          </Route>
          <Route path= "/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
