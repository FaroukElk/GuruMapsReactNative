import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Button, StatusBar} from 'react-native';

export default class Input extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput style = {styles.input}
          autoCapitalize="none"
          onChangeText={this.props.onChangeText}
          autoCorrect={false}
          placeholder={this.props.placeholder}
          value={this.props.value}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
  },
  input:{
    height: 45,
    backgroundColor: '#fff',
    color: '#000',
  },
  label:{
    color: '#FFF',
    marginBottom: 5,
  }
});
