
function DetailsScreen(navigation) {
    const [checked, setChecked] = React.useState('');
    const [text, setText] = React.useState('');
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>How many decks do you want in the game?</Text>
        <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setText(text)} value={text} />
        <Text> </Text>
        <Text>Do you want to add jokers to the deck/s?</Text>
        <Text> </Text>
        <Text>Yes</Text>
        <RadioButton
          value="true"
          status={checked === 'true' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('true')}
        />
        <Text>No</Text>
        <RadioButton
          value="false"
          status={checked === 'false' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('false')}
        />
  
  
        <Button title="Use Deck" onPress={() => navigation.navigate(CustomGame)} />
  
      </View>
    );
  }