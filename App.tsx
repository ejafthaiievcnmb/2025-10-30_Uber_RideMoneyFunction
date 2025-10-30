import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import RideScreen from "./screens/RideScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Tabs.Navigator>
      <Tabs.Screen name="Ride" component={RideScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />

     </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
