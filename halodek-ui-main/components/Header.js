import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export default function Header({ title = "HALODEK" }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.right}>
        <TouchableOpacity style={styles.iconBtn} onPress={() => {}}>
          <MaterialIcons name="search" size={22} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn} onPress={() => {}}>
          <Entypo name="dots-three-vertical" size={20} color="#222" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#E55B1C",
    letterSpacing: 0.5,
  },
  right: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconBtn: {
    marginLeft: 12,
    padding: 6,
    borderRadius: 10,
  }
});
