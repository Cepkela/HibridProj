import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import{ Picker } from '@react-native-community/picker'

export default function UPicker({unitsSystem, setUnitsSystem}) {
    return (
        <View style={styles.system}>
            <Picker selectedValue={unitsSystem} onValueChange={(item)=> setUnitsSystem(item)}>
                <Picker.Item label = "C°" value="metric" />
                <Picker.Item label = "F°" value="imperial"/>
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    system:{
        position:"absolute",
        top:40,
        left:20,
        height:50,
        width:100,
    },
    systemTxt:{
        fontSize:30,
        fontFamily:"Ebrima"
    }
})
