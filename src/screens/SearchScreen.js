import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, seTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => seTerm(newTerm)}
        onTermSubmit={() => console.log("term submit")}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
