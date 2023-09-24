import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../components/UI/Card'
import Productitem from '../../components/shop/ProductItem'

const ProductListScreen = () => {
  return (
    <View>
      <Productitem
        image={"itemData.item.imageUrl"}
        title={"itemData.item.title"}
        price={"itemData.item.price"}
      />
      <Productitem
        image={"itemData.item.imageUrl"}
        title={"itemData.item.title"}
        price={"itemData.item.price"}
      />
    </View>
  );
}

export default ProductListScreen

const styles = StyleSheet.create({})