import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './../Button';
import Typography from './../Typography';
import HeaderLayout from './../HeaderLayout';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
    background: {
        backgroundPosition: 'center',
    },
    h5: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(5),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function Header(props) {
    const { classes } = props;

    return (
        <HeaderLayout backgroundClassName={classes.background}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography color="inherit" align="left" variant="h4" marked="center">
                        Black in AI is a place for sharing ideas,
                        fostering collaborations and discussing
                        initiatives to increase the presence of
                        Black people in the field of Artificial
                        Intelligence. 
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    
                </Grid>
            </Grid>
        </HeaderLayout>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
