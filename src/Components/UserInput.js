import React from "react";
import { Paper, Input, withStyles, Typography, FormControl, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const UserInput = (props) => {
    return (
        <div className={props.classes.root}>
            <Typography variant="h4" align="center">PHONETIC TEXT</Typography>
            <Paper className={props.classes.paper}>
                <IconButton onClick={() => props.clearText()}>
                    <ClearIcon />
                </IconButton>
                <FormControl margin="normal" fullWidth required>
                    <Input
                        autoFocus
                        placeholder="Enter text"
                        inputProps={{ "aria-label": "description" }}
                        onChange={(event) => props.change(event.target.value)}
                        value={props.userText}
                    />
                </FormControl>
            </Paper>
        </div>
    );
};

const styles = (theme) => ({
    root: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up("md")]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
        },
        align: "center",
    },
    paper: {
        marginTop: theme.spacing(2),
        display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
});

export default withStyles(styles)(UserInput);

// export default UserInput
