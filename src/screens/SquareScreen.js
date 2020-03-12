import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// first argument (state) object, red,green,blue.
// second argument (how should we change state object) that describe the update like increasing decreasing red,blue,green.
// state === {red: number, green: number, blue: number};
// action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            //   return { red: 0, green: 0, blue: 0, state.red + action.amount };
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};
const SquareScreen = () => {


    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    return (
        <View>
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Red" />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Blue"
            />
            <ColorCounter
                color="Green"
                onIncrease={() => }
                onDecrease={() => }
            />
            <View style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }} />

        </View>


    );
};



const styles = StyleSheet.create({

});

export default SquareScreen;