import React, {useCallback, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import axios from "axios";
import {userService} from "../Services/user.service";
import no_img from "../assets/noimg.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: "#121521",
    },
    gridList: {
        width: "100%",
        height: "auto",
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    logo: {
        width: "150px",
    },
    listTitle: {
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        marginTop: "40px",
    },
}));


function img(img){
    let i = ""
    if (img){
        i = img
    }
    else{
        i = no_img
    }
    return i
}



export default function SingleLineGridList() {
    const classes = useStyles();
    const [teams, setTeams] = useState([]);
    const config = {
        headers: {'Access-Control-Allow-Origin': '*'}
    }
    const getTeams = useCallback(() => {
        axios.get(userService.config.apiUrl + 'team', config).then((response) => {
            setTeams(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        getTeams()
    }, [getTeams])


    return (
        <Container maxWidth="md" className={classes.container}>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={4}>
                    {teams.sort().map((team) => (
                        <GridListTile key={team.id} id={team.id} cols={team.cols || 1}>
                            <Link href="#">
                                <img src={img(team.image_url)} alt={team.name} className={classes.logo} />
                            </Link>

                            <GridListTileBar
                                title={team.name}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton onClick={()=>localStorage.setItem('team', JSON.stringify(team))} color={"primary"} aria-label={`star ${team.name}`}>
                                        <StarBorderIcon className={classes.title} />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </Container>
    );
}