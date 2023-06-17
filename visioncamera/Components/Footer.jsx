import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CameraComp from './CameraComp';
import {useTakePhoto} from '../hooks/useTakePhoto';
import {useCamera} from '../hooks/useCamera';

const Footer = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={{height: 25, width: 25}}
          source={{
            uri: 'https://i.pinimg.com/200x/f2/58/05/f258057b4e00c3273a91c53ffa7107f9.jpg',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => takePhoto()}>
        <Image
          style={{height: 30, width: 30}}
          source={{
            uri: 'https://static.thenounproject.com/png/1643496-200.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Additional icon clicked')}>
        <Image
          style={{height: 30, width: 30}}
          source={{
            uri: 'https://icons-for-free.com/iconfiles/png/512/rotate-1324760546644436540.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
  },
  icon: {
    marginVertical: 10,
  },
});

export default Footer;
