import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import MainPage from './pages';
import NotFound from './pages/404';
import Yolo from './pages/yolo';
import Login from './pages/login/login';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={Login} />
      <Route path="/yolo" component={Yolo} />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default App;
