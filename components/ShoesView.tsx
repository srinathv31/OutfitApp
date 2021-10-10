import React from "react";
import { StyleSheet, Image, Pressable, ImageBackground } from "react-native";

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import shoe from '../assets/images/Nikes.png';
import shoeData from '../assets/shoesData'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

export default function ShoesViewer() { 
    
    const renderShoeItem = ({item}) => {
        return (
            <View style={styles.container}>
                <Pressable 
                onPress={onPressFunction}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1
                    })}>
                    <ImageBackground
                    source={item.image}
                    style={styles.image}>
                    </ImageBackground>
                </Pressable>
            </View>
        )
    }

    return(
        <View> 
            <FlatList
            data={shoeData}
            renderItem={renderShoeItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}/>
        </View>
    );
}

function onPressFunction(){
    console.log("Pressed");
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 10,
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