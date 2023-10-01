import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as cartActions from "../../store/actions/cart";
import Productitem from '../../components/shop/ProductItem'

const ProductListScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Productitem
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={() => {
              navigation.navigate("ProductDetail", {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              });
            }}
            onAddToCart={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent: "space-around",}}
      />
    </View>
  );
}

export default ProductListScreen

const styles = StyleSheet.create({})