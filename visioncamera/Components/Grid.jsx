import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Grid = () => {
  return (
    <View style={styles.overlayContainer}>
      {/* Overlay View */}
      <View style={styles.overlayTop} />

      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
        <View style={styles.row}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
        <View style={styles.row}>
          <View style={styles.cell} />
          <View style={styles.cell} />
          <View style={styles.cell} />
        </View>
      </View>

      {/* Overlay View */}
      <View style={styles.overlayBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  overlayTop: {
    position: 'absolute',
    top: -90,
    left: 0,
    right: 0,
    height: 275, // Height of the top overlay
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Example overlay color
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 19,
    left: 0,
    right: 0,
    height: 164, // Height of the bottom overlay
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Example overlay color
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding:"auto",
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').height/7,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
});

export default Grid;
