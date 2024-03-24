import { StyleSheet, Text, View } from "react-native";

export function DefaultButton(props) {
  const { button_text, color, textColor, btn_width } = props;

  return (
    <View
      style={[
        styles.container,
        styles.shadow,
        {
          backgroundColor: color,
          width: btn_width,
        },
      ]}
    >
      <Text style={[styles.button_name, { color: textColor }]}>
        {button_text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  button_name: {
    fontWeight: "800",
    fontSize: 20,
    fontWeight: "bold",
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
});
