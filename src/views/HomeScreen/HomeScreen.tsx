import * as React from "react";
import {MenuButton, PlayButton} from "../../components/buttons";
import {View} from "react-native";
import styles from "./HomeScreen-styles";
import {Rules, Settings} from "../../assets/icons";

type Props = {
    navigation: any;
}

const HomeScreen = ({navigation: {navigate}}: Props) => {
    const onClickPlay = () => navigate('History');
    const onClickSettings = () => navigate('Settings');
    const onClickRules = () => navigate('Rules');

    return (
        <View style={styles.screen}>
            <View style={styles.buttonWrapper}>
                <MenuButton onClick={onClickRules} source={Rules} title={"Правила"}/>
                <PlayButton onClick={onClickPlay}/>
                <MenuButton onClick={onClickSettings} source={Settings} title={"Настройки"}/>
            </View>
        </View>
    )
};

export default React.memo(HomeScreen)