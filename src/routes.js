import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: 'Usuário',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                }}
                name="Home"
                component={Main}
            />
            <Stack.Screen
                options={{
                    title: 'Usuári',
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                }}
                name="User"
                component={User}
            />
        </Stack.Navigator>
    );
}

export default Routes;
