import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import _, { create } from "lodash";
import { CreateCalendarData } from "./CreateCalendarData/";

////Key generator////////////////////////////////////////////////////
function generateKey(pre) {
  return `${pre}_${new Date().getTime()}`;
}

console.log('generateKey("3"): ' + generateKey("2"));
///////////////////////////////////////////////////////////

function renderDayNames(currentDate) {
  const dayNames = [
    dayjs(currentDate).format("dd"),
    dayjs(currentDate).add(1, "day").format("dd"),
    dayjs(currentDate).add(2, "day").format("dd"),
    dayjs(currentDate).add(3, "day").format("dd"),
    dayjs(currentDate).add(4, "day").format("dd"),
    dayjs(currentDate).add(5, "day").format("dd"),
    dayjs(currentDate).add(6, "day").format("dd"),
  ];

  console.log("renderDayNames:" + dayjs(currentDate).format("dd"));

  return dayNames.map((index) => (
    <Text key={"rdn" + index} style={styles.daysText}>
      {index}
    </Text>
  ));
}

export function Calendar(props) {
  const {
    selectedMonth,
    selectedYear,
    selectedYearState,
    setSelectedYearState,
    selectedMonthState,
    setSelectedMonthState,
  } = props;

  const currentDate = dayjs(
    selectedYearState + "-" + selectedMonthState + "-01"
  );
  const headline = dayjs(currentDate).format("MMMM") + " " + selectedYearState;
  // TODO normale Variable genug
  //////////////
  //const [selectedYearState, setSelectedYearState] = useState("");
  //const [selectedMonthState, setSelectedMonthState] = useState("");

  //////////////

  function renderDayDates() {
    const daysofMonth = CreateCalendarData(
      dayjs(currentDate).format("YYYY"),
      dayjs(currentDate).format("MM")
    );

    console.log("Gheadlinec: " + headline);
    console.log(
      "daysofMonth: " + daysofMonth[0].day,
      daysofMonth[0].month,
      daysofMonth[0].year
    );

    return daysofMonth.map((index) => (
      <Text key={"key_" + generateKey(index)} style={styles.daysButtonText}>
        {index.day}
      </Text>
    ));
  }

  ///////////////

  return (
    <>
      <View>
        <Text style={styles.calendar_month}>{headline}</Text>
        {/* <Text style={""}>{selectedMonth[10].fullDate}</Text>
        <Text style={""}>{selectedMonth.fullDate}</Text> */}
      </View>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.days}>{renderDayNames(currentDate)}</View>
        <View style={styles.days}>
          {/* <Text>{renderDaysOfMonth()}</Text> */}
        </View>
        <View style={styles.dayList}>{renderDayDates()}</View>

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
    borderWidth: 5,
  },
});
