import React from 'react';
import { View, Text, Button, Alert, Image, StyleSheet, TextInput} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomGamePlay from './CustomGamePlay'
import ButtonWithBackground from './shared/newbutton'

export default function CustomGame({navigation}) {
        
   
        const [text, setText] = React.useState('');
      
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: 'black'}}>
            <Text style={{fontSize: 16, color:'white'}}>How many decks do you want in the game?</Text>
            <Text></Text>
            <TextInput style={{ width: 100,height:100,textAlign: 'center',fontSize: 75, color: 'white', borderColor: 'white', borderWidth: 2 }} onChangeText={text => setText(text)} value={text} />
            <Text> </Text>
            
      
      
            <ButtonWithBackground text="Use Deck" color='yellow' onPress={() => navigation.navigate('CustomGamePlay', {deck_number: text})} />
      
          </View>
        );
      }