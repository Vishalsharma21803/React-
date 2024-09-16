import logo from './logo.svg';
import './App.css';
import Calculator from './components/cal';
import Employee from './components/employee';
import Car from './components/useState';
// import ReactDOM from 'react-dom/client';


// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
function App() {
  return (
    <div className="App">
     {/* <Calculator />
     <Employee />  */}
     <Car name="Audi" color="black" defaultName="BMW"/>
    </div>
  );
}

export default App;
