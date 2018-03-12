import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Button extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <TouchableOpacity style={styles.button}
          onPress={this.props.onPress}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#3d7a61',
    height: 40,
    width: 120,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '700'
  },
});
