//import logo from './logo.svg';
import './App.css';
import NavBar from './components.js/NavBar';
import Textform from './components.js/Textform';
function App() {
  return (
    <>
<NavBar title="TextUtils" Home="HomeInfo"/>
<div className ="container my-3">
    <Textform heading="Enter the text to analyze below"/>
</div>
    </>
  );
}

export default App;