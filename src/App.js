import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CodeScreen from './components/CodeScreen/CodeScreen';
import TerminalPath from './components/TerminalPath/TerminalPath';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav_content">
            <ul>
              <a href="/" className="nav_link" key="nav_link_aboutme">About Me</a>
              <a href="/" className="nav_link" key="nav_link_fontend">Front-End</a>
              <a href="/" className="nav_link" key="nav_link_backend">Back-End</a>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/">
            <div className="body_content">
              <div className="left_menu" id="left_menu">
                <a href="/a" className="nav_link" key="nav_link_aboutme">About Me</a>
                <a href="/" className="nav_link" key="nav_link_fontend">Front-End</a>
                <a href="/" className="nav_link" key="nav_link_backend">Back-End</a>
              </div>
              <div className="content_box">
                <TerminalPath />
                <div className="screens_container">
                  <CodeScreen />
                  <div className="screen render_screen">

                  </div>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
        <footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
