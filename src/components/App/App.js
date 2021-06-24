import LogIn from '../LogIn/LogIn'
import SignUp from '../SignUp/SignUp';
import Home from '../Home/Home';
import Credit from '../Credit/Credit';
import Debt from '../Debt/Debt';

import { useState } from 'react';
import UserContext from '../../contexts/UserContext';
import GlobalStyle from '../Styles/GlobalStyle';
import "../../css/reset.css";
import "../../css/styles.css";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App() {

    const [user, setUser] = useState();
    console.log(user);
    console.log(localStorage);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <GlobalStyle/>
            <BrowserRouter> 
                <Switch>
                    <Route path="/" component={LogIn} exact/>
                    <Route path="/signup" component={SignUp} exact/>
                    <Route path="/home" component={Home} exact/>
                    <Route path="/credit" component={Credit} exact/>
                    <Route path="/debt" component={Debt} exact/>                
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}