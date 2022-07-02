import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () =>  {
  const Stack = createNativeStackNavigator();

  return (
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name="Home" component={HomeScreen} />
  //   </Stack.Navigator>
  // </NavigationContainer> 
  <HomeScreen/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
