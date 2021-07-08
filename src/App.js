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
    </div>
  );
}

export default App;
