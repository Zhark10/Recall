import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from "./play-button-styles";

type Props = {}

const PlayButton = (props: Props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            // onPress={this.onPress}
        >
            <Text>Играть</Text>
        </TouchableOpacity>

    )
};


export default React.memo(PlayButton);