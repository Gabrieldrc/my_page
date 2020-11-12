import './App.css';
import CodeScreen from './components/CodeScreen/CodeScreen';

function App() {
  return (
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
      <div className="body_content">
        <div className="left_menu" id="left_menu">
          <a href="/" className="nav_link" key="nav_link_aboutme">About Me</a>
          <a href="/" className="nav_link" key="nav_link_fontend">Front-End</a>
          <a href="/" className="nav_link" key="nav_link_backend">Back-End</a>
        </div>
        <div className="content_box">
          <div>asfgadfgsdfg</div>
          <div className="screens_container">
            <CodeScreen />
            <div className="screen render_screen">

            </div>
          </div>
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
