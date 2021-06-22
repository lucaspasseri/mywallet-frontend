import Login from '../Login/Login'
import SignIn from '../SignIn/SignIn';
import Home from '../Home/Home';
import Credit from '../Credit/Credit';
import Debt from '../Debt/Debt';

import "../../css/reset.css";
import "../../css/styles.css";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {
    return (    
        <BrowserRouter> 
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/signin" component={SignIn} exact/>
                <Route path="/home" component={Home} exact/>
                <Route path="/credit" component={Credit} exact/>
                <Route path="/debt" component={Debt} exact/>                
            </Switch>
        </BrowserRouter>
    );
}