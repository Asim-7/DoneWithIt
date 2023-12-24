import react from "react";
import WelcomScreen from "./app/screens/WelcomScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomScreen} />
        <Stack.Screen name="Details" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
