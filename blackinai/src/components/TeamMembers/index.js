import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Divider, Card, CardContent, Button, Avatar, Link} from '@material-ui/core/';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// images 
import image from './../../assets/img/profile.png';
import charles from './../../assets/img/team/charles.jpeg';
import flora from './../../assets/img/team/flora.jpeg';
import foutse from './../../assets/img/team/foutse.jpg';
import ignatius from './../../assets/img/team/ignatius.jpg';
import nwamaka from './../../assets/img/team/nwamaka.jpg';
import salomey from './../../assets/img/team/salomey.jpg';
import tobi from './../../assets/img/team/tobi.jpg';
import victor from './../../assets/img/team/victor.jpg';
import mirian from './../../assets/img/team/mirian.png';
import krystal from './../../assets/img/team/krystal.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    more: {
        marginTop: theme.spacing(5),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: theme.spacing(0, 5),
    },
    avatarSize: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    icon: {
        alignItems: 'left',
        padding: theme.spacing(1),
        color: theme.palette.primary.dark,
    },
    card: {
        height: '20px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8),
    },
    divider: {
        backgroundColor: theme.palette.secondary.dark,
        margin: theme.spacing(2, 2),
        flexItem: true,
        width:"140vh",
        height: "1px",
    }
});

const advisoryBoard = [
    {
        image: image,
        name: 'Charles Isbell',
        link: 'https://webdocs.cs.ualberta.ca/~vsilva/',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Brandeis Marshall', 
        link: 'https://www.lancaster.ac.uk/scc/about-us/people/ignatius-ezeani',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Makinde Adeagbo', 
        link: 'https://twitter.com/yuehgoh',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Rodney Sampson', 
        link: 'https://twitter.com/ftasse',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Ayanna Howard', 
        link: 'https://www.linkedin.com/in/tobi-olatunji-md',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: image,
        name: 'Haben Girma', 
        link: 'https://www.linkedin.com/in/salomey-osei-4b08a5b8/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1.5x"/>,
    },
];

const blackinAIBoard = [
    {
        image: image,
        name: 'Timnit Gebru',
        link: 'https://webdocs.cs.ualberta.ca/~vsilva/',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Rediet Abebe', 
        link: 'https://www.lancaster.ac.uk/scc/about-us/people/ignatius-ezeani',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Sanmi Koyejo', 
        link: 'https://twitter.com/yuehgoh',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Ezinne Nwanko', 
        link: 'https://twitter.com/ftasse',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Devin Guillory', 
        link: 'https://www.linkedin.com/in/tobi-olatunji-md',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: image,
        name: 'Joyce Williams', 
        link: 'https://www.linkedin.com/in/salomey-osei-4b08a5b8/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1.5x"/>,
    },
];

const communityTeam = [
    {
        image: image,
        name: 'Hassan Kane',
        link: 'https://webdocs.cs.ualberta.ca/~vsilva/',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: krystal,
        name: 'Krystal Maughan', 
        link: 'https://www.lancaster.ac.uk/scc/about-us/people/ignatius-ezeani',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
    },
    {
        image: image,
        name: 'Isaac Donis', 
        link: 'https://twitter.com/yuehgoh',
        icon: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
    },
];

function TeamMembers(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" className={classes.title}>
                            Our Team
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5" marked="center" align="center" className={classes.title}>
                            Advisory Board
                        </Typography>
                    </Grid> 
                    {advisoryBoard.map((tile) => (
                        <Grid item xs={12} md={2}>
                            <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                            <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                                {tile.name} <Link className={classes.icon} href={tile.link}>{tile.icon}</Link>
                            </Typography>
                        </Grid>
                    ))}

                    <Divider variant="middle" className={classes.divider}/>

                    <Grid item xs={12}>
                        <Typography variant="h5" marked="center" align="center" className={classes.title}>
                            Black in AI Board
                        </Typography>
                    </Grid> 
                    {blackinAIBoard.map((tile) => (
                        <Grid item xs={12} md={2}>
                            <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                            <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                                {tile.name} <Link className={classes.icon} href={tile.link}>{tile.icon}</Link>
                            </Typography>
                        </Grid>
                    ))}

                    <Divider variant="middle" className={classes.divider}/>
                    
                    <Grid item xs={12}>
                        <Typography variant="h5" marked="center" align="center" className={classes.title}>
                            Community Team
                        </Typography>
                    </Grid> 
                    {communityTeam.map((tile) => (
                        <Grid item xs={12} md={2}>
                            <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                            <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                                {tile.name} <Link className={classes.icon} href={tile.link}>{tile.icon}</Link>
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>

    );
}

TeamMembers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamMembers);