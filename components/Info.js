import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors} from "../index";

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors


export default function Info({currentWeather}) {
    const {main : {temp}, weather:[details], name} = currentWeather
    const{icon, main, description} =  details
    const urlIc = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View style={styles.info}>
            <Text style={{fontSize:20}}>{name}</Text>
            <Image style={styles.icon} source={{uri: urlIc}}/>
            <Text style={styles.textPri}>{temp}°</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.textSec}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info:{
        alignItems:'center'
    },
    description:{
        fontSize:20,
        textTransform:'capitalize'
    },
    icon:{
        width: 150,
        height: 150
    },
    textPri:{
        fontSize:50,
        color:PRIMARY_COLOR,
    },
    textSec:{
        fontSize:30,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10,
    }
})
