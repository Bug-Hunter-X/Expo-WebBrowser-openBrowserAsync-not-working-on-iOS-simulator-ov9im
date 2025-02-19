import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const handlePress = async () => {
  if (Platform.OS === 'ios') {
    // Handle iOS simulator separately - perhaps redirect to Safari?
    await WebBrowser.openBrowserAsync('https://example.com');
    alert('Opening in external browser. This is a temporary workaround for the iOS simulator.');
  } else {
    let result = await WebBrowser.openBrowserAsync('https://example.com');
    console.log(result);
  }
};