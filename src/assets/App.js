import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar component */}

      <Switch>
        <Route path="/" exact>
          {/* Map and Recycling Locations */}
        </Route>
        <Route path="/about">
          {/* About page */}
        </Route>
      </Switch>
    </Router>
  );
};
