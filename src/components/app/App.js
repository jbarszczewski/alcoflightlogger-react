import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './../common/Menu';
import FlightLog from './../flightLog/FlightLog';
import Login from './../account/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu isLogged="true" />
                    <Switch>
                        <Route exact path='/' component={FlightLog} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
