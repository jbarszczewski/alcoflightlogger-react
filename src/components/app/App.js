import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './../common/Header';
import Menu from './../common/Menu';
import FlightLog from './../flightLog/FlightLog';
import Login from './../account/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div>
                        <Menu />
                        <Switch>
                            <Route exact path='/' component={FlightLog} />
                            <Route path='/login' component={Login} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
