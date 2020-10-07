import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// import { Container } from './styles';

const Home = () => {
  const nav = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Contato'
        onPress={() => nav.navigate('Contato')}
      />
      <Button title='Abrir Menu'
        onPress={() => nav.toggleDrawer()}
      />
    </View>
  );
}

export default Home;