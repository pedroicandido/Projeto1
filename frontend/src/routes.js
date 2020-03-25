import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './components/Logon/Logon';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import NewIncident from './components/NewIncident/NewIncident'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}


