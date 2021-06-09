import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Dashboard" component={Dashboard} />
            </Switch> 
        </BrowserRouter>
    );
}

export default Routes;