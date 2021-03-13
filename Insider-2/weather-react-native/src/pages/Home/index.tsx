import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerScreenProps } from '@react-navigation/drawer'
import * as Location from 'expo-location';


import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import { FlatList } from 'react-native-gesture-handler';
import Forecast from '../../components/Forecast';
import hgAPI, { apiKey } from '../../services/api/hg_api';
interface forecastParams {
  date: string;
  weekday: string;
  max: number;
  min: number;
  description: string;
  condition: string;
}

function Home({ navigation } : DrawerScreenProps<{Profile: any}>) {
  const [loading, setLoading] = useState(true);
  const [forecasts, setForecasts] = useState<forecastParams[]>([]);
  const [currently, setCurrently] = useState("dia");
  const [condition, setCondition] = useState("clear_day");
  const [conditionTitle, setConditionTitle] = useState("Dia Limpo");
  const [city, setCity] = useState("São Paulo");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [temp, setTemp] = useState(20);
  const [weather, setWeather] = useState({ windSpeed: '0 km/h', sunrise: '5:30', sunset: '6:00', humidity: 0 })
    
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      
      if (status !== 'granted') {
        alert('Permissão foi negada');
        setLoading(false);
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;
      
      let {data} = await hgAPI.get(`weather?key=${apiKey}&lat=${latitude}&lon=${longitude}&user_ip=remote`);
      let { forecast, currently, condition_slug, city_name, date, temp, description } = data.results;
      let { wind_speedy, sunrise, sunset, humidity } = data.results;
      
      setCurrently(currently)
      setForecasts(forecast);
      setCondition(condition_slug);
      setCity(city_name);
      setDate(date);
      setTemp(temp);
      setConditionTitle(description);
      setWeather({ windSpeed : wind_speedy, sunrise, sunset, humidity });
      setLoading(false)
    })();
  }, []);
  
  function toggleMenu () {
    navigation.toggleDrawer();
  }
  
  if(loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator 
          size={60}
          color="#1ED6FF"
          />
      </SafeAreaView>
    )
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Menu handlePress={toggleMenu}/>
      <Header 
        currently={currently} 
        condition={{condition, conditionTitle}} 
        city={city} 
        date={date} 
        temp={temp}
      />

      <Conditions weather={weather}/>

      <FlatList 
        data={forecasts}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.forecastListContainer}
        keyExtractor={ item => item.date}
        renderItem = {({item}) => <Forecast forecastItem={item}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: Dimensions.get('screen').height * .04
  },
  
  forecastListContainer: {
    marginVertical: 10 
  }
});

export default Home;

