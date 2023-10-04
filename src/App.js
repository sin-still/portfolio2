import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import MainPage from './components/MainPage';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import FlowText from './components/FlowText';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <About />
      <Skills />
      <FlowText />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
