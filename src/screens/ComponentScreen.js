import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Najib';
    return(
        <View>
            <Text style={styles.tst}>Getting Started with react native</Text>
    <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
    );
};



const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
    tst: {
        fontSize: 45,
    }

     
});

export default ComponentsScreen;