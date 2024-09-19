import logo from './logo.svg';
import './App.css';
import Calculator from './components/cal';
import Employee from './components/employee';
import Car from './components/useState';
import CenteredTable from './components/table';
// import ReactDOM from 'react-dom/client';
import BMIcalculator from './components/BMIcalculator';


// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
function App() {
  return (
    <div className="App">
     {/* <Calculator />
     <Employee />  */}
     <Car name="Audi" color="black" defaultName="BMW"/>
     <BMIcalculator />
      {/* <CenteredTable /> */}
    </div>
  );
}

export default App;
