import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  search: {},
});
