import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import shoe from '../assets/images/Nikes.png';
import shoeData from '../assets/shoes.json'
import { FlatList } from "react-native-gesture-handler";

export default function ShoesViewer() { 
    
    return(
        <View>
            <View style={styles.container}>
                <Pressable
                onPress={onPressFunction}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1
                  })}>
                    <Image
                    style={styles.image}
                    source={shoe}></Image>
                </Pressable>
            </View>
        </View>
    );
}

function onPressFunction(){
    console.log("Pressed");
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 50,
        backgroundColor: '#EEE',
        padding: 10,
        borderRadius: 25
    },
    image: {
        width: 150, height: 150
    },
    name: {
        fontSize: 20
    }
});