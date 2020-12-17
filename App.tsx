import  React, {Component} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import NormalGame from './components/NormalGame';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomGame from './components/CustomGame'
import CustomGamePlay from './components/CustomGamePlay'
import ButtonWithBackground from './components/shared/newbutton'
import FlatButton from './components/shared/button'





function HomeScreen({navigation}) {

 
const getnormalgame = () => {
  {navigation.navigate('NormalGame');  NormalGame}
}



  return (
   
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
    <Text style={{fontSize:20, color: 'white'}}>Choose Deck type:</Text>
     <Text></Text>

    
    <ButtonWithBackground  text='Normal Deck' color='yellow' onPress={getnormalgame}/>
   
    <Text> </Text> 
    <ButtonWithBackground text="Custom Deck" color='yellow' onPress={() => navigation.navigate('CustomGame' )}/>
    <Text> </Text> 
  </View>
  

  );
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="CardGames" component={HomeScreen} />
        <Stack.Screen name="NormalGame" component={NormalGame} />
        <Stack.Screen name="CustomGame" component={CustomGame} />
        <Stack.Screen name="CustomGamePlay" component={CustomGamePlay} />

           
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;