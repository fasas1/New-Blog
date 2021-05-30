import GlobalStyle from "./components/GlobalStyle";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";




function App() {
  return (
    <div className="App">
       <Router>
      < GlobalStyle />
       <Switch>
          <Route exact path="/">
          < Home />
          </Route>
          <Route path="/Create">
             <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
