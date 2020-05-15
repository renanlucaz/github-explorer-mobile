import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    title: 'Usuários',
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
                options={({ route }) => ({
                    title: route.params.name,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                })}
                name="User"
                component={User}
            />
            <Stack.Screen
                options={{
                    title: 'Repository',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                }}
                name="Repository"
                component={Repository}
            />
        </Stack.Navigator>
    );
}

export default Routes;
