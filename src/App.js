import React from "react";
import "./App.css";
import withRoot from "./withRoot";

import { Route, Switch } from "react-router-dom";
import Phonetic from "./Containers/Phonetic";
import RandomMeme from "./Containers/RandomMeme";

function App() {
    

    return (
        <div>
        <Switch>
                <Route path="/meme" component={RandomMeme} />
                <Route path="/" exact component={Phonetic} />
                {/* <Redirect to="/" /> */}
            </Switch>
        
        </div>
    );
}


export default withRoot(App);
