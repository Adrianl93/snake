import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function Game():JSX.Element{
    return(
<PanGestureHandler>
    <SafeAreaView>
        <View style={styles.snake}/>

        
    </SafeAreaView>
</PanGestureHandler>
    )
}

const styles = StyleSheet.create({
    snake: {
        width:20,
        height: 20,
        backgroundColor: 'red',
    }
})