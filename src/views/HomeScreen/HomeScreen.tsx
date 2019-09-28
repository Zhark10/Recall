import * as React from "react";
import {PlayButton} from "../../components/buttons";
import {View} from "react-native";
import styles from "./HomeScreen-styles";

const HomeScreen = () => {
    return (
        <View style={styles.wrapper}>
            <PlayButton/>
        </View>)
}

export default React.memo(HomeScreen)