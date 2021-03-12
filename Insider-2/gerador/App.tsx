import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

import image from "./src/assets/images/logo.png";
import Popover from './src/components/Popover/Modal';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App() {
  const [pass, setPass] = useState('');
  const [passSize, setPassSize] = useState(8);
  const [popoverVisible, setPopoverVisible] = useState(false);
  
  function generatePass() {
    let newPass = new Array(passSize).fill('').map(() => String.fromCharCode(Math.random()*86+33)).join("")

    setPass(newPass);
  }
  
  function copyToClipboard() {
    Clipboard.setString(pass);
    setPopoverVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Image source={image} style={styles.logo}/>

      <Text style={styles.title}>
        {passSize} Caracteres
      </Text>

      <View style={styles.area}>
        <Slider 
          style={styles.slider}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor="#F00"
          maximumTrackTintColor="#000"
          value={passSize}
          onValueChange={ value => setPassSize(Number(value.toFixed(0)))}
          thumbTintColor="#000"
        />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={generatePass}
      >
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {!!pass &&
        <TouchableWithoutFeedback
          onPress={copyToClipboard}
        >
          <View style={styles.area}>
            <Text style={styles.password}>{pass}</Text>
          </View>
        </TouchableWithoutFeedback>
      }

      <Popover visible={popoverVisible} setVisible={setPopoverVisible} hideTime={2500}/>
    </SafeAreaView>
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
  },

  passwordArea: {
    backgroundColor: '#f00',
    height: 50,

  }
});
