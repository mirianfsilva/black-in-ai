import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { AppBar, Toolbar, SwipeableDrawer } from '@material-ui/core';
import logo from './../../assets/img/bai-logo.png';

export const toolbarStyles = (theme) => ({
    root: {
      height: 70,
      [theme.breakpoints.up('sm')]: {
        height: 50,
      },
    },
});


const styles = (theme) => ({
    title: {
        fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.light,
    },
    left: {
        flex: 1,
        color: theme.palette.primary.light,
        marginLeft: theme.spacing(10),
    },
    leftLinkActive: {
        color: theme.palette.primary.light,
    },
    right: {
        flex: 1,
        display: 'flex',
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(5),
    },
    linkSecondary: {
        color: theme.palette.secondary.primary,
    },
    flex: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
    },
    colorAppBar: {
        color : "#D8CCCC",
    }
});

function AppAppBar(props) {
    const { classes } = props;

    return (
        <div>
            <AppBar position="fixed" className={classes.colorAppBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}>
                        <Link underline="none" className={classes.left} href="/">
                            <img src={logo} width={80} alt="" />
                        </Link>
                    </div>
                    <React.Fragment>
                        <div className={classes.right}>
                            <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                href="/">
                                {'About'}
                            </Link>
                            <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                href="/">
                                {'Programs'}
                            </Link>
                            <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                href="/">
                                {'Membership'}
                            </Link>
                            <Link color="inherit" variant="h5" underline="none" className={classes.rightLink}
                                href="/">
                                {'Partnership'}
                            </Link>
                        </div>

                    </React.Fragment>
                </Toolbar>
            </AppBar>
            <div className={classes.placeholder} />
        </div>
    );
}

AppAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
