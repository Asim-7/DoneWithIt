import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

function ViewImageScreen(props) {
  const imageUrl = "https://picsum.photos/500/800";

  return (
    <ImageBackground style={styles.container} source={{ uri: imageUrl }}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
