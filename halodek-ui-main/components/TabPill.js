import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TabPill() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Text style={[styles.tabText, styles.activeText]}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabNeutral}>
        <Text style={styles.tabText}>Status</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabNeutral}>
        <Text style={styles.tabText}>Calls</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#FFEFE8",
    borderRadius: 14,
    padding: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: "#E85716",
    shadowColor: "#E85716",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    elevation: 6,
  },
  tabNeutral: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  tabText: {
    fontSize: 14,
    color: "#8A5B52"
  },
  activeText: {
    color: "#fff",
    fontWeight: "700"
  }
});
