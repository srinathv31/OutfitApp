import React from "react";
import { StyleSheet, Image } from "react-native";

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import shirt from '../assets/images/Sweatshirt.png';

export default function ShirtViewer() {
    return(
        <View>
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={shirt}></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 50,
        backgroundColor: 'rgba(128, 128, 0, 0.5)',
        padding: 35,
        borderRadius: 25
    },
    image: {
        width: 100, height: 100
    }
})