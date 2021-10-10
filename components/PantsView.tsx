import React from "react";
import { StyleSheet, Image } from "react-native";

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import pants from '../assets/images/CargoPants.png';

export default function PantsViewer() {
    return(
        <View>
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={pants}></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 50,
        marginVertical: 25,
        backgroundColor: 'rgba(255, 127, 80, 0.5)',
        padding: 35,
        borderRadius: 25
    },
    image: {
        width: 100, height: 100
    }
})