import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const FlatCards = props => {
  const images = props.images;
  return (
    <SafeAreaView>
      <ScrollView horizontal>
        <View style={styles.container}>
          {images.map((imageDetail, index) => {
            return <Image source={{uri: imageDetail.uri}} key={index} style={[styles.card]} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 7,
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 2,
  },
});

export default FlatCards;
