import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to Lisat Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
       <Button
        title="Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
       <Button
        title="Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
       <Button
        title="Square Screen Demo"
        onPress={() => navigation.navigate('Square')}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
