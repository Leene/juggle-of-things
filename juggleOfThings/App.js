import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SinnTracker } from "./Screens/SinnTracker";
import { AddButton } from "./components/AddButton";
import { Table } from "./components/Table";

import { DefaultButton } from "./components/DefaultButton";

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
            button_text={"Spar-ziel"}
            alignment={"left"}
            textColor={"white"}
            color={"orange"}
            textSize={30}
          />
          <AddButton
            button_text={"+/-"}
            alignment={"right"}
            textColor={"white"}
            color={"hotpink"}
            textSize={45}
          />
        </View>
        <DefaultButton
          button_text={"Speichern"}
          btn_width={140}
          textColor={"white"}
          color={"darkslateblue"}
        />
        <DefaultButton
          button_text={"Abbrechen"}
          btn_width={140}
          textColor={"white"}
          color={"black"}
        />
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
