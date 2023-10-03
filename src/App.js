import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import MainPage from './components/MainPage';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
