
// src/components/RoleScreen.jsx
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions , Image} from 'react-native';
import LottieView from 'lottie-react-native';
import { RoleContext } from '../provider/RoleContext'; // Access RoleContext

// Get device dimensions
const { width, height } = Dimensions.get('window');

export default function RoleScreen() {
  const { setRole } = useContext(RoleContext); // Access RoleContext

  const handleChildPress = () => {
    setRole('child'); // Set the role as 'child'
  };

  const handleParentPress = () => {
    setRole('parent'); // Set the role as 'parent'
  };

  
   return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>CHILD COMPASS</Text>
          <Image
            source={require('../../assets/images/icon.png')} // Replace with your logo path
            style={styles.logo}
          />
        </View>
        <Image
          source={require('../../assets/images/main-img.jpeg')}
          style={styles.headerImage}
        />
      </View>

      {/* Animation Section */}
      <View style={styles.animationContainer}>
        {/* Child Animation */}
        <View style={styles.animationWrapper}>
          {/* <LottieView
            source={{ uri: 'https://lottie.host/10204d9e-e684-4184-ad6e-942c083cce34/vXWDEi3vjf.lottie' }}
            autoPlay
            loop
            style={styles.lottie}
          /> */}
         <Image
          source={require('../../assets/images/child.png')}
          style={styles.boyImg}
        />
        </View>

        {/* Parent Animation */}
        <View style={styles.animationWrapper}>
          {/* <LottieView
            source={{ uri: 'https://lottie.host/1dbbeda8-9d29-4074-82f0-d8fb438cb27d/z0rjpwa4kB.lottie' }}
            autoPlay
            loop
            style={styles.lottie}
          /> */}
           <Image
          source={require('../../assets/images/parent.png')}
          style={styles.parentImg}
        />
        </View>
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleChildPress} style={styles.button}>
          <Text style={styles.buttonText}>I AM CHILD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleParentPress} style={styles.button}>
          <Text style={styles.buttonText}>I AM PARENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     alignItems: 'center',
//     marginVertical: height * 0.1, // Adjusting for different screen sizes
//   },
//   headerTitle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 30, 
//     fontWeight: 'bold',
//     color: '#0C4D73',
//   },
//   logo: {
//     width: 30,
//     height: 30,
//     resizeMode: 'contain',
//     marginLeft: 6,
//   },
//   headerImage: {
//     width: width * 0.92, // Make the image width responsive
//     height: height * 0.3, // Make the height responsive
//     marginTop: 10,
//   },
//   animationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     // marginVertical: 10,
//   },
//   animationWrapper: {
//     width: width * 0.4, // Adjusting based on screen size
//     height: height * 0.25, // Adjusting based on screen size
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   lottie: {
//     width: '100%', // Make animation scale with its container
//     height: '100%', // Keep aspect ratio consistent
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 20,
//     position: 'relative', // Avoid absolute positioning
//     bottom: 0,
//     width: '100%',
//     backgroundColor: '#ffffff',
//   },
//   button: {
//     backgroundColor: '#ff6600',
//     paddingVertical: 12,
//     paddingHorizontal: 18,
//     borderRadius: 8,
//   },
//   buttonText: {
//     fontSize: 18, 
//     fontWeight: 'bold',
//     color: '#ffffff',
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0C4D73',
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 6,
  },
  headerImage: {
    width: '90%',
    height: 200, // Fixed height
    resizeMode: 'cover',
    marginVertical: 10,
  },
  animationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center', // Center align animations vertically
    marginTop: 60, // Reduce spacing between animations and buttons
  },
  animationWrapper: {
    width: '40%', // Slightly smaller width for animations
    aspectRatio: 1, // Ensures the container is square
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  boyImg: {
    width: '90%', // Take 80% of the animationWrapper's width
    height: '100%',
    resizeMode: 'cover', // Avoid cropping the image
  },
  parentImg:{
    width: '90%', // Take 80% of the animationWrapper's width
    height: '110%',
    resizeMode: 'cover',
    transform:"scale(1.1)"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10, // Decrease padding between the buttons and animations
    backgroundColor: '#ffffff',
  },

  buttonContainer: {
    marginTop:35,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#ff6600',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
 

});
