import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ChatItem({
  name,
  message,
  time,
  unread = 0,
  typing = false,
  avatar
}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.row}>
      <Image source={avatar} style={styles.avatar} />

      <View style={styles.center}>
        <View style={styles.topLine}>
          <Text numberOfLines={1} style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>

        <View style={styles.bottomLine}>
          <Text numberOfLines={1} style={[styles.message, typing && styles.typing]}>
            {message}
          </Text>

          {unread > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unread}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: "#EAEAEA",
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 28,
    marginRight: 12,
    backgroundColor: "#eee"
  },
  center: {
    flex: 1,
    justifyContent: "center"
  },
  topLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
    color: "#222",
    maxWidth: "70%"
  },
  time: {
    fontSize: 12,
    color: "#9D9D9D"
  },
  bottomLine: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6
  },
  message: {
    color: "#6B6B6B",
    flex: 1,
    fontSize: 13
  },
  typing: {
    color: "#E85716",
    fontWeight: "600"
  },
  badge: {
    backgroundColor: "#FF6B35",
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    paddingHorizontal: 6
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12
  }
});
