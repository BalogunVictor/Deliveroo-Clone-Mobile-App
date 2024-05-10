import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoriesCard */}
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
      <CategoriesCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing"
      />
    </ScrollView>
  );
};

export default Categories;
