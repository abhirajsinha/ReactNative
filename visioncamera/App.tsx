import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Footer from './Components/Footer';
import CameraComp from './Components/CameraComp';
import Grid from './Components/Grid';

const App = () => {
  return (
    <>
    <CameraComp/>
      {/* <View style={{flex: 1, position: 'relative', backgroundColor: 'transparent'}}>
        <CameraComp />
        <View
          style={{
            position: 'absolute',
            top: 50,
            bottom: 50,
            left: 0,
            right: 0,
          }}>
          <Grid />
        </View>
      </View> */}
    </>
  );
};

export default App;
