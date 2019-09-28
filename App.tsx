import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/views/HomeScreen/HomeScreen";
import HistoryScreen from "./src/views/HistoryScreen/HistoryScreen";

(console as any).disableYellowBox = true;

const stackNavigationConfig: { [key: string]: any } = {
  headerMode: "none"
};

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  History: { screen: HistoryScreen }
}, stackNavigationConfig);

const App = createAppContainer(MainNavigator);

export default App;
