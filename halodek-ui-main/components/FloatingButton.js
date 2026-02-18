import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function FloatingButton({ onPress }) {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Entypo name="plus" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 18,
    bottom: 28
  },
  button: {
    backgroundColor: "#FF6B35",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#FF6B35",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 12
  }
});
// The FloatingButton component is a functional component that renders a circular button with a plus icon. It is positioned absolutely at the bottom right corner of the screen. The button has a red background color and a shadow effect to make it stand out. When the button is pressed, it triggers the onPress function passed as a prop, which can be used to handle actions such as creating a new chat or opening a new screen.