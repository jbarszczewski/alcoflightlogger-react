import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './../common/Header';
import LogFlight from './../logFlight/LogFlight';
import Login from './../account/Login';

class App extends React.Component {
    render () {
        return (
          <BrowserRouter>
          <div>
            <Header/>        
            <hr />
            <Switch>
                <Route exact path='/' component={LogFlight} />
                <Route path='/login' component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
        );
    }
}

export default App;
