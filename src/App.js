import GlobalStyle from "./components/GlobalStyle";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home";




function App() {
  return (
    <div className="App">
       <Router>
      < GlobalStyle />
       <Switch>
          <Route path="/">
          < Home />
          </Route>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
