import { Dimensions, Platform } from 'react-native'
const { width, height } = Dimensions.get('window');
const model = Platform.OS == 'ios' ? 'ios' : 'android';
export {
  width,height,model
}
