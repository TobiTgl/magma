import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

import csgoLogo from "../assets/csgo.png"
import lolLogo from "../assets/lol.png"

import { makeStyles, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    match:{
        padding: "20px 0px",
        marginBottom: "0.2rem",
        backgroundColor: "#1C202B",
        '&:hover': {
            background: "#2a2d35",
        },
        display: "flex",
        alignItems: "center",
    },
    gameSection:{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "29px",
        marginRight: "-0.1rem",
        paddingRight: "0.3rem",
        boxSizing: "border-box",
    },
    gameAvatar:{
        background: "#121521",
        padding: "5px",
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px"
    },
    gameText:{
        fontSize: "11px",
        fontWeight: 600,
        overflow: "hidden",
        paddingLeft: "5px",
        textAlign: "center"
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    medium:{
        width: "35px",
        height: "35px",
    },
    tournamentStage:{
    },
    teams:{
        height: "100%",
        display: "flex",
        alignContent: "center",
    },
    schedule:{
        height: "100%",
        display: "flex",
        alignItems: "center",
        paddingRight: "20px",
        justifyContent: "flex-end",
    },
    arrowGame:{
        height: "100%",
    },
    matchText:{
        fontWeight: "bold",
        fontSize: "13px",
    },
    team:{
        backgroundColor: "#383C4D",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
    },
    teamAgainst:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    bet:{
        borderRadius: "2px",
        padding: "2px 5px",
        backgroundColor: "#f4511e",
        fontWeight: "600",
        '&:hover': {
            background: "#ff6e40",
            cursor: "pointer"
        }
    },
    count:{
        fontSize: "15px",
        letterSpacing: "5px",
    },
    winner:{
        fontWeight: 700,
        color: "#fff",
    },
    looser:{
    },
    matchInfo:{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
    },
    live: {
        marginRight: "15px",
    }
}));

function crop(string){
    if (string)
    return string.replace('T',' ').replace('Z','')
}

function videogame(id){
    if (id===3){
        return csgoLogo
    }
    else if (id===1){
        return lolLogo
    }
}

export default function Matches(props) {
    const classes = useStyles();

    return (
            <Grid container alignItems="flex-end" className={classes.match} id={props.id}>
                <Grid md={3} className={classes.gameSection} item={true}>
                    <Grid md={2} className={classes.gameAvatar}>
                        <Avatar alt={props.team1_name} src={videogame(props.videogame)} className={classes.small} />
                    </Grid>
                    <Grid md={10} className={classes.tournamentStage}>
                        <Typography variant="body2" className={classes.gameText} color="textSecondary">
                            <p className={classes.matchInfo}>{props.tournament}</p>
                            <p className={classes.matchInfo}>{props.type}</p>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid md={6} className={classes.teams}>
                    <Grid md={5} className={classes.team}>
                        <Typography className={classes.matchText} color="textSecondary">
                            {props.team1_name}
                        </Typography>
                        <Avatar alt="Remy Sharp" variant="square" src={props.team1_pic} className={classes.medium} />
                    </Grid>
                    <Grid md={2} className={classes.teamAgainst}>
                        <Typography className={classes.gameText} color="textSecondary">
                            {
                                props.results ? (<div className={classes.count}><span className={classes.winner}>{props.team1_score}</span>:<span className={classes.looser}>{props.team2_score}</span></div>) : <div>VS</div>
                            }
                        </Typography>
                    </Grid>
                    <Grid md={5} className={classes.team}>
                        <Avatar alt={props.team2_name}  variant="square" src={props.team2_pic} className={classes.medium} />
                        <Typography className={classes.matchText} color="textSecondary">
                            {props.team2_name}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid md={3} className={classes.schedule}>
                    <Typography variant="body2" className={classes.gameText} color="textSecondary">
                        {crop(props.begin_at)}
                    </Typography>
                    {
                        !props.results &&
                        (
                            <React.Fragment>
                                {
                                    <a href={props.url} className={classes.live} target="_blank">
                                        <VideocamOutlinedIcon color="primary"></VideocamOutlinedIcon>
                                    </a>
                                }
                                <Button
                                    className={classes.bet}
                                    color="textPrimary"
                                    onClick={() => { console.log('clicked') }}
                                >
                                    Bet
                                </Button>

                            </React.Fragment>
                        )
                    }

                </Grid>
            </Grid>
    );
}


