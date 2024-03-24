import { StyleSheet, Text, TextInput, View } from "react-native";

export function InputField(props) {
  const { label_name, label_alignment } = props;

  let element = "";

  if (label_alignment === "inside") {
    element = (
      <View style={styles.container}>
        <TextInput
          style={[styles.inputText, { width: 150, margin: 5 }]}
          placeholder={label_name}
        ></TextInput>
      </View>
    );
  } else if (label_alignment === "none") {
    element = (
      <View style={styles.container}>
        <TextInput
          style={[styles.inputText, { width: 150, margin: 5 }]}
        ></TextInput>
      </View>
    );
  } else if (label_alignment === "top") {
    element = (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", marginLeft: 5 }}>{label_name}</Text>
        <TextInput
          style={[styles.inputText, { width: 150, margin: 5 }]}
        ></TextInput>
      </View>
    );
  } else {
    element = (
      <View style={styles.container}>
        <TextInput
          style={[styles.inputText, { width: 150, margin: 5 }]}
          placeholder="ungültiges Label"
        ></TextInput>
      </View>
    );
  }

  return element;
  {
    /* <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginLeft: 5 }}>{label_name}</Text>
      <TextInput
        style={[styles.inputText, { width: 150, margin: 5 }]}
        placeholder={label_name}
      ></TextInput>
    </View> */
  }
}

const styles = StyleSheet.create({
  container: {},
  inputText: {
    padding: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
  },
});
