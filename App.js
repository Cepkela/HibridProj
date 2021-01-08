import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import Info from './components/Info'
import UPicker from './components/Picker'
import Reload from './components/Reload'
import Details from './components/Details'

const WEATHER_API = '2ab3d117bc621fedee19ada3a08768e8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [unitsSystem])
  async function load(){
    try{
      let{ status } = await Location.requestPermissionsAsync()

      if(status !== 'granted'){
        setErrorMessage('Acces to location is needed to run the app')
        return 
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords

      const weatherURL = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API}`;

      const response = await fetch(weatherURL)

      const result = await response.json()

      if (response.ok) {
        setCurrentWeather(result)
      } else{
        setErrorMessage(result.message)
      }

      //alert(`Latitude: ${latitude}, Longitude: ${longitude}`)
    }
    catch(error){
      setErrorMessage(error.message)
    }
  }
  if (currentWeather) {
    const{ main : {temp} } = currentWeather
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UPicker unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>
          <Reload load={load}/>
          <Info currentWeather={currentWeather}/>
        </View>
        <Details currentWeather={currentWeather} unitsSystem={unitsSystem}/>
      </View>
    );
  }else if(errorMessage){
    return(
    <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  else{
    return(
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <StatusBar style='auto'/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main:{
    justifyContent:'center',
    flex:1
  }
});
