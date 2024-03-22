import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SinnTracker } from "./Screens/SinnTracker";

export default function App() {
  return (
    <>
      <SinnTracker />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
