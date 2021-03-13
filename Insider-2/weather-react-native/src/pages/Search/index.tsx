import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../../components/Menu';

import { DrawerScreenProps } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

function Search ({ navigation } : DrawerScreenProps<{Profile: any}>) {
  function toggleMenu() {
    navigation.toggleDrawer();
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Menu handlePress={toggleMenu}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  }
});

export default Search;
