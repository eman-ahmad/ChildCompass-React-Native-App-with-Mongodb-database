import React, { useState, useEffect,useContext } from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native-web';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { RoleContext } from '../provider/RoleContext';
// import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ChildCode() {
  
  const route = useRoute(); // Access route params
  const navigation = useNavigation();
  const { childConnectionString, setChildConnectionString } = useContext(RoleContext);
  const [code, setCode] = useState(route.params?.connectionString || '');
  // State for the code from the database

  const handleContinuePress = () => {
    if (code) {
      console.log('Code submitted:', code);
      navigation.navigate('ChildDashboard')
      alert(`Code submitted: ${code}`);
    } else {
      alert('Code is not available!');
    }
  };


  return (
    <ImageBackground
      source={require('../../assets/images/map.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Back Button */}
        {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0C4D73" />
        </TouchableOpacity> */}

        {/* Animation */}
        <View style={styles.animationContainer} >
          {/* <View style={styles.lottieContainer}> */}
          {/* <LottieView
              source={require('../../assets/lottieanimations/child.json')}
              // source={childAnimation}
              autoPlay
              loop
              // style={styles.lottie}
              //style={{ width: '100%', height: '100%' }}
              onError={(error) => console.log('Animation failed to load:', error)}
            /> */}

          {/* </View> */}
          <Image
            source={require('../../assets/images/child.png')} // Replace with your actual image path
            style={styles.childImage}
          />
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleArrow} />
            <Text style={styles.speechText}>Almost Done...</Text>
          </View>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          <Text style={styles.instructionText}>
            Code to build connection with your parent.
          </Text>

          {/* Single Box for the Code */}
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>{code}</Text>
          </View>

          {/* Continue Button */}
          <TouchableOpacity onPress={handleContinuePress} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  // backButton: {
  //   position: 'absolute',
  //   top: 40,
  //   left: 20,
  //   backgroundColor: '#fff',
  //   padding: 10,
  //   borderRadius: 20,
  //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' // Adds shadow for a floating effect
  // },
  animationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  // lottieContainer: {
  //   width: width * 0.4, // Adjusting based on screen size
  //   height: height * 0.25, // Adjusting based on screen size
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // lottie: {
  //   width: '50%',
  //   height: '50%',
  // },
  childImage: {
    width: width * 0.4, // 40% of screen width for responsive design
    height: height * 0.25, // 25% of screen height
    resizeMode: 'contain', // Ensures the image maintains its aspect ratio
    marginTop: 10, // Add spacing from the top
  },
  speechBubble: {
    marginTop: -140,
    width: 140,
    marginLeft: -30,
    backgroundColor: '#90EE90', // Light green bubble
    padding: 15,
    borderRadius: 20,
    position: 'relative',
  },
  speechBubbleArrow: {
    position: 'absolute',
    bottom: -10,
    left: 20,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderTopColor: '#90EE90',
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderRightWidth: 10,
    borderRightColor: 'transparent',
  },
  speechText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0C4D73',
    textAlign: 'center',
  },
  formContainer: {
    width: '90%',
    maxWidth: 360,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for 3D effect
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // Border for frosted effect
    backdropFilter: 'blur(10px)', // Creates the blur effect (Web only, use BlurView for native)
    overflow: 'hidden', // Prevents content from overflowing container edges
  },

  instructionText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic'
  },
  codeBox: {
    width: '80%',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6600',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    // resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});