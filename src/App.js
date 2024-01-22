import logo from "./logo.svg";
import "./App.css";
import {Header, AdminHeader} from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <AdminHeader />
      <Content />
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
