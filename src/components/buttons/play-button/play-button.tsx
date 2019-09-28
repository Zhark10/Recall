import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from "./play-button-styles";

type Props = {
    onClick: () => void,
}

const PlayButton = ({onClick}: Props) => {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onClick}
        >
            <Text style={styles.title}>Играть</Text>
        </TouchableOpacity>

    )
};

// PlayButton.defaultProps = {
//     navigation: {},
// };

export default React.memo(PlayButton);