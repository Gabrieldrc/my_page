import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TerminalPath from './components/TerminalPath/TerminalPath';
import HomePage from './components/HomePage/HomePage';
import SkillsPage from './components/SkillsPage/SkillsPage';
import WorkSample from './components/WorkSample/WorkSample';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav_content">
            <TerminalPath />
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/skills">
            <SkillsPage />
          </Route>
          <Route exact path="/my_projects">
            <WorkSample />
          </Route>
        </Switch>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
