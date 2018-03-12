# GuruMapsReactNative
Guru Go Group Internship Project built with React Native



## Description



This project was created for a Mobile Applications Developer Internship opportunity with Guru Go Group. The project was built utilizing 
the React Native platform. Features included in the application are: 



User Authentication - the ability for users to create an account 
with their e-mail address. Firebase is used for the backend authentication services.



Route directions with Google Maps - Users can retrieve the best travel route between a source and destination address. Once addresses 
are provided, users are taken to Google Maps application to view the route.



## Installation Instructions


1. Make sure you have [Node](https://nodejs.org/en/download/) installed

2. Ensure that you have the React Native Command Line Interface (CLI) tool installed. It can be installed with npm by typing `npm install -g react-native-cli` in the terminal or command prompt.

3. Clone this repository using the command `git clone https://github.com/FaroukElk/GuruMapsReactNative`



### Running on Android

This app can be run on an Emulated or Native Android device. To run on a native device, USB debugging will need to be enabled. 

#### Enable Developer Options and Debugging

1. On your Android device open the Settings app

2. Scroll to the bottom and select About Phone (Under System on Android 8.0 and higher)

3. Scroll to the bottom and tap the Build number 7 times

4. Return to the previous screen to find Developer options near the bottom

5. Select Developer options and scroll down until 'USB Debugging' and select to enable.


#### Connect to your Device and Run the App

1. Navigate to the cloned GuruMapsReactNative directory and into the GuruMaps folder from the terminal or command prompt and run the following command: `npm install`

2. With your native Android device connected via USB or an Android emulator device running, run the following command line tool: `react-native run-android`

3. The app will install on your connected device and launch once ready.

4. If you receive an error related to "SDK location not found", then perform the following steps:

	i. Go to the android/ directory of the react-native project
  
	ii. Create or edit a file called local.properties with this line:
  
	windows: `sdk.dir = C:/Users/{YOUR USERNAME}/AppData/Local/Android/sdk`
  
	macOS: `sdk.dir = /Users/{YOUR USERNAME}/Library/Android/sdk.`



## Screenshots

<img src="https://github.com/FaroukElk/GuruMapsReactNative/blob/master/Screenshots/login.png" width="350" height="650">

<img src="https://github.com/FaroukElk/GuruMapsReactNative/blob/master/Screenshots/register.png" width="350" height="650">

<img src="https://github.com/FaroukElk/GuruMapsReactNative/blob/master/Screenshots/address_example.png" width="350" height="650">

<img src="https://github.com/FaroukElk/GuruMapsReactNative/blob/master/Screenshots/route.png" width="350" height="650">


## Acknowledgments



Map Icon used in login screen made by [Silviu Runceanu](https://www.flaticon.com/authors/silviu-runceanu) from https://www.flaticon.com/ is licensed by Creative Commons BY 3.0.
