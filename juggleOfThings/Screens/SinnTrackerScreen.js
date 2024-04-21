import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "../components/Calendar";
import dayjs from "dayjs";
import React, { useState } from "react";

export function SinnTracker() {
  const [selectedYearState, setSelectedYearState] = useState(
    dayjs().format("YYYY")
  );

  const [selectedMonthState, setSelectedMonthState] = useState(
    dayjs().format("MM") - 2
  );

  console.log("selectedMonthState" + selectedMonthState);
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={styles.headline_text}>Sünden</Text>
      </View>
      <View style={styles.add_template}>
        <Text>Anlegen</Text>
        <Calendar
          selectedYearState={selectedYearState}
          setSelectedYearState={setSelectedYearState}
          selectedMonthState={selectedMonthState}
          setSelectedMonthState={setSelectedMonthState}
        />
      </View>
      <View style={styles.report_sin}>
        <Text>Report</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rosybrown",
    alignItems: "center",
    justifyContent: "center",
  },

  headline: {
    width: "100%",
    height: 80,
    backgroundColor: "mediumpurple",
    alignItems: "center",
  },
  headline_text: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textTransform: "uppercase",
  },
  add_template: {
    width: "100%",
    flex: 2,
    backgroundColor: "brown",
  },
  report_sin: {
    width: "100%",
    flex: 1,
    backgroundColor: "coral",
  },
});
