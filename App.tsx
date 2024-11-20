import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import ListData from "./src/screens/ListData";
import DetailData from "./src/screens/DetailData";
import Profile from './src/screens/Profile';

type RootStackParamList = {
  Home: any;
  List: any;
  Detail: { id: number };
  Profile: any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={ListData} />
        <Stack.Screen name="Detail" component={DetailData} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
