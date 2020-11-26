import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TerminalPath from './components/TerminalPath/TerminalPath';
import HomePage from './components/HomePage/HomePage';
import SkillsPage from './components/SkillsPage/SkillsPage';

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
        </Switch>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
