import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import ArtistList from "./components/ArtistList";
import "./App.css";
import Artists from "./components/Artists";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <h1>TUN_R</h1>
                        <div>
                            <div><Link to="/">All Artists</Link></div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={ArtistList}/>
                        <Route path="/artist/:id" component={Artists}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;