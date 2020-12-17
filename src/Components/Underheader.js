import React, { Component, useState } from "react"
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {withStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import TournamentsSelect from "./TournamensSelect";

import csgoLogo from "../assets/csgo.png"
import lolLogo from "../assets/lol.png"


const styles = theme => ({
    underHeader: {
        height: "auto",
        backgroundColor: "#1C202B",
        //position: "fixed",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        transition: "transform 0.2s linear",
        zIndex: 2,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.35)",
        top: "64px",
        left: 0,
        paddingTop: "20px",
        paddingBottom: "20px",
        alignItems: "center",
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        color: "#898a90",
    },
    divider: {
        height: 28,
        margin: 4,
    },
    search: {
        position: "relative",
        outline: 0,
        color: "#FFF",
        backgroundColor: "transparent",
        border: "2px solid #272935",
        zIndex: 0,
    }
});

class Underheader extends Component {
    constructor(props) {
        super(props);
        this.handleClickAll = this.handleClickAll.bind(this)
        this.handleClickCS = this.handleClickCS.bind(this)
        this.handleClickLol = this.handleClickLol.bind(this)
    }

    handleClickAll() {
        this.props.handleClickAll()
    }

    handleClickCS() {
        this.props.handleClickCS()
    }

    handleClickLol() {
        this.props.handleClickLol()
    }

    render() {
        const { classes } = this.props;
        return (
            <Box className={classes.underHeader} color="textBackground">
                <div className={classes.root}>
                    <Chip
                        size="medium"
                        label="All games"
                        onClick={this.handleClickAll}
                    />
                    <Chip
                        size="medium"
                        avatar={<Avatar alt="cs:go" src={csgoLogo} />}
                        label="CS:GO"
                        onClick={this.handleClickCS}
                        color="primary"
                    />
                    <Chip
                        size="medium"
                        avatar={<Avatar alt="cs:go" src={lolLogo} />}
                        label="League of Legends"
                        onClick={this.handleClickLol}
                        color="primary"
                    />
                </div>
                {
                    /*
                    <Paper component="form" className={classes.search}>
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Paper>                     
                     */
                }

                {
                    //<TournamentsSelect></TournamentsSelect>
                }
            </Box>
        )
    }
}

export default withStyles(styles)(Underheader)