import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
interface weatherProps {
  weather: {
    windSpeed: string,
    sunrise: string,
    sunset: string,
    humidity: number
  }
}

function Conditions({ weather } : weatherProps) {
  return (
    <View style={styles.conditionsContainer}>
      <View style={styles.conditionItem}>
        <Feather name='wind' size={23} color="#1ED6FF"/>
        <Text>{weather.windSpeed}</Text>
      </View>

      <View style={styles.conditionItem}>
        <MaterialCommunityIcons name='weather-sunset-up' size={23} color="#1ED6FF"/>
        <Text>{weather.sunrise}</Text>
      </View>

      <View style={styles.conditionItem}>
        <MaterialCommunityIcons name='weather-sunset-down' size={23} color="#1ED6FF"/>
        <Text>{weather.sunset}</Text>
      </View>

      <View style={styles.conditionItem}>
        <Feather name='droplet' size={23} color="#1ED6FF"/>
        <Text>{weather.humidity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conditionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    marginTop: 15,
    padding: 10,
    backgroundColor: '#FFF',
    width: "95%",
    borderRadius: 8
  },

  conditionItem: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Conditions;
