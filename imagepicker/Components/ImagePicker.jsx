import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = () => {
  const [selectImage, setSelectImage] = useState('');
  const [cameraPhoto, setCameraPhoto] = useState('');

  function getImages() {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      setSelectImage(response?.assets[0]?.uri);
    });
  }

  function openCamera() {
    let options = {
      cameraOptions: {
        mediaType: 'photo',
      },
    };
    launchCamera(options, response => {
      setCameraPhoto(response?.assets[0]?.uri);
    });
  }

  return (
    <SafeAreaView>
      <View>
        <Image style={{height: 300, width: 300}} source={{uri: selectImage}} />
      </View>
      {/* <View>
        <Image style={{height: 300, width: 300}} source={{uri: cameraPhoto}} />
      </View> */}
      <TouchableOpacity
        onPress={getImages}
        style={{
          marginTop: 300,
          height: 50,
          width: '60%',
          backgroundColor: 'skyblue',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 20}}>ImagePicker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={openCamera}
        style={{
          marginTop: 20,
          height: 50,
          width: '60%',
          backgroundColor: 'skyblue',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 20}}>Open Camera</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ImagePicker;
