import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Image} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {launchImageLibrary} from 'react-native-image-picker';

const FlatCards = props => {
  const images = props.images;
  const [galleryImage, setGalleryImage] = useState(null);

  const launchGallery = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      setGalleryImage('');
    });
  };

  return (
    <GestureRecognizer onSwipeUp={() => launchGallery()}>
      <SafeAreaView>
        <View
          flex={1}
          marginTop={6}
          justifyContent="center"
          alignItems="center">
          <Image
            backgroundColor="white"
            source={require('../assets/images/Bar.svg')}
          />
        </View>
        <ScrollView horizontal>
          <View style={styles.container}>
            {images.map((imageDetail, index) => {
              return (
                <Image
                  source={{uri: imageDetail.uri}}
                  key={index}
                  style={[styles.card]}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 4,
    marginTop: 5,
    backgroundColor: 'transparent',
  },
  card: {
    height: 80,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 4,
    backgroundColor: 'transparent',
  },
});

export default FlatCards;
