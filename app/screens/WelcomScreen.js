import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function WelcomScreen({ navigation }) {
  const imageUrl = "https://picsum.photos/500/800";

  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text>Sell what we don't need</Text>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Details")}
      >
        <View />
      </TouchableOpacity>
      <View style={styles.registerButton} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end", // used for y-axis alignment
    alignItems: "center", // used for x-axis alignment
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomScreen;
