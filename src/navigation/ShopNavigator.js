import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import StartUpScreen from "../screens/StartUpScreen";
import ProductListScreen from "../screens/shop/ProductListScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import UserProductScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import { Platform, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderBtn from "../components/UI/HeaderBtn";



const ProductStackNavigator = createNativeStackNavigator()

const AppStackNavigator = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const ProductsNavigator = () => {
  return (
    <ProductStackNavigator.Navigator>
      <ProductStackNavigator.Screen
        name="ProductListScreen"
        component={ProductListScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderBtn}>
              {/* <Item title="Cart" iconName='cart' onPress={() => navigation.navigate('CartScreen')} /> */}
              <MaterialCommunityIcons
                name="cart"
                size={25}
                onPress={() => navigation.navigate("CartScreen")}
                style={{ padding: 6 }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <ProductStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
      <ProductStackNavigator.Screen name="CartScreen" component={CartScreen} />
    </ProductStackNavigator.Navigator>
  );
}

const UserNavigator = () => {
  return (
    <ProductStackNavigator.Navigator>
      <ProductStackNavigator.Screen
        name="UserProduct"
        component={UserProductScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Your Products",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderBtn}>
                {/* <Item title="Add" iconName='md-cart' onPress={() => navigation.navigate('EditProductScreen')} /> */}
                <MaterialCommunityIcons
                  name="plus"
                  size={27}
                  onPress={() => navigation.navigate("EditProductScreen")}
                  style={{ padding: 6 }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
      <ProductStackNavigator.Screen
        name="EditProductScreen"
        component={EditProductScreen}
      />
    </ProductStackNavigator.Navigator>
  );
}

const OrderNavigator = () => {
  return (
    <ProductStackNavigator.Navigator>
      <ProductStackNavigator.Screen name="Order" component={OrderScreen} />
    </ProductStackNavigator.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      activeColor="white"
      shifting={true}
      barStyle={{ backgroundColor: "#FBF04B" }}
    >
      <Tab.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarLabel: "Products",
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
          tabBarLabel: "Orders",
        }}
      />
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarLabel: "User",
        }}
      />
    </Tab.Navigator>
  )
}

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator
        initialRouteName="StartUpScreen"
        screenOptions={{ headerShown: false }}
      >
        <AppStackNavigator.Screen
          name="StartUpScreen"
          component={StartUpScreen}
        />
        <AppStackNavigator.Screen
          name="TabNavigator"
          component={TabNavigator}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
