import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import MembershipHeader from '../../components/MembershipHeader';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from './../../theme';
import MembershipDirectory from '../../components/MembershipDirectory';

function Membership() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <MembershipHeader/>
            <MembershipDirectory/>
            <Footer />
        </ThemeProvider>
    );
}

export default Membership;