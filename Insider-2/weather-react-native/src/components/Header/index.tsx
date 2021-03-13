import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
interface headerParams {
  currently: string,
  condition: {
    condition: string,
    conditionTitle: string 
  },
  city: string,
  date: string,
  temp: number
}

type iconParams = {
  iconName: keyof typeof Ionicons.glyphMap;
}

function Header({ currently, condition, city, date, temp } : headerParams) {
  const [background, setBackground] = useState(['#1ED6FF', '#97C1FF']);
  const [materialIconName, setMaterialIconName] = useState<iconParams>({iconName: "cloud"});
  const [iconColor, setIconColor] = useState('#FFF');
  
  useEffect(() => {
    if(currently === 'noite') {
      setBackground(['#0C3741', '#0F2F61']);
    }

    switch (condition.condition) {
      case 'clear_day':
        setMaterialIconName({ iconName: 'partly-sunny' });
        setIconColor('#FFB300'); 
        break;
      case 'rain':
        setMaterialIconName({ iconName: 'rainy' });
        setIconColor('#FFF')
        break;
      case 'storm':
        setMaterialIconName({ iconName: 'thunderstorm' });
        setIconColor('#FFF')
    }
  }, [currently])
  
  return (
    <LinearGradient 
      style={styles.header} 
      colors={background}
    >
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.city}>{city}</Text>

      <Ionicons
        name={materialIconName.iconName}
        color={iconColor}
        size={150}
      />

      <Text style={styles.temperature}>{temp}º</Text>
      <Text style={styles.conditionTitle}>{condition.conditionTitle}</Text>
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
  },

  conditionTitle: {
    color: 'white',
    fontSize: 18
  }
});

export default Header;
