import React from "react";
import { View, H1, XStack, Input, Button } from "tamagui";
import { StyleSheet, StatusBar } from "react-native";
import { Plus } from "@tamagui/lucide-icons";

const App = () => {
  return (
    <View style={styles.container}>
      <XStack gap={"$3"}>
        <Input flex={1} placeholder={"add an item"} />
        <Button icon={Plus} />
      </XStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginTop: 20,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default App;
