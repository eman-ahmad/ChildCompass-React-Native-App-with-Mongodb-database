import React, { useState, useContext, useRef } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoleContext } from '../provider/RoleContext';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

export default function EmailVerification() {
  const { parentEmail } = useContext(RoleContext);
  const navigation = useNavigation();

  const [code, setCode] = useState(['', '', '', '', '']); // State for the code inputs

  // Create refs for each input field
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleCodeChange = (text, index) => {
    // Update the code array based on input
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to the next input field if a digit is entered
    if (text !== '' && index < 4) {
      inputRefs[index + 1].current.focus();
    } else if (text === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleContinuePress = async () => {
    if (code.every((digit) => digit !== '')) {
      const verificationCode = code.join(''); // Combine the digits into the full code
      console.log("This is Parent Email: " + parentEmail);
      try {
        const response = await axios.post('http://localhost:5000/api/parent/verify-email', {
          email: parentEmail,
          verificationCode,
        });
        if (response.status === 200) {
          alert('Email verified successfully!');
          navigation.navigate('ParentCode'); // Navigate to the ParentCode screen
        }
      } catch (error) {
        console.error('Request error:', error);  // Log the full error to console
        if (error.response) {
          alert(error.response.data.message || 'An error occurred during verification.');
        } else {
          alert('Failed to connect to the server. Please try again later.');
        }
      }
    } else {
      alert('Please enter the complete code!');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/map.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <Image
            source={require('../../assets/images/parent.png')}
            style={styles.childImage}
          />
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleArrow} />
            <Text style={styles.speechText}>Email Verification...</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.instructionText}>
            Enter the code, it’s in your inbox, @user...
          </Text>

          {/* Input Fields for Code */}
          <View style={styles.codeInputContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]} // Attach each input field to a ref
                style={styles.codeInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
              />
            ))}
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
  animationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  childImage: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: 'contain',
    marginTop: 10,
  },
  speechBubble: {
    marginTop: -140,
    width: 150,
    marginLeft: -30,
    backgroundColor: '#90EE90',
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
    fontSize: 16,
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  instructionText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: "italic",
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
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
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
