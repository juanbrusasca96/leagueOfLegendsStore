import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './styles/css/style.css'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer geeting={'Hola Mundo!'}/>
    </div>
  );
}

export default App;
