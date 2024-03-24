import { StyleSheet, Text, View } from "react-native";

export function AddButton(props) {
  const { button_text, alignment, color, textSize, textColor } = props;

  let align = "";
  console.log(alignment);

  if (alignment === "left") {
    align = ["flex-start", 90, 0];
  } else if (alignment === "right") {
    align = ["flex-end", 0, 90];
  }

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
            alignSelf: align[0],
            borderTopRightRadius: align[1],
            borderTopLeftRadius: align[2],
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text
          style={[styles.buttonText, { fontSize: textSize, color: textColor }]}
        >
          {button_text}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: "center",
    padding: 5,
    width: 100,
    height: 100,
  },

  buttonText: {
    fontWeight: "800",
    marginTop: 10,
  },
});
