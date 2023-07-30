import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './src/screens/Login.js';
import {Splash} from './src/Splash.js';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const Stack = createStackNavigator();
const {navigation} = useNavigation();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'REM-Italic': require('./assets/fonts/REM-ExtraLight.ttf'),
    'REM-Medium': require('./assets/fonts/REM-MediumItalic.ttf'),
    'REM-ThinItalic': require('./assets/fonts/REM-ThinItalic.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync().then(() => {
          navigation.replace('Login'); // Replace 'Login' with your actual login screen name
        });
      }, 15000); // 15 seconds in milliseconds
    }
  }, [fontsLoaded, navigation]);

 
return (
  <>
   
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash' headerMode="none">
        {/* <Stack.Screen name='Login' component={LoginScreen} 
        options={{
          headerShown: false
        }}
        /> */}
        <Stack.Screen name='Splash' component={Splash} />
      </Stack.Navigator>
    </NavigationContainer> 
  </>
)
}

