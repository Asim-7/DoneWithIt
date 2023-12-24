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
        <Text style={[styles.text, styles.spaceTop]}>
          Sell what we don't need
        </Text>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.text}>Go to next screen</Text>
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
  spaceTop: {
    top: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
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
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomScreen;
