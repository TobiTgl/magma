import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import clsx from "clsx"
import csgoLogo from "../assets/csgo.png"
import Avatar from "@material-ui/core/Avatar";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
    },
    cardMedia: {
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
    },
    cardContent: {
        flex: '1 0 auto',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    tournament:{
        background: "#121521",
        marginBottom: "15px",
        boxShadow: "none",
    },
    logo:{
        background: "#1c202b",
        borderRadius: "35px",
        padding: "5px 0px",
        height: "150px",
        marginTop: "20px",
    },
    game:{
        width: "100%",
        background: "#f4511e61",
        padding: "0px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        marginRight: "15px",
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Tournaments() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.cardGrid}  maxWidth="md">
                {/* End hero unit */}
                <Grid container>
                    <Typography variant="h2" className={classes.game}>
                        <Avatar alt="Remy Sharp" variant="square" src={csgoLogo} className={classes.avatar} />
                        CS: GO
                    </Typography>
                    {cards.map((card) => (
                        <Grid className={classes.tournament} item key={card} xs={12} sm={12} md={12}>
                            <Card className={clsx(classes.card,classes.tournament)}>
                                <Grid md={4} className={classes.logo}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://img.abiosgaming.com/competitors/Natus-Vincere-Navi-new-logo.png"
                                        title="Image title"
                                    />
                                </Grid>
                                <Grid md={8}>
                                    <CardContent className={classes.cardContent} color="primary">
                                        <Typography gutterBottom variant="h5" component="h2">
                                            NA'VI
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                </Grid>


                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}