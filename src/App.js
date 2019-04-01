import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PageOne from "./containers/PageOne";
import PageTwo from "./containers/PageTwo";
import VerticalAlign from "./containers/VerticalAlign";

const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
        this.changeUrl = this.changeUrl.bind(this);
    }

    changeUrl(path) {
        history.push(`/${path}`);
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/one">One</Link>
                        </li>
                        <li>
                            <Link to="/two">Two</Link>
                        </li>
                        <li>
                            <Link to="/verticalAlign">test for vertical-align</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button onClick={() =>this.changeUrl("one")}>page one</button>
                        </li>
                        <li>
                            <button onClick={() =>this.changeUrl("two")}>page two</button>
                        </li>
                    </ul>
                    <hr/>
                    <Route path="/one" component={PageOne}/>
                    <Route path="/two" component={PageTwo}/>
                    <Route path="/verticalAlign" component={VerticalAlign}/>
                </div>
            </Router>
        );
    }
}

export default App;
