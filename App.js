import React from 'react'
import { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { PageIntroComponent } from './screens/Page.Intro';
import { PageListComponent } from './screens/Page.List';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';


const AppNavigator = createStackNavigator({
    IntroScreen: { screen: PageIntroComponent },
    ListScreen: { screen: PageListComponent },
    initialRouteName: 'IntroScreen',
});

/*export default class App extends Component {

    render() {
        return (
            <AppNavigator />
        );
    }
}*/

export default createAppContainer(AppNavigator);