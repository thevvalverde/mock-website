import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/system";

const MyDiv = styled('div')({
  padding: "10px 200px 100px"
})

function App() {
  return (
  <Fragment>
    <Header/>
    <MyDiv>
      <Outlet/>
    </MyDiv>
  </Fragment>
  )
  
  
  // (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
