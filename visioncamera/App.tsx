import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CameraComp from './Components/CameraComp';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <CameraComp />
    </View>
  );
};

export default App;
