import React, { useState } from "react";
import "./App.css";
import withRoot from "./withRoot";
import { Grid } from "@material-ui/core";

import PhoneticChar from "./Components/PhoneticChar";
import UserInput from "./Components/UserInput";

function App() {
    const [userText, setUserText] = useState();

    const clearTextHandler = () => {
      setUserText("")
    }

    return (
        <div>
            <UserInput clearText={clearTextHandler} change={setUserText} userText={userText} />

            {userText
                ? userText.split(" ").map((char, index) => {
                      return (
                          <Grid container direction="row" justify="center" alignItems="center" key={Math.random()}>
                              {char.split("").map((char, index) => {
                                return <PhoneticChar char={char} key={Math.random()} />
                              })}
                          </Grid>
                      );
                  })
                : ""}
        </div>
    );
}


export default withRoot(App);
