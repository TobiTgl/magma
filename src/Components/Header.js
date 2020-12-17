import React, { Component, useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, withRouter
} from "react-router-dom";

import clsx from "clsx"
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import UILink from '@material-ui/core/Link';
import logo from "../assets/volcano.svg"
import logo2 from "../assets/logo2.png"
import {userService}  from "../Services/user.service"

import { withStyles } from '@material-ui/core/styles';
//import Auth from '../services/auth'

const styles = theme => ({
    mainHeader: {
       backgroundColor: "#0f111b",
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        fontFamily: "cursive",
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: "#fff",
        textDecoration: "none",
        '&:hover': {
            color: "#f4511e",
            cursor: "pointer"
        },
        textTransform: "uppercase",
    },
    nav: {
        flexGrow: 1,
        textAlign: "center",
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    logoLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
    },
    alink: {
        color: "#fff",
        textDecoration: "none",
    },
});


class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        userService.logout();
    }

    render() {
        const user = userService.getCredentials()
        const { classes } = this.props;
        return (
            <React.Fragment>
                <AppBar position="static" elevation={0} className={classes.mainHeader}>
                    <Toolbar>
                        <Link to="/" className={classes.logoLink}>
                            <img src={logo2} className="logo" />
                            <Typography variant="h6" color="inherit" className={classes.toolbarTitle} noWrap>
                                Magma
                            </Typography>
                        </Link>
                        <nav className={classes.nav}>
                            <Link variant="button" color="textPrimary" to="/" className={classes.link}>
                                Home
                            </Link>
                            <Link variant="button" color="textPrimary" to="/tournaments" className={classes.link}>
                                Tournaments
                            </Link>
                            <Link variant="button" color="textPrimary" to="/teams" className={classes.link}>
                                Teams
                            </Link>
                            <Link variant="button" color="textPrimary" to="/bets" className={classes.link}>
                                Bets
                            </Link>
                        </nav>
                        <Button  color="default">
                            {userService.getCredentials() &&
                                (
                                    <Link className={classes.alink} onClick={this.handleClick}>
                                        Logout
                                    </Link>
                                )
                            }
                            {!userService.getCredentials() &&
                            (
                                <Link className={classes.alink} to={"/signin"}>
                                    Login
                                </Link>
                            )
                            }

                        </Button>
                        <Button color="primary" variant="contained">
                            {userService.getCredentials() &&
                            (
                                <Link className={classes.alink} to={"/profile"}>
                                    Profile
                                </Link>
                            )
                            }
                            {!userService.getCredentials() &&
                            (
                                <Link className={classes.alink} to={"/signup"}>
                                    Sign Up
                                </Link>
                            )
                            }

                        </Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

//export default withRouter(withStyles(styles)(Header))
export default (withStyles(styles))(withRouter(Header))