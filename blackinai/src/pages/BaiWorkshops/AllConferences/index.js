import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Workshops from '../../../components/Workshops';
import Loader from '../../../loader';
import theme from './../../../theme';

function Conferences() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <CssBaseline />
            <Navbar/>
            <Workshops/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Conferences;