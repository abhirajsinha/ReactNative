import React, {useCallback, useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

export const useCamera = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const cameraRef = useRef(Camera);

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermission();

      await Camera.getCameraPermissionStatus();

      await Camera.requestMicrophonePermission();

      await Camera.getMicrophonePermissionStatus();
    })();
  }, []);
  if (device !== null) {
    return [devices, cameraRef];
  }
};
