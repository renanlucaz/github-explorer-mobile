import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './routes';

function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Routes />
        </NavigationContainer>
    );
}

export default App;
