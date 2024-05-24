import { Pressable, StyleSheet, Text } from "react-native";

export default function CalculatorButton({ value, onPress, btnColor, textColor, width }) {
  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: btnColor ? btnColor : "#fff",
          width: width ? width : "23%",
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor ? textColor : "#fff" }]}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: "18%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
});
