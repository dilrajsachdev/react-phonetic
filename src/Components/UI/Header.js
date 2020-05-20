import React from "react";
import { withStyles } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import CategoryIcon from '@material-ui/icons/Category';

const Header = (props) => {
    return (
        <div className={props.classes.root}>
            <AppBar position="static" color="primary" >
                <Toolbar>
                    {/* <IconButton edge="start" className={props.classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={props.classes.title}>
            News
          </Typography> */}

                    <Typography variant="h4" className={props.classes.title}>
                       <CategoryIcon /> D 
                    </Typography>
                    {/* <Typography variant="h4" className={props.classes.title} >PHONETIC TEXT</Typography> */}

                    {/* <Button color="inherit">Login</Button> */}
                    <Link to="/" className={props.classes.link}>Phonetic</Link> 
                    <Link to="/meme" className={props.classes.link}>Random Meme</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        // textAlign: 'center',
    },
    link: {
        color: '#fff',
        textDecoration: 'none', 
        marginRight: theme.spacing(2),
    }
});

export default withStyles(styles)(Header);
