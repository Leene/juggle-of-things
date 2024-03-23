import { StyleSheet, Text, View } from "react-native";

export function Template(props) {
  const { table_name } = props;

  return (
    <View style={styles.container}>
      <Text>Bernd {table_name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: "center",
  },
});
