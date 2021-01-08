import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function Reload({load}) {
    return (
        <View style={styles.reload}>
            <FontAwesome onPress={load} name="refresh" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    reload:{
        position:'absolute',
        top:50,
        right:30
    }
})
