import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BaseButton } from 'react-native-gesture-handler';
interface menuParams {
  handlePress: () => void,
}

function Menu({ handlePress } : menuParams) {
  const toggleMenu = handlePress;
  
  return (
    <BaseButton 
      style={styles.container}
      onPress={() => toggleMenu()}
      rippleColor="transparent"
    >
      <Feather 
        name="menu" 
        size={36}
        color="#373737"
        style={styles.buttonIcon}
      />
    </BaseButton>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 100,
    height: 70,
    width: 70,
  },

  buttonIcon: {
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
    borderRadius: 30,
    borderTopLeftRadius: 0,
    textAlign: 'center',
    textAlignVertical: 'center',

    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    },
  }
})

export default Menu;
