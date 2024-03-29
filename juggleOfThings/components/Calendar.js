import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import _, { create } from "lodash";
import { CreateCalendarData } from "./CreateCalendarData/";

const calendarData = [
  {
    dayname: "Fr",
    day: 1,
    month: 3,
    year: 2024,
    marked: "none",
    fullDate: "2024-03-01",
  },
  {
    dayname: "Sa",
    day: 2,
    month: 3,
    year: 2024,
    marked: "red",
    fullDate: "2024-03-02",
  },
  {
    dayname: "So",
    day: 3,
    month: 3,
    year: 2024,
    marked: "pink",
    fullDate: "2024-03-03",
  },
  {
    dayname: "Fr",
    day: 4,
    month: 3,
    year: 2024,
    marked: "none",
    fullDate: "2024-03-04",
  },
  {
    dayname: "Sa",
    day: 5,
    month: 3,
    year: 2024,
    marked: "red",
    fullDate: "2024-03-05",
  },
  {
    dayname: "So",
    day: 6,
    month: 3,
    year: 2024,
    marked: "pink",
    fullDate: "2024-03-06",
  },
  {
    dayname: "Fr",
    day: 7,
    month: 3,
    year: 2024,
    marked: "none",
    fullDate: "2024-03-07",
  },
  {
    dayname: "Sa",
    day: 8,
    month: 3,
    year: 2024,
    marked: "red",
    fullDate: "2024-03-09",
  },
  {
    dayname: "So",
    day: 9,
    month: 3,
    year: 2024,
    marked: "pink",
    fullDate: "2024-03-09",
  },
];

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

  function renderDayDates() {
    return calendarData.map((index) => (
      <Text key={"rdd" + index} style={styles.daysButtonText}>
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
  ////////// hier weiter
  const selectedMonth = CreateCalendarData("2024", "03");
  console.log("??");
  console.log("Moo:" + selectedMonth[0].fullDate);
  ////////////////
  return (
    <>
      <View>
        <Text style={styles.calendar_month}>
          {dayjs(calendarData.fullDate).format("MMMM")}
        </Text>
        <Text style={""}>{selectedMonth[1].fullDate}</Text>
        <Text style={""}>{selectedMonth.fullDate}</Text>
      </View>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.days}>{renderDayNames()}</View>
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
  },
});
