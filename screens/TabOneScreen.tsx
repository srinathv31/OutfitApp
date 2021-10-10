import * as React from 'react';
import { StyleSheet } from 'react-native';
import ListOfShoes from '../assets/shoes.json'

import EditScreenInfo from '../components/EditScreenInfo';
import ShirtViewer from '../components/ShirtView';
import PantsViewer from '../components/PantsView';
import ShoesViewer from '../components/ShoesView';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Clothes</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView>
        <ShirtViewer></ShirtViewer>
        <PantsViewer></PantsViewer>
        <ShoesViewer></ShoesViewer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  },
  separator: {
    marginTop: 20,
    marginBottom: 30,
    height: 1,
    width: '80%',
  },
});
