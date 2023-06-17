import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const Grid = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    top: 0,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
});

export default Grid;
