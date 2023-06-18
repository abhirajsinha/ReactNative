import React, {memo, useEffect, useState, Input} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import NfcManager, {NfcEvents, NfcTech, Ndef} from 'react-native-nfc-manager';

function NFC() {
  const [hasNfc, setHasNFC] = useState(null);
  const [val, setVal] = useState(' ');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const checkIsSupported = async () => {
      const deviceIsSupported = await NfcManager.isSupported();

      setHasNFC(deviceIsSupported);
      if (deviceIsSupported) {
        await NfcManager.start();
      }
    };

    checkIsSupported();
  }, []);

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      // setVal(tag.ndefMessage);
      console.log(tag.ndefMessage);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  async function writeNdef({type, value}) {
    let result = false;

    try {
      // STEP 1
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.textRecord(inputText)]);

      if (bytes) {
        await NfcManager.ndefHandler // STEP 2
          .writeNdefMessage(bytes); // STEP 3
        result = true;
      }
    } catch (ex) {
      console.warn(ex);
    } finally {
      // STEP 4
      NfcManager.cancelTechnologyRequest();
    }

    return result;
  }

  function eraseData() {
    setInputText(' ');
  }

  if (!hasNfc) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.element}>
          <Text style={styles.text}>NFC isn't Supported on this device</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter Text:</Text>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Type something..."
      />
      <TouchableOpacity style={styles.button} onPress={readNdef}>
        <Text style={styles.text}> Scan Tag - {val}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={writeNdef}>
        <Text style={styles.text}> Write Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={eraseData}>
        <Text style={styles.text}>Erase Data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
  },
  element: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default NFC;
