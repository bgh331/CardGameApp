import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonWithBackground = props => {
const content =(
    <View style={[styles.button, {backgroundColor: props.color}]}>
    <Text style={styles.text}>{props.text}</Text>
    </View>
)

return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>

}
const styles = StyleSheet.create({

    button: {
        padding: 16,
        width: 200,
        borderRadius: 40,
        alignItems: 'center',

    },
    text: {
        color: 'black',
        fontSize: 20


    }




});

export default ButtonWithBackground;

