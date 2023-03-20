import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FlexBox from './src/components/FlexBox';
import Forums from './src/components/Student_forums';
import WelcomePage from './src/components/WelcomePage';
import Student_event from './src/components/Student_event';
import PageEvents from './src/components/Student_event';
import Profile1 from './src/components/Profile1';
import Profile2 from './src/components/Profile2';

import WelcomePageMain from './src/components/WelcomePage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <View style ={styles.container}>
   
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomePageMain} />
        <Stack.Screen name="FlexBox" component={FlexBox} />
        
        <Stack.Screen name="Forums" component={Forums} />
        <Stack.Screen name="Events" component={PageEvents} />
        <Stack.Screen name="Profile" component={Profile1} />
        {/* Student_event */}
        <Stack.Screen name="Student_event" component={Student_event} />
        <Stack.Screen name="Profile2" component={Profile2} />

      </Stack.Navigator>

    </NavigationContainer>
     
   
    

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
  },
});
