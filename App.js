import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [radius, setRadius] = useState("");
  const [height, setHeight] = useState("");
  const [surfaceArea, setSurfaceArea] = useState(null);

  const calculateSurfaceArea = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
      setSurfaceArea("Invaild input!");
      return;
    }

    const result = 2 * Math.PI * r * (r + h);
    setSurfaceArea(result.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Cylinder Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="(R):"
        keyboardType="numeric"
        value={radius}
        onChangeText={setRadius}
      />

      <TextInput
        style={styles.input}
        placeholder="(H):"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <Button title="Calculate" onPress={calculateSurfaceArea} />

      {surfaceArea !== null && (
        <Text style={styles.result}>The result is: {surfaceArea} !</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
  },

  input: {
    width: "50%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

