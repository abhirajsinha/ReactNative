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
import {useCamera} from '../hooks/useCamera';
import {CameraRoll, useCameraRoll} from '@react-native-camera-roll/camera-roll';
import FlatCards from './FlatCards';

const CameraComp = () => {
  const [devices, cameraRef] = useCamera();
  const [cameraPosition, setCameraPosition] = useState('back');
  const [images, setImages] = useState([]);
  const [imageUri, setImageUri] = useState(null);
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
  if (device == null) return <Text>No Camera Found..</Text>;

  const takePhoto = async () => {
    try {
      if (cameraRef === null) {
        throw new Error('Camera Ref is Null');
      }

      console.log('Taking Photo');
      const photo = await cameraRef.current.takePhoto({
        // flash: 'on', //Can be used to turn on the flash feature of camera
      });
      console.log('Photo', photo);
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
    <View flex={1}>
      <Camera
        style={{flex: 1, backgroundColor: 'transparent'}}
        ref={cameraRef}
        photo={true}
        device={device}
        isActive={true}
        hdr={true}
        focusable={true}
        enableZoomGesture={true}
      />

      <FlatCards images={images} />

      {/* Camera Handlers */}
      <View style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor: 'transparent'}}
          onPress={() => openGallery()}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../assets/images/gallerypng.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => takePhoto()}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../assets/images/Camera.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleCamera()}>
          <Image
            style={{height: 35, width: 35}}
            source={require('../assets/images/selfieicon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
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
