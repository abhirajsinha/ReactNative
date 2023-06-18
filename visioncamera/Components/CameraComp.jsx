import {
  View,
  Text,
  Linking,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevices,
  CameraPosition,
} from 'react-native-vision-camera';
import ImagePicker from 'react-native-image-crop-picker';
import {PermissionsAndroid} from 'react-native';
import Footer from './Footer';
import {useCamera} from '../hooks/useCamera';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {CameraRoll, useCameraRoll} from '@react-native-camera-roll/camera-roll';
import FlatCards from './FlatCards';

const CameraComp = () => {
  const [devices, cameraRef] = useCamera();
  const [cameraPosition, setCameraPosition] = useState('back');
  const [isCameraLoaded, setIsCameraLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const hasPermission = useCameraRoll();
  useEffect(() => {
    if (hasPermission) {
      CameraRoll.getPhotos({first: 7}).then(
        data => {
          const assets = data.edges;
          const images = assets.map(asset => asset.node.image);
          setImages(images);
        },
        error => {
          console.log(error);
        },
      );
    }
  }, []);
  const device = cameraPosition == 'front' ? devices.front : devices.back;
  if (device == null) return <Text>Loading Camera..</Text>;

  const takePhoto = async () => {
    try {
      if (cameraRef === null) {
        throw new Error('Camera Ref is Null');
      }

      console.log('Taking Photo');
      const photo = await cameraRef.current.takePhoto({
        flash: 'on',
      });
      console.log('photo', photo);
    } catch (error) {
      console.log('Error', error);
    }
  };

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

  const toggleCamera = () => {
    cameraPosition == 'front'
      ? setCameraPosition('back')
      : setCameraPosition('front');
  };

  return (
    <>
      <Camera
        style={{flex: 1, backgroundColor: 'transparent'}}
        ref={cameraRef}
        photo={true}
        device={device}
        isActive={true}
      />

      <FlatCards images={images} />

      {/* Camera Handlers */}
      <View style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor: 'transparent'}}
          onPress={() => openGallery()}>
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

        <TouchableOpacity onPress={() => toggleCamera()}>
          <Image
            style={{height: 30, width: 30}}
            source={{
              uri: 'https://icons-for-free.com/iconfiles/png/512/rotate-1324760546644436540.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'transparent',
  },
  icon: {
    marginVertical: 10,
  },
});

export default CameraComp;
