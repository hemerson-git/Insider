import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import image from "./src/assets/images/logo.png";

export default function App() {
  const [pass, setPass] = useState(null);
  
  function generatePass() {
    
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} style={styles.logo}/>

      <Text style={styles.title}>
        12 Caracteres
      </Text>

      <View style={styles.area}>
        <Slider 
          style={styles.slider}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#F00"
          maximumTrackTintColor="#000"
        />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={generatePass}
      >
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <View style={styles.area}>
        <Text style={styles.password}>123412341234</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3FF'
  },

  logo: {
    marginBottom: 60
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  area: {
    marginVertical: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 8
  },
  
  slider:  {
    height: 50
  },

  button: {
    backgroundColor: '#FFA200',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 8
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },

  password: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16
  }
});
