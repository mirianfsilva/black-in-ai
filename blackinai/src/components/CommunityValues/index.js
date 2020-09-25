import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from './../Typography';
import backgroundImage from './../../assets/img/appCurvyLines.png';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.light,
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 55,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
});

const valueslist = [
    { id: 1, title: '201*' , 
        text: 'BAI founded. Also give a brief info about how that happened e.g. where and first steps.'},
    { id: 2, title: '5999' , 
        text: 'We’ve grown from this number to that number of members over this period of time.'},
    { id: 3, title: '12+', 
        text: 'Number of workshops held or some other metric that shows how far we’ve come'},
    { id: 4, title: '4000%',
        text: 'Increase in number of Blacks participating in major AI conferences globally.'},
];

function CommunityValues(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <img
                    src={backgroundImage}
                    className={classes.curvyLines}
                />
                <Grid container spacing={5}>
                    {valueslist.map(key => (
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                {key.image}
                                <Typography variant="h3" className={classes.title}>
                                    {key.title}
                                </Typography>
                                <Typography variant="h5">
                                    {key.text}
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

CommunityValues.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunityValues);
