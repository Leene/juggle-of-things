import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SinnTracker } from "./Screens/SinnTrackerScreen";
import { AddButton } from "./components/AddButton";
import { Table } from "./components/Table";
import { DefaultButton } from "./components/DefaultButton";
import { InputField } from "./components/InputField";
import { Calendar } from "./components/Calendar";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

//const Stack = createNativeStackNavigator(); // erstellt HistoryStack damit vor zurück wie im Browser funzt

export default function App() {
  names = ["peter", "gustav", "edgar"];

  return (
    <>
      <View style={styles.container}>
        <SinnTracker />

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

        <InputField label_name={"Abbrechen"} label_alignment={"none"} />
        {/* >> possible lable alignments: inside, top, none */}

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
