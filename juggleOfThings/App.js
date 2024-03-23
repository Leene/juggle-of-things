import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SinnTracker } from "./Screens/SinnTracker";
import { Table } from "./components/Table";
import { AddButton } from "./components/AddButton";

export default function App() {
  names = ["peter", "gustav", "edgar"];

  return (
    <>
      <View style={styles.container}>
        <Table table_name={"Tabelle 1"} />
        <Table table_name={"Tabelle 2"} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <AddButton
            button_name={"Spar-ziel"}
            alignment={"left"}
            textColor={"white"}
            color={"orange"}
            textSize={30}
          />
          <AddButton
            button_name={"+/-"}
            alignment={"right"}
            textColor={"white"}
            color={"hotpink"}
            textSize={45}
          />
        </View>

        {/* <SinnTracker /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "peachpuff",
  },
});
