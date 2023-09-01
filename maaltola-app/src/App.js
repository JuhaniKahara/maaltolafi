import logo from './assets/maaltola.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tähän verkko-osoitteeseen avautuu paras Mika Aaltola fanisivusto
        </p>
        <p>
          Sivuston kehitysehdotukset voi ehdottaa privana sivun tekijälle
        </p>
      </header>
    </div>
  );
}

export default App;
