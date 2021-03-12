import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

interface PopoverProps {
  visible: boolean,
  setVisible: (visible: boolean) => void,
  hideTime: Number
}

function Popover({ visible, setVisible, hideTime = 1000} : PopoverProps) {

  useEffect(() => {
    if(visible) {
      setTimeout(() => {
        setVisible(false);
      }, hideTime);
    }
  }, [visible]);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.popoverContainer}>
        <Text style={styles.popoverText}>Senha Copiada para o Clipboard</Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  popoverContainer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    justifyContent: 'center',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
    borderRadius: 8,
  },
  
  popoverText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default Popover;
