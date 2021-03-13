import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { condition } from '../../utils/conditions';

interface forecastItemParams {
  date: string;
  weekday: string;
  max: number;
  min: number;
  description: string;
  condition: string;
}

interface forecastParams {
  forecastItem: forecastItemParams
}

function Forecast ({ forecastItem } : forecastParams) {
  let { color, materialIconName } = condition(forecastItem.condition);
  
  return (
    <View style={styles.forecastContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{forecastItem.date}</Text>
        <Text style={styles.weekday}>{forecastItem.weekday}</Text>
      </View>

      <Ionicons
        name={materialIconName}
        size={24}
        color={color}
      />

      <View style={styles.minMaxContainer}>
        <Text style={styles.min}>{forecastItem.min}º</Text>
        <Text style={styles.max}>{forecastItem.max}º</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  forecastContainer: {
    backgroundColor: '#FFF',
    marginLeft: 12,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  date: {
    fontSize: 14
  },

  weekday: {
    fontWeight: "700"
  },
  
  minMaxContainer: {
    alignItems: 'center'
  },
  
  min: {
    fontSize: 15
  },
  
  max: {
    fontSize: 18,
    fontWeight: 'bold'
  },

});

export default Forecast;
