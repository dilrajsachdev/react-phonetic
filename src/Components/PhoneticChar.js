import React from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";
import PhoneticAlphabet from "./PhoneticAlphabet";

const PhoneticChar = (props) => {
    const getPhoneticAlphabet = (str) => {
        const isLetter = str.length === 1 && str.match(/[a-z]/i);
        if (isLetter) {
            return PhoneticAlphabet[str.toUpperCase()];
        } else {
            return str;
        }
    };

    return (
        <Paper elevation={3}  className={props.classes.paper}>
            <Typography variant="h5">{getPhoneticAlphabet(props.char)}</Typography>
        </Paper>
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
    },
    paper: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
    },
});

export default withStyles(styles)(PhoneticChar);
