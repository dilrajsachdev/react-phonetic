import React, { useState } from "react";
// import withRoot from "./withRoot";
import { Grid } from "@material-ui/core";

import PhoneticChar from "../Components/PhoneticChar";
import UserInput from "../Components/UserInput";
import Header from "../Components/UI/Header";

const Phonetic = () => {
    const [userText, setUserText] = useState();

    const clearTextHandler = () => {
      setUserText("")
    }

    return (
        <div>
        {/* <Switch>
                <Route path="/auth" component={asyncAuth} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch> */}
        <Header />
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


export default Phonetic;
