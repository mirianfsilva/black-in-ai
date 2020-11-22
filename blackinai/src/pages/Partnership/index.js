import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from './../../theme';
import PartnershipDirectory from '../../components/PartnershipDirectory';
import PartnershipHeader from '../../components/PartnershipHeader';
import Sponsors from '../../components/Sponsors';

function Partnership() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <PartnershipHeader/>
            <PartnershipDirectory/>
            <Sponsors/>
            <Footer />
        </ThemeProvider>
    );
}

export default Partnership;