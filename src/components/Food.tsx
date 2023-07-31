import { StyleSheet, Text } from "react-native";
import { Coordinate } from "../types/types";


function getRandomFoodEmoji(){
    const foodEmojis = ["🍕","🍔","🍟","🌭","🍖","🍗","🥓","🧆","🍙","🥐","🍿"];
    const randomIndex = Math.floor(Math.random() * foodEmojis.length);
    const foodEmoji = foodEmojis[randomIndex];
    return foodEmoji
}
const foodEmoji = getRandomFoodEmoji();


export default function Food({ x, y }: Coordinate): JSX.Element {
    
    return <Text style={[{top: (y * 10)-10, left: (x * 10)-10}, styles.food]}>{foodEmoji}</Text>;
}

const styles = StyleSheet.create({
    food: {
        width: 20,
        height: 20,
        borderRadius: 7,
        position: "absolute",
    },
});