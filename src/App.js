import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";
import {
  Route, Switch, BrowserRouter
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ExperiencePage from "../pages/ExperiencePage";
import PortfolioPage from "../pages/PortfolioPage";
import SkillsPage from "../pages/SkillsPage";

function App() {

  
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/Experience' component={ExperiencePage}></Route>
        <Route exact path='/Portfolio' component={PortfolioPage}></Route>
        <Route exact path='/Skills' component={SkillsPage}></Route>
      </Switch>
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
