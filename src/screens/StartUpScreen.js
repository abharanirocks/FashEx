import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";


const StartUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Svg
          width={350}
          height={350}
          viewBox="0 0 200 300"
          fill="none"
          style={styles.svg}
        >
          <Circle cx={150} cy={150} r={150} fill="#FBF04B" />
          <Path
            d="M138.984 114L138.984 249"
            stroke="white"
            strokeWidth={9}
            strokeLinecap="round"
          />
          <Path
            d="M205 182.984L70 182.984"
            stroke="white"
            strokeWidth={9}
            strokeLinecap="round"
          />
        </Svg>
      </View>
      <Text style={styles.title}>FashEx...</Text>
      <TouchableOpacity
        style={styles.clickme}
        onPress={() => {try {
 navigation.navigate("TabNavigator", {
   screen: "ProductListScreen",
 });
} catch (error) {
  console.error("Navigation error:", error);
}}}
      >
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  svg: {
    marginTop: -50,
    // backgroundColor: "black",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 80,
    color: "black",
    marginTop: "150%",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "10%",
  },
  clickme: {
    backgroundColor: "#FBF04B",
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "40%",
    marginTop: "10%",
  },
});

export default StartUpScreen;
