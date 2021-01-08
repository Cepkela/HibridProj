import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors

export default function Details({currentWeather, unitsSystem}) {
    const{
        main:{feels_like, humidity, pressure},
        wind:{speed},
    } = currentWeather

    const windSp = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` :`${Math.round(speed)} miles/h`

    return (
        <View style={styles.details}>
            <View style={styles.detailsRow}>
                <View style={{...styles.detailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
                    <View style={styles.detailsRow}>
                    <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR}/>
                    <Text>Feels like: </Text>
                    <Text style={styles.txtSec}>{feels_like} °</Text>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                <View style={styles.detailsRow}>
                <MaterialCommunityIcons name="water" size={35} color={PRIMARY_COLOR}/>
                    <Text>Humidity: </Text>
                    <Text style={styles.txtSec}>{humidity} %</Text>
                    </View>
                </View>
            </View>
            <View style={{...styles.detailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
                <View style={{...styles.detailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR}}>
                    <View style={styles.detailsRow}>
                    <MaterialCommunityIcons name="weather-windy" size={24} color={PRIMARY_COLOR}/>
                    <Text>Wind Speed: </Text>
                    <Text style={styles.txtSec}>{windSp}</Text>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                <View style={styles.detailsRow}>
                <MaterialCommunityIcons name="speedometer" size={25} color={PRIMARY_COLOR}/>
                    <Text>Pressure :</Text>
                    <Text style={styles.txtSec}>{pressure} hPa</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details:{
        marginTop:'auto',
        margin:15,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
    detailsRow:{
        right:2,
        padding:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent :'space-between'
    },
    detailsBox:{
        flex:1,
        padding:10,
    },
    txtSec:{
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight:'700',
        margin:7,
    }

})