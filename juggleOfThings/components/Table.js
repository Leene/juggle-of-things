import { StyleSheet, Text, View } from "react-native";

const data = [
  {
    date: "11-02-2024",
    wert2: ["82", "73", "64"],
    wert3: 66,
  },
  {
    date: "19-02-2024",
    wert2: ["23", "34", "66"],
    wert3: 77,
  },
  {
    date: "10-02-2024",
    wert2: ["10", "25", "50"],
    wert3: 1,
  },
];

export function Table(props) {
  const { table_name } = props;

  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Text style={styles.headline_text}>{table_name}</Text>
      </View>
      <View style={styles.table}>
        <View View style={styles.table_head}>
          <Text style={styles.table_head_name}>{"Col1"}</Text>
          <Text style={styles.table_head_name}>{"Col2"}</Text>
          <Text style={styles.table_head_name}>{"Col3"}</Text>
        </View>
        <View View style={styles.tablerow}>
          <Text style={styles.tablecell}>{data[0].date}</Text>
          <Text style={styles.tablecell}>{data[0].wert2}</Text>
          <Text style={styles.tablecell}>{data[0].wert3}</Text>
        </View>
        <View View style={styles.tablerow}>
          <Text style={styles.tablecell}>{data[1].date}</Text>
          <Text style={styles.tablecell}>{data[1].wert2}</Text>
          <Text style={styles.tablecell}>{data[1].wert3}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
  },

  headline: {
    width: "93%",
    height: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    //alignItems: "center",
  },
  headline_text: {
    paddingLeft: 10,
    fontSize: 22,
    fontWeight: "600",
    color: "black",
    //textTransform: "uppercase",
  },
  add_template: {
    width: "100%",
    flex: 1,
    backgroundColor: "brown",
  },
  report_sin: {
    width: "100%",
    flex: 1,
    backgroundColor: "coral",
  },

  table: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    fontSize: 18,
    alignItems: "center",
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  table_head: {
    flexDirection: "row",
    gap: 5,
  },
  table_head_name: {
    backgroundColor: "mediumpurple",
    width: "30%",
    fontWeight: "800",
    gap: 5,
    textAlign: "center",
    padding: 5,
  },
  tablerow: {
    flexDirection: "row",
    gap: 5,
  },
  tablecell: {
    width: "30%",
    backgroundColor: "lightgrey",
    padding: 5,
    marginTop: 5,
  },
});
