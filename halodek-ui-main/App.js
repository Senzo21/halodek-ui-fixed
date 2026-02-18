import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, FlatList } from "react-native";
import Header from "./components/Header";
import TabPill from "./components/TabPill";
import ChatItem from "./components/ChatItem";
import FloatingButton from "./components/FloatingButton";

// Using remote avatars so no local assets are required.
const CHAT_DATA = [
  { id: "1", name: "Faza Dzikrulloh", message: "Typing...", time: "14.30", unread: 0, typing: true, avatar: { uri: "https://i.pravatar.cc/150?img=12" } },
  { id: "2", name: "Hatypo Studio", message: "Faza — Can you help me to do with new project...", time: "14.30", unread: 2, avatar: { uri: "https://i.pravatar.cc/150?img=8" } },
  { id: "3", name: "Zhofran A", message: "I think we should upgrade the social media...", time: "14.00", unread: 2, avatar: { uri: "https://i.pravatar.cc/150?img=5" } },
  { id: "4", name: "Vito Arvy", message: "Okay adhit, I'll tell faza about it 👍🏼", time: "13.40", unread: 0, avatar: { uri: "https://i.pravatar.cc/150?img=15" } },
  { id: "5", name: "Raul", message: "Thanks Raul! 🙏✨", time: "Yesterday", unread: 0, avatar: { uri: "https://i.pravatar.cc/150?img=20" } },
  { id: "6", name: "Farhan Bagas", message: "Great work farhan! 👍 I'll tell faza about logo...", time: "29/08/22", unread: 0, avatar: { uri: "https://i.pravatar.cc/150?img=30" } },
  { id: "7", name: "Abdull", message: "Perfecto!🔥 I will check it later", time: "28/08/22", unread: 0, avatar: { uri: "https://i.pravatar.cc/150?img=32" } },
  { id: "8", name: "Ibe hatypo", message: "nicely done bro!👍🏼", time: "—", unread: 0, avatar: { uri: "https://i.pravatar.cc/150?img=3" } }
];
// The App component is the main functional component of the application. It uses a SafeAreaView to ensure that content is displayed within the safe area boundaries of a device. The StatusBar is configured to have a dark content style and a transparent background. The Header component displays the title "HALODEK", while the TabPill component provides tab navigation. The FlatList component renders the list of chat items using the ChatItem component, and a FloatingButton is included for creating new chats.
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Header title="HALODEK" />
      <View style={styles.tabContainer}>
        <TabPill />
      </View>

      <FlatList
        data={CHAT_DATA}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ChatItem {...item} />}
      />

      <FloatingButton onPress={() => console.log("New chat")} />
    </SafeAreaView>
  );
}
// The styles for the app are defined using StyleSheet. The container style sets up the main layout and background color, while the tabContainer and listContent styles provide padding and spacing for the tab navigation and chat list respectively.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF9F6"
  },
  tabContainer: {
    paddingHorizontal: 18,
    marginTop: 14,
  },
  listContent: {
    paddingTop: 8,
    paddingHorizontal: 18,
    paddingBottom: 36
  }
});
// This file is the main entry point of the application. It sets up the overall structure and layout of the app, including the header, tab navigation, chat list, and floating action button. The chat data is hardcoded for demonstration purposes, and the app uses remote avatar images to avoid the need for local assets.