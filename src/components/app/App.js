import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './../menu/Menu';
import FlightLog from './../flightLog/FlightLog';
import Flights from './../flights/Flights';
import Login from './../account/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu isLogged="true" />
                    <Switch>
                        <Route exact path='/' component={FlightLog} />
                        <Route path='/flights' component={Flights} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
