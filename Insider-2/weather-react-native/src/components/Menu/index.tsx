import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Menu() {
  function toggleMenu() {
    alert('Menu')
  }
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={toggleMenu}
    >
      <Feather 
        name="menu" 
        size={36}
        color="#373737"
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 10,
    zIndex: 100,
    height: 70,
    width: 70,
    backgroundColor: '#FFF',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    transform: [{ scale: 1.000001 }],

    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Menu;
