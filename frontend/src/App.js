import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Leads from "./components/Leads/Leads";
import Register from './components/User/Register';
import Login from './components/User/Login';
import PrivateRoute from './components/Router/PrivateRoute';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import store from "./store";
import { loadUser } from './store/Actions/AuthActions'

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path='/' component={Leads} />
                                <Route exact path='/register' component={Register} />
                                <Route exact path='/login' component={Login} />
                            </Switch>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;
