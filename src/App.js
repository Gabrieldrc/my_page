import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="nav_content">
          <ul>
            <a href="" class="nav_link" key="nav_link_aboutme">About Me</a>
            <a href="" class="nav_link" key="nav_link_fontend">Front-End</a>
            <a href="" class="nav_link" key="nav_link_backend">Back-End</a>
          </ul>
        </div>
      </nav>
      <div className="body_content">
        <div className="left_menu" id="left_menu">
          <a href="" class="nav_link" key="nav_link_aboutme">About Me</a>
          <a href="" class="nav_link" key="nav_link_fontend">Front-End</a>
          <a href="" class="nav_link" key="nav_link_backend">Back-End</a>
        </div>
        <div className="content_box">
          <div>asfgadfgsdfg</div>
          <div className="screens_container">
            <div className="screen code_screen">
              <div className="code_line">
                <span className="number_line">1</span>  <span className="purple_word">import</span> <span className="blue_word">React</span> <span className="purple_word">from</span> <span className="path">'react'</span>
              </div>
            </div>
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
