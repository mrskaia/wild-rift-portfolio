import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main className="mainContent__container">
        <section>
        <Header/>
        </section>
      </main>
    </div>
  );
}

export default App;
