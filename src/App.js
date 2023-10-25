import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";
import {
  Route, Routes, BrowserRouter
} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ExperiencePage from "./Pages/ExperiencePage";
import PortfolioPage from "./Pages/PortfolioPage";
import SkillsPage from "./Pages/SkillsPage";

function App() {

  
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route exact path='/Experience' component={ExperiencePage}></Route>
        <Route exact path='/Portfolio' element={<PortfolioPage/>}></Route>
        <Route exact path='/Skills' component={SkillsPage}></Route>
      </Routes>
    </BrowserRouter>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
