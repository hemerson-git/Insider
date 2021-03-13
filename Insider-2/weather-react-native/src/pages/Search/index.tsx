import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Emoji from 'react-native-emoji';

import { Dimensions, Keyboard, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import hgAPI, { apiKey } from '../../services/api/hg_api';
import { LinearGradient } from 'expo-linear-gradient';
import Conditions from '../../components/Conditions';

interface weatherProps {
  windSpeed: string;
  sunrise: string;
  sunset: string;
  humidity: number;
}

function Search () {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [error, setError] = useState('');
  const [weather, setWeather] = useState<weatherProps>({} as weatherProps);
  
  function handleBack() {
    navigation.navigate('Home');
  }
  
  async function handleSearch() {
    const { data } = await hgAPI.get(`/weather?key=${apiKey}&city_name=${input}`);

    if(data.by === 'default') {
      setError('Humm, cidade não encontrada!');
      setInput('');
      setCity('');
      Keyboard.dismiss();
      return
    }

    let { city : cityName, date, temp } = data.results;
    let { wind_speedy, sunrise, sunset, humidity } = data.results;

    setError('');
    
    setCity(cityName);
    setDate(date)
    setTemp(temp)
    setWeather({ windSpeed: wind_speedy, sunrise, sunset, humidity });
    setInput('');
    Keyboard.dismiss();
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBack}
          >
          <Feather 
            name="chevron-left"
            size={32}
            color="#000"
            />
          
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <TextInput 
          value={input}
          onChangeText={value => setInput(value)}
          placeholder="Ex: Vitória da Conquista, BA"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.icon}
          onPress={handleSearch}
        >
          <Feather
            name="search"
            color="#FFF"
            size={22}
          />
        </TouchableOpacity>
      </View>

      {!!city && 
        <LinearGradient
          style={styles.card}
          colors={['#1ED6FF', '#97C2FF']}
        >
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.city}>{city}</Text>

          <View style={styles.tempContainer}>
            <Text style={styles.temp}>{temp}º</Text>
          </View>

          <View style={styles.conditionContainer}>
            <Conditions
              weather={{...weather}}
            />
          </View>
        </LinearGradient>}

      {!!error && 
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <Emoji 
            name="cry"
            style={styles.errorText}
          />
        </View>
      }

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: Dimensions.get('screen').height * .04
  },

  header: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%'
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 10
  },

  buttonText: {
    fontSize: 17,
  },

  searchBox: {
    backgroundColor: '#DDD',
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width * .9,
    height: 50,
    borderRadius: 8,
    marginBottom: 15
  },
  
  input: {
    width: "85%",
    height: 50,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },

  icon: {
    width: Dimensions.get('screen').width * .14,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ED6FF',
    height: 50
  },

  card: {
    marginTop: Dimensions.get('screen').height * .04,
    width: Dimensions.get('screen').width * .95,
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9   
  },

  date: {
    color: "#FFF",
    fontSize: 16
  },

  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },

  conditionContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: .8,
    shadowOffset: {
      height: 3,
      width: 2
    }
  },
  
  tempContainer: {

  },

  temp: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold'
  },

  errorContainer: {
    flexDirection: 'row'
  },

  errorText: {
    fontSize: 16,
    marginRight: 8
  }
});

export default Search;
