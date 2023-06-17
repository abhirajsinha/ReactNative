import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {PermissionsAndroid} from 'react-native';

const Camera = () => {
  const [imageUri, setImageUri] = useState(undefined);

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'App Camera Permission',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission given');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestCameraPermission();
  }, []);

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image.path);
        setImageUri(image.path);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  const clickPicture = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 600,
      cropping: true,
      showCropGuidelines: true,
      // freeStyleCropEnabled:true,
      enableRotationGesture: true,
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <SafeAreaView>
      {imageUri && (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginTop:350}}>
          <Image style={{height: 300, width: 300}} source={{uri: imageUri}} />
        </View>
      )}
      <View style={{}}>
        <TouchableOpacity
          onPress={openGallery}
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
          <Text style={{fontSize: 20}}>Pick a Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={clickPicture}
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
      </View>
    </SafeAreaView>
  );
};

export default Camera;
