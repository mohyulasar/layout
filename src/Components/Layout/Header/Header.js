import React from 'react';
import NavBar from './NavBar';
import Heading from './Heading';
import CustomTheme from '.././CustomTheme';
import { ThemeProvider } from '@material-ui/core/styles';

const Header = () => {
    return (
        <div>
            <ThemeProvider theme={CustomTheme}>
            <Heading/>
            <NavBar/>
            </ThemeProvider>
        </div>
    );
};

export default Header;