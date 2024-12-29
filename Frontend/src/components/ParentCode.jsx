import React, { useState , useRef} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ParentCode() {
  const navigation = useNavigation();

  const [connectionParts, setConnectionParts] = useState(['', '', '', '']); // State for four input fields

  const inputRefs = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      ];

  const handleInputChange = (text, index) => {
    // Update the specific input field
    const newParts = [...connectionParts];
    newParts[index] = text;
    setConnectionParts(newParts);
    if (text !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    } else if (text === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleContinuePress = () => {
    // Check if all fields are filled
    if (connectionParts.every((part) => part.trim() !== '')) {
      const connectionString = connectionParts.join(''); // Combine parts into a single string without dashes
      console.log('Connection String:', connectionString);
      alert(`Connection String submitted: ${connectionString}`);
    } else {
      alert('Please fill in all parts of the connection string!');
    }
  };


  return (
    <ImageBackground
      source={require('../../assets/images/map.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Animation */}
        <View style={styles.animationContainer}>
          {/* <View style={styles.lottieContainer}> */}
          {/* Optional Lottie Animation */}
          {/* </View> */}
          <Image
            source={require('../../assets/images/parent.png')} // Replace with your actual image path
            style={styles.childImage}
          />
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleArrow} />
            <Text style={styles.speechText}>Add Connection String...</Text>
          </View>
        </View>

        {/* Form Container */}
        <View style={styles.formContainer}>
          <Text style={styles.instructionText}>
            Enter the 4-part connection string shared by your child.
          </Text>

          {/* Input Fields for Connection String */}
          <View style={styles.codeInputContainer}>
            {connectionParts.map((part, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={styles.codeInput}
                keyboardType="default"
                maxLength={1} // Allow 1 character per part
                placeholder={`${index + 1}`} // Placeholder for clarity
                placeholderTextColor="#aaa"
                value={part}
                onChangeText={(text) => handleInputChange(text, index)}
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
  // lottieContainer: {
  //   width: width * 0.6,
  //   height: width * 0.8,
  // },
  // lottie: {
  //   width: '100%',
  //   height: '100%',
  // },
  childImage: {
    width: width * 0.6, // 40% of screen width for responsive design
    height: height * 0.3, // 25% of screen height
    resizeMode: 'contain', // Ensures the image maintains its aspect ratio
    marginTop: 10, // Add spacing from the top
  },
  speechBubble: {
    marginTop: -140,
    width: 150,
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent white background
    shadowColor: '#000', // Subtle shadow for 3D effect
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // Border for frosted effect
    overflow: 'hidden', // Prevents content from overflowing container edges
  },

  instructionText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  codeInput: {
    width: 70, // Adjust width for four inputs
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
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
