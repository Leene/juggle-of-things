import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";

export function CreateCalendarData(year, month) {
  //const { year, month } = props;

  console.log(dayjs("6").format("MMMM"));
  console.log(dayjs().year(1));
  console.log(dayjs("1").daysInMonth());

  // befülle so oft wie monat im jahr tage hat collection
  //ausnahme für februar bei schaltjahren
  const data = [];

  LengthOfMonth = dayjs("1").daysInMonth();
  for (let i = 0; i < LengthOfMonth; i++) {
    data.push({
      day: i + 1,
      month: month,
      year: year,
      fullDate: year + "-" + month + "-" + i,
    });

    //console.log(i + "hä");
    //console.log(data);
  }

  return data;
  /*  <View style={styles.container}>
      <Text>{data[0].day}</Text>
      <Text>
        {year} {month}{" "}
      </Text>
    </View> */
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
  },
});
