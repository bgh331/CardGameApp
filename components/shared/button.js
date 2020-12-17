import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';


export default function FlatButton( text, onPress ) {

    return (

        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
    <Text style={styles.buttonText}>{text.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

button: {
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 30,
    backgroundColor: 'yellow',
  
},
buttonText: {
color: 'black',
fontWeight: 'bold',
textTransform: 'uppercase',
fontSize: 16,
textAlign: 'center'

}


})