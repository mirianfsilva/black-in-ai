import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './../Button';
import Typography from './../Typography';
import HeaderLayout from './../HeaderLayout';
import { Grid } from '@material-ui/core';

const styles = (theme) => ({
    root:{
        display: 'flex',
        overflow: 'hidden',
    },
    background: {
        backgroundPosition: 'center',
    },
    more: {
        marginTop: theme.spacing(2),
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
});

function Header(props) {
    const { classes } = props;

    return (
        <HeaderLayout backgroundClassName={classes.background}>
            <Grid container spacing={12}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography align="left" variant="h4" marked="center">
                            Black in AI is a place for sharing ideas,
                            fostering collaborations and discussing
                            initiatives to increase the presence of
                            Black people in the field of Artificial
                            Intelligence.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>            
                    </Grid>
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
