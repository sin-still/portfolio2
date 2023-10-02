import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import MainPage from './components/MainPage';
import About from './components/About';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <About />
      <Skills />
    </div>
  );
}

export default App;
