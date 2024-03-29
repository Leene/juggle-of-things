import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import _, { create } from "lodash";
import { CreateCalendarData } from "./CreateCalendarData/";

export function Calendar(props) {
  const { title } = props;

  function renderDayNames() {
    const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

    return dayNames.map((index) => (
      <Text key={"rdn" + index} style={styles.daysText}>
        {index}
      </Text>
    ));
  }
  let headline;
  function renderDayDates(selectedYear, selectedMonth) {
    headline = selectedYear + "-" + "05" + "-04";
    //headline = selectedYear + "-" + selectedMonth + "-01";
    const daysofMonth = CreateCalendarData(selectedYear, selectedMonth);
    return daysofMonth.map((index) => (
      <Text key={"rdd" + index} style={styles.daysButtonText}>
        {index.day}
      </Text>
    ));
  }

  return (
    <>
      <View>
        <Text style={styles.calendar_month}>
          {dayjs(headline).format("MMMM")}zzz
        </Text>
        {/* <Text style={""}>{selectedMonth[10].fullDate}</Text>
        <Text style={""}>{selectedMonth.fullDate}</Text> */}
      </View>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.days}>{renderDayNames()}</View>
        <View style={styles.days}>
          {/* <Text>{renderDaysOfMonth()}</Text> */}
        </View>
        <View style={styles.dayList}>{renderDayDates("2023", "04")}</View>

        {/* <CreateCalendarData year={"2024"} month={"4"} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },

  calendar_month: {
    fontWeight: "800",
    fontSize: 20,
    textAlign: "center",
  },
  days: {
    flexDirection: "row",
    backgroundColor: "gray",
    backgroundColor: "orange",
    //justifyContent: "space-evenly",
  },
  daysText: {
    fontWeight: "800",
    textAlign: "center",
    paddingTop: 5,
    marginTop: 5,
    marginRight: 10,
    marginLeft: 24,
  },
  daysButtonText: {
    fontWeight: "800",
    backgroundColor: "gray",
    borderRadius: 20,
    width: 30,
    height: 30,
    textAlign: "center",
    paddingTop: 5,
    marginTop: 5,
    marginLeft: 20,
  },
  dayList: {
    flexDirection: "row",

    flexWrap: "wrap",
    width: 372,
    backgroundColor: "hotpink",
  },
});
