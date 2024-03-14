import React from 'react';
import {View, Text} from 'tamagui'
import {StyleSheet, StatusBar} from "react-native";


const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is my app in a safe Area</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;