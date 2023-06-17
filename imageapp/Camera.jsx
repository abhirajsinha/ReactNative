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
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Gallery Permission',
            message: 'App needs access to your gallery ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Gallery permission given');
        } else {
          console.log('Gallery permission denied');
        }
      } catch (error) {}
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Cool Photo App Camera Permission',
            message:
              'Cool Photo App needs access to your camera ' +
              'so you can take awesome pictures.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');

          const data = await this.camera.takePictureAsync();
          let saveResult = CameraRoll.saveToCameraRoll(data.uri);
          console.warn('takePicture ', saveResult);
          console.warn('picture url ', data.uri);
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestCameraPermission();
  }, []);

  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
      setImageUri(image.path);
    });
  };

  const clickPicture = () => {
    ImagePicker.openCamera({
      width: 500,
      height: 600,
      mediaType: 'any',
      useFrontCamera: true,
      cropping: true,
      showCropGuidelines: true,
      // freeStyleCropEnabled:true,
      enableRotationGesture: true,
    }).then(image => {
      console.log(image.path);
      setImageUri(image.path);
    });
  };

  return (
    <SafeAreaView>
      {imageUri && (
        <View>
          <Image style={{height: 300, width: 300}} source={{uri: imageUri}} />
        </View>
      )}
      <TouchableOpacity
        onPress={pickPicture}
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
    </SafeAreaView>
  );
};

export default Camera;
