import './App.css';

import NavigationBar from './NavigationBar'
import Home from './Home'
import About from './About'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home />
      <About />
      <img src={require("./logo.svg")}></img>
    </div>
  );
}

export default App;
