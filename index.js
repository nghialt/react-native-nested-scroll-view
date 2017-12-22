import { Platform, ScrollView } from 'react-native';
import NestedScrollView from './lib/NestedScrollView';

export default Platform.select({
  ios: ScrollView,
  android: NestedScrollView
})

export const CustomScrollView = Platform.select({
  ios: ScrollView,
  android: NestedScrollView
})
