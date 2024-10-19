import AppNavigator from './navigation/AppNavigator';
import Design from './screens/components/Design';
import { Image } from 'react-native';

export default function App() {
  return (
    <>
    {/* <Image source={require('./assets/Design.png')} className={`w-[40px] h-[40px] fixed top-[20px] right-0 z-10`} /> */}
    <AppNavigator />
    {/* <Design /> */}
    </>
  );
}