import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header() {
  return (
    <LinearGradient 
      style={styles.header} 
      colors={['#1ED6FF', '#97C1FF']}
    >
      <Text style={styles.date}>12/03/2021</Text>
      <Text style={styles.city}>Vitória da Conquista</Text>

      <Ionicons
        name="cloud"
        color="#FFF"
        size={150}
      />

      <Text style={styles.temperature}>30º</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width * .95,
    height: Dimensions.get('screen').height * .55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  date: {
    color: '#FFF',
    fontSize: 17
  },

  city: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },

  temperature: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold'
  }
});

export default Header;
