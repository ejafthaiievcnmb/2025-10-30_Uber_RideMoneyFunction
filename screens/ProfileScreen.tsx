import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

// Import the exported RideMoney function
import { Ridemoney } from "./RideScreen";

export default function ProfileScreen() {
  const [distance, setDistance] = useState("");
  const [total, setTotal] = useState("");

  // Use RideMoney from RideScreen
  function handleFare() {
    const fare = Ridemoney(distance);
    setTotal(fare);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2997d750",
      }}
    >
      <Text style={{ fontSize: 72, color: "white", fontWeight: "200" }}>
        Profile Screen
      </Text>

      <Text style={{ fontSize: 30, marginTop: 20 }}>Enter Distance (KM):</Text>
      <TextInput
        value={distance}
        onChangeText={setDistance}
        placeholder="e.g. 5"
        keyboardType="numeric"
        style={{
          width: 150,
          padding: 10,
          borderWidth: 2,
          marginTop: 10,
          fontSize: 24,
        }}
      />
      <Button title="Calculate Fare" onPress={handleFare} />
      <Text style={{ marginTop: 20, fontSize: 24 }}>Total Fare: {total}</Text>
    </View>
  );
}
