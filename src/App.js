import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import MainPage from './components/MainPage';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <About />
    </div>
  );
}

export default App;
