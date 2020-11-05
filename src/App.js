import Country from './Home/Countries';
import {Navbar} from 'react-bootstrap';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Country Information</Navbar.Brand>
        </Navbar>
      </header>
      <Country />
    </div>
  );
}

export default App;
