import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Icone from 'react-native-vector-icons/Ionicons'

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Contato from './src/pages/Contato'
import CustomDrower from './src/components/CustomDrawer'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Drown = createDrawerNavigator()

const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  },
  Contato: {
    name: 'ios-call'
  }
}

function Tabs() {
  return (

    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name]
          return <Icone name={name} color={color} size={size} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#121212'
        },
        activeTintColor: '#fff'
      }}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Sobre' component={Sobre} />
    </Tab.Navigator>

  )
}
function Drowner(){
  return(
    <Drown.Navigator
    drawerContent={CustomDrower}
    
    >
      
      <Drown.Screen name='Home' component={Home} />
      <Drown.Screen name='Sobre' component={Sobre} />
      <Drown.Screen name='Contato' component={Contato} />

    </Drown.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Drowner} options={{headerShown:false}} />
        {/* <Stack.Screen name='Contato' component={Contato} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}