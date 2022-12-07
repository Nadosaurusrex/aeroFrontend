import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js'
import ResponsiveAppBar from './Navbar.tsx'
import './MyComponent.css'



function App() {
  return (

    <div className="App">
      <ResponsiveAppBar/>
      <MyComponent/>
    </div>
  );
}

export default App;
