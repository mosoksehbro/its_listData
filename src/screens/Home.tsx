import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";
import Footer from "../components/Footer";

type RootStackParamList = {
  List: undefined;
  Profile: undefined;
  Home: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={{
          uri: "https://lottie.host/423e9e44-ba87-40ae-8954-ea41dacc023f/ZWbBu0Qvrv.json",
        }}
        autoPlay
        loop
        style= {styles.animation}
      />

      <Text style={styles.header}>Hey There!, Choice your destination</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.buttonText}>Go to List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingBottom : 200,
    backgroundColor: "#f8f8f8",
  },
  animation: {
    flex  : 1,
    width: "50%",
    height: "50%",
    marginBottom: 20,
    
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginVertical: 10,
    width: "60%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
});

export default Home;
