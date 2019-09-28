import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import styles from "./menu-button-styles";

type Props = {
    title: string;
    onClick: () => void;
    source: ImageSourcePropType;
}

const MenuButton = ({title, source, onClick}: Props) => {
    // const onClick = () => navigate('History');

    return (
        <TouchableOpacity
            style={styles.wrapper}
            onPress={onClick}
        >
            <Image source={source}/>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

    )
};

MenuButton.defaultProps = {
    navigation: {},
};

export default React.memo(MenuButton);