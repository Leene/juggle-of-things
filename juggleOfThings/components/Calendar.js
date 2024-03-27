import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import _ from "lodash";

const calendarData = [
  {
    dayname: "Fr",
    day: 1,
    month: 3,
    year: 2024,
    marked: "none",
  },
  {
    dayname: "Sa",
    day: 2,
    month: 3,
    year: 2024,
    marked: "red",
  },
  {
    dayname: "So",
    day: 3,
    month: 3,
    year: 2024,
    marked: "pink",
  },
  {
    dayname: "Fr",
    day: 1,
    month: 3,
    year: 2024,
    marked: "none",
  },
  {
    dayname: "Sa",
    day: 2,
    month: 3,
    year: 2024,
    marked: "red",
  },
  {
    dayname: "So",
    day: 3,
    month: 3,
    year: 2024,
    marked: "pink",
  },
  {
    dayname: "Fr",
    day: 1,
    month: 3,
    year: 2024,
    marked: "none",
  },
  {
    dayname: "Sa",
    day: 2,
    month: 3,
    year: 2024,
    marked: "red",
  },
  {
    dayname: "So",
    day: 3,
    month: 3,
    year: 2024,
    marked: "pink",
  },
];

export function Calendar(props) {
  const { title } = props;

  function renderDayNames() {
    const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

    return dayNames.map((index) => (
      <Text key={index} style={styles.daysText}>
        {index}
      </Text>
    ));
  }

  function renderDayDates() {
    return calendarData.map((index) => (
      <Text key={index} style={styles.daysButtonText}>
        {index.day}
      </Text>
    ));
  }

  const selected_month = 9;
  const selected_year = 2024;
  function renderDaysOfMonth(selected_month, selected_year) {
    const daysofMonth = dayjs(
      "'" + { selected_year } + "-" + { selected_month } + "-25'"
    ).daysInMonth();

    return <Text>{daysofMonth}</Text>;
  }

  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.days}>{renderDayNames()}</View>
      <View style={styles.days}>
        {/* <Text>{renderDaysOfMonth()}</Text> */}
      </View>
      <View style={styles.dayList}>{renderDayDates()}</View>
    </View>
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
