import React from 'react';
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import perfil from '../img/perfil.png'


const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        width: '100%', height: 77,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
      }}>
        <Image source={perfil}
          style={{ width: 65, height: 65, marginTop:20 }}
        />
        <Text style={{color:'#000', fontSize:17, marginTop:5, marginBottom:25}} > Bem vindo </Text>


      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;