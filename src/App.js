// import logo from "./logo.svg";
import "./App.css";
import {Header, AdminHeader} from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Content2  from "./components/Content2";
import Props from "./components/Props";
import Student from "./components/Student";
import Form from './components/Form';
import Login from "./components/Login";
import { useState } from "react";
import LifeCycle from "./components/LifeCycle";

function App() {

  let students = [
    {
      id:19,
      name: 'Mukul',
      email: 'mukul@gmail.com'
    },{
      id:22,
      name: 'Kriti',
      email: 'kriti@gmail.com'
    },{
      id:34,
      name: 'Rohit',
      email: 'rohit@gmail.com'
    }
  ];

  // let [name,setState] = useState("Mukul Mahajan");
  // let [flag, setState] = useState(true);

  // function update(newValue){
  //   setState(newValue);
  // }

  // function print(input){
  //   update(input.target.value);
  // }

  function printData(){
    alert("Hello Mukul Mahajan !");
  }

  return (
    <div className="App">
      <Header></Header>

      {/* <Login></Login> */}
      {/* <Form></Form> */}

    <LifeCycle></LifeCycle>
      {/* <Content data={printData} /> */}
     
      {/* <Student data={name} />
      <button onClick={update}>Click here</button>
      <Props name={'Bhopal'} /> */}
      {/* <h1>{name}</h1> */}






      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mukul is Learning React on Ubuntu/ Windows
        </a>
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
