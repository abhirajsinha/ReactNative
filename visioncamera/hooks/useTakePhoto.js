import {useCamera} from './useCamera';

export const useTakePhoto = async () => {
  const [device, cameraRef] = useCamera();
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
