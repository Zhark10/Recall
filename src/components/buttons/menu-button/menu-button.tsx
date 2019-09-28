import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type Props = {
    title: string;
}

const PlayButton = ({title}: Props) => {
    return (
        <TouchableOpacity
            // style={styles.button}
            // onPress={this.onPress}
        >
            <Text>{title}</Text>
        </TouchableOpacity>

    )
};


export default React.memo(PlayButton);