import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';

import SwipeableViews from 'react-swipeable-views';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from "@material-ui/core/Box";

import Match from "../Components/Match";


import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from "axios";
import {userService} from "../Services/user.service";


const useStyles = makeStyles((theme) => ({
    tabs:{
        backgroundColor: "#121521",
    },
    matchesTabs:{
        marginBottom: "30px",
        marginTop: "10px",

    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

async function getMatches(){
    let config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    }
    await axios.get(userService.config.apiUrl + 'matches', config).then(results => {
        return results.data
    })
}
class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOnline: null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {
        ChatAPI.subscribeToFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }
    componentWillUnmount() {
        ChatAPI.unsubscribeFromFriendStatus(
            this.props.friend.id,
            this.handleStatusChange
        );
    }
    handleStatusChange(status) {
        this.setState({
            isOnline: status.isOnline
        });
    }

    render() {
        if (this.state.isOnline === null) {
            return 'Загрузка...';
        }
        return (
            this.state.isOnline ? 'В сети' : 'Не в сети')
    }
}
}

export default function Matches() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [matches, setMatches] = useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    useEffect(() => {
        getMatches().then(data => {
            setMatches(data)
        });
    });

    const handleChangeIndex = (index) => {
        setValue(index);
        console.log(index);
    };
    return (
        <React.Fragment>
            {
                console.log(matches)
            }
            <Paper className={classes.matchesTabs}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    className={classes.tabs}
                >
                    <Tab label="Upcoming" {...a11yProps(0)} />
                    <Tab label="Results" {...a11yProps(1)} />
                </Tabs>
            </Paper>
            <Container maxWidth="md">
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Match></Match>
                        <Match></Match>
                        <Match></Match>
                        <Match></Match>
                        <Match></Match>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Match results={true}></Match>
                        <Match results={true}></Match>
                        <Match results={true}></Match>
                        <Match results={true}></Match>
                        <Match results={true}></Match>
                    </TabPanel>
                </SwipeableViews>
            </Container>
        </React.Fragment>
    );
}


