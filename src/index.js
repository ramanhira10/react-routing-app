import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={ App } />
                <Route path="/users" component={ Users } />
                <Route path="/contact" component={ Contact } />
                <Route component={ Notfound } />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));