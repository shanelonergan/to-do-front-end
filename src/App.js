import React from 'react';
import './App.css';
// import './App.sass';
// import 'bulma/css/bulma.css'
import MainContainer from './components/MainContainer.js'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <section className="hero has-background-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-white has-text-centered">Do</h1>
          </div>
        </div>
      </section>
      <div>
        < MainContainer />
      </div>
    </div>
  );
}

export default App;
