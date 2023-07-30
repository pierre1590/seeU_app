import LottieView from 'lottie-react-native';
import { useCallback, useEffect } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

const {navigation} = useNavigation();

export const Splash = () => {
  const [fontsLoaded] = useFonts({
    'REM-Italic': require('../assets/fonts/REM-ExtraLight.ttf'),
    'REM-Medium': require('../assets/fonts/REM-MediumItalic.ttf'),
    'REM-ThinItalic': require('../assets/fonts/REM-ThinItalic.ttf'),
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
      <View style={styles.container} >
        <LottieView
          style={styles.splash}
          source={require("../assets/splash.json")}
          autoPlay
          loop={true}
          onAnimationFinish={() => {
            console.log("Animation Finished!");
          }}
        />
        <Text style={styles.text}>seeU</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    splash: {
        width: 300,
        height: 300,
        marginVertical: 90,
        marginHorizontal: 25,
      },
      text: {
        paddingTop:5,
        fontSize: 100,
        textAlign: 'center',
        color: '#05f',
        fontFamily: 'REM-ThinItalic',   
      }
});