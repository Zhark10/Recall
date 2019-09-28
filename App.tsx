import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/views/HomeScreen/HomeScreen";
import HistoryScreen from "./src/views/HistoryScreen/HistoryScreen";

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: HistoryScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
