import './App.css';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import NavBar from './components/navBar';
import AsyncPage from './containers/asyncPage/asyncPage'
import ReduxPage from './containers/reduxPage/reduxPage'
import SimplePage from './containers/simplePage/simplePage'




const  App = () => {
  return (

    <div className="App">
      
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path ="/">

      <SimplePage />

      </Route>

      <Route exact path ="/async">
      <AsyncPage />
        
      </Route>

      <Route exact path ="/redux">
      <ReduxPage />
      </Route>

      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
