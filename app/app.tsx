import React, { useState } from "react";
import {
  View,
  H1,
  XStack,
  Input,
  Button,
  Form,
  Text,
  SizableText,
  Paragraph,
} from "tamagui";
import { StyleSheet, StatusBar, TextInput, Animated } from "react-native";
import { Plus } from "@tamagui/lucide-icons";
import add = Animated.add;

const MOCK_DATA = [
  {
    id: "1",
    name: "Something",
  },
  {
    id: "2",
    name: "something else",
  },
];

const App = () => {
  const [itemToAdd, setItemToAdd] = useState("");
  const addHandler = (text) => {
    console.log(text);
  };

  const logger = () => {
    console.log(itemToAdd);
  };

  return (
    <View style={styles.container}>
      <XStack alignItems={"center"} flexDirection={"row"} gap={"$3"}>
        <Input
          flex={1}
          placeholder={"add an item"}
          borderWidth={2}
          value={itemToAdd}
          onChangeText={setItemToAdd}
        />
        <Button icon={Plus} onPress={addHandler} />
      </XStack>
      {MOCK_DATA.map((item) => (
        <>
          <Text>Text</Text>
          <SizableText>Sizable Text</SizableText>
          <Paragraph>Paragraph</Paragraph>
        </>
      ))}
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
