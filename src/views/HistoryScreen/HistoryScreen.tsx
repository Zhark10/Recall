import * as React from "react";
import {Text, View} from "react-native";
import styles from "./HistoryScreen-styles";

const HistoryScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Заголовок истории</Text>
        </View>
    )
};

export default React.memo(HistoryScreen)