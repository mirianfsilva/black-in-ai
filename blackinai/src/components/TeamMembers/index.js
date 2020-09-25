import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(30),
        display: 'flex',
        position: 'relative',
    },
    more: {
        marginTop: theme.spacing(4),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: theme.spacing(0, 5),
    },
});

const teamlist = [
    { id: 1, 
        image: '',
        title: 'Team member’s name', subtitle: 'Designation',  
        bio: 'Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text',
        icon_1:  <FontAwesomeIcon icon={["fab", "linkedin"]} />, 
        icon_2:  <FontAwesomeIcon icon={["fab", "twitter"]} />, 
    }
];

function TeamMembers(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Typography variant="h4" marked="center" align="center" component="h2">
                    Our Team
                </Typography>
                <Grid container spacing={4}>
                    
                </Grid>
            </Container>
        </section>
    );
}

TeamMembers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamMembers);
