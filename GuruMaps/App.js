import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, Linking } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Input from './src/components/Input';
import Button from './src/components/Button';
import * as firebase from 'firebase';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#2c3e58',
    },
    headerTintColor: '#FFF',
  };
  state = {
      email: '',
      password: '',
      authenticating: false,
      error: ''
    };

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDTvknzZIpWpvaWrKcjqixn5-Y7g4zm0P0 ',
      authDomain: 'guru-maps-react.firebaseapp.com',
    }
    firebase.initializeApp(firebaseConfig);
  }

  //Handles user login
  async onLoginPress(){
    this.setState({authenticating: true});
      const { email, password } = this.state;
      try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.dispatch(resetAction));
      }
      catch (error){
        this.setState({authenticating: false});
        alert(error.toString());
      }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.loginText}>Guru Maps</Text>
        <Image source={require('./src/images/map-for-orientation.png')}/>
      </View>

      <View style={styles.inputContainer}>
        <Input
          label="E-mail"
          onChangeText={(email) => this.setState({email})}
          keyboardType='email-address'
          />
        <Input
          label="Password"
          onChangeText={(password) => this.setState({password})}
          secureTextEntry
          />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign-up" onPress={() => this.props.navigation.navigate('Signup')}/>
        <Button title="Login" onPress={() => this.onLoginPress()}/>
      </View>
      {this.state.authenticating ?
        <View style={styles.loading}>
          <ActivityIndicator
            animating={this.state.authenticating}
            size='large' />
        </View> : null}
      </View>
    );
  }
}

class SignupScreen extends React.Component{
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: '#2c3e58',
    },
    headerTintColor: '#FFF',
  };
  state = {
    email: '',
    password: '',
    confirmPass: '',
    authenticating: false,
    error: ''
  };

  //Handles user registration
  async onRegisterPress(){
    this.setState({authenticating: true});
    const {email, password, confirmPass} = this.state;
    if (password !== confirmPass){
      alert("Passwords do no match!");
      this.setState({authenticating: false});
      return;
    }
    try{
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {this.setState({ error: '', authenticating: false});
                  alert("Registration successful. Please login");
                  this.props.navigation.goBack();})
    }
    catch(error){
      alert(error);
    }
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Text style={styles.infoText}>Enter login credentials to create a Guru Maps account!</Text>
          <Input
            label='E-mail Address'
            keyboardType='email-address'
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            />
          <Input
            label='Password'
            onChangeText={(password) => this.setState({password})}
            secureTextEntry/>
          <Input
            label='Confirm Password'
            onChangeText={(confirmPass) => this.setState({confirmPass})}
            secureTextEntry/>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Register"
            onPress={() => this.onRegisterPress()}/>
        </View>

        {this.state.authenticating ?
          <View style={styles.loading}>
            <ActivityIndicator
              animating={this.state.authenticating}
              size='large' />
          </View> : null}

      </View>
    );
  }
}

//GuruMaps screen for route directions
class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Navigation',
    headerStyle: {
      backgroundColor: '#2c3e58',
    },
    headerTintColor: '#FFF',
  };

  state={
    sourceAddress: '',
    destinationAddress: '',
  };

  //Open google maps app with route directions
  startNavigation(url){
    Linking.canOpenURL(url).then(supported => {
      if (supported){
        Linking.openURL(url);
      }
      else{
        alert("Error with navigation");
      }
    });
  }

  //Forms google maps query uri
  onRoutePress(){
    navQuery = "https://www.google.com/maps/dir/?api=1&origin=" + this.state.sourceAddress + "&destination=" + this.state.destinationAddress;
    this.startNavigation(navQuery);
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Text style={styles.infoText}>Enter a source and destination address to get directions for that route.</Text>
          <Input
            label="Source Address"
            onChangeText={(sourceAddress) => this.setState({sourceAddress})}/>
          <Input
            label="Destination Address"
            onChangeText={(destinationAddress) => this.setState({destinationAddress})}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Route"
            onPress={() => this.onRoutePress()}/>
        </View>

      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Main:{
      screen: MainScreen,
    }
  },
  {
    initalRouteName: 'Login',
  }
);

//Remove login screen from stack once authenitcated
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Main'})],
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d567a',
  },
  logoContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 30,
    paddingBottom: 10,
    color: '#FFF'
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    padding: 50,
    paddingTop: 10,
  },
  loading: {
    backgroundColor: '#F5FCFF88',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 17,
    padding: 20,
    color: '#FFF',
  }
});
