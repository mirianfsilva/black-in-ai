import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../theme';
import Header from '../../components/Header';
import CommunityValues from '../../components/CommunityValues';
import TeamMembers from '../../components/TeamMembers';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Header/>
            <CommunityValues/>
            <TeamMembers/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Home;