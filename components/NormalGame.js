import React from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithBackground from './shared/newbutton'
//Creating a game with one deck
export default function NormalGame() {
    //placeholder for api id
    const [id, setId] = React.useState(" ");
    //placeholder for api data
    const [data, setData] = React.useState('');
    //placeholder for remaining cards
    const [count, setCount] = React.useState('');
    //placeholder for card values
    const [value, setValue] = React.useState(' ');
    //placeholder for game info
    const [info, setInfo] = React.useState('');

//stylesheet
    const styles = StyleSheet.create({
        main: {

            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
        },

        tinyLogo: {
            width: 260,
            height: 360,
        }
    });
  //fetchig api data to start the game and declaring deck id
    const createDeck = async () => {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const json = await response.json();
      setId(json.deck_id);
     

      //fetching the deck with the created id
      const response2 = await fetch('https://deckofcardsapi.com/api/deck/' + id + '/draw/?count=1');
      const json2 = await response2.json();
      setData(json2.cards);
      setValue(json2.cards[0].value)
      setCount(json.remaining);
      
    }

 
//button function when pressed gets the cards value 
    const buttonpressed = async () => {

        const response = await fetch('https://deckofcardsapi.com/api/deck/' + id + '/draw/?count=1');
        const json = await response.json();
        setData(json.cards);
        setCount(json.remaining);
        
        if (json.remaining != 0){
        setValue(json.cards[0].value)}

        else{
        setValue('');
            }

    }

   //game info for the cards
    const CardChecking = (props) => {
        if (props == 'ACE') {
            setInfo("Waterfall")
        }
        else if (props == '2') {
            setInfo("Two for YOU!")
        }
        else if (props == '3') {
            setInfo("Three for me!")
        }
        else if (props == '4') {    
                setInfo("FLOOR!")
        }
        else if (props == '5') {  
                setInfo("Five For Guys!")   
        }
        else if (props == '6') {   
                setInfo("Six for Chicks!")   
        }
        else if (props == '7') {
            setInfo("Heaven!")
        }
        else if (props == '8') {
            setInfo("You get a Mate!")
        }
        else if (props == '9') {
            setInfo("Make up a Rule.")
        }
        else if (props == '10') {
            setInfo("Category")
        }
        else if (props == 'JACK') {
            setInfo("Rythm")
        }
        else if (props == 'QUEEN') {
            setInfo("Question Master")
        }
        else if (props == 'KING') {
            setInfo("Never have I ever.")
        }
        else if (props == ' ') {
            setInfo("GAME OVER!")
        }
    }

    return (

        <SafeAreaView style={styles.main}>
            <p></p>
            <ButtonWithBackground color='yellow' text="Start Game" onPress={ () => { createDeck(); CardChecking() }}> </ButtonWithBackground>
            <Text></Text>
            <p></p>
            <Text style={{fontSize: 16, color:'white'}}>Cards Remaining {count}</Text>
            <Text></Text>
            
            <FlatList data={data} alignItems="center" renderItem= {({ item }) => 
              
        
                    <View>

                        <Image source={{ uri: item.image }} style={styles.tinyLogo} />
                        <Text> </Text>

                        
                        
                        <Text style={{fontSize: 16, color:'white', textAlign: 'center'}}>{info}</Text>
                        <Text style={{fontSize: 16, color:'white', textAlign: 'center'}}>{CardChecking(item.value)}</Text>
                        <p></p>
                        <ButtonWithBackground style={styles.main} text=" Next Card " color="blue" onPress onPress={() => { buttonpressed(); CardChecking()}}/>
                        <Text></Text>

                    </View>} 
                  
                
                    
            
            
                keyExtractor={(_, index) => index.toString()} 
            />
            
            
        </SafeAreaView>
    );


}