import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'
import Displayuser from './usercomponent/displayuser.jsx'
import Adduser from './usercomponent/adduser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Displayuser} />
            <Route path="/adduser" component={Adduser} />
          </Switch>
        </HashRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
