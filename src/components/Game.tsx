import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Colors } from "../styles/colors";
import Header from './Header';
import { Coordinate, Direction, GestureEventType } from '../types/types';


//GAME CONSTANTS

const SNAKE_INITIAL_POSITION = [{x: 5, y: 5}];
const FOOD_INITIAL_POSITION = {x: 5, y: 20};
const GAME_BOUNDS = {xMin:0, xMax:35, yMin:0, yMax:63};
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

export default function Game():JSX.Element{
    const [direction, setDirection] = React.useState<Direction>(Direction.Right);
    const [snake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
    const [food, setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!isGameOver){
            const intervalID = setInterval(() => {
                moveSnake();
            }, MOVE_INTERVAL)
            return () => clearInterval(intervalID);

        }
    }, [isGameOver]);

    const moveSnake = () => {
        const snakeHead = snake[0]
        const newHead = { ...snakeHead }; //create a head copy

        // Check Game over
        switch(direction) {
            case Direction.Up:
                newHead.y -= 1;
            case Direction.Down:
                newHead.y += 1;
            case Direction.Left:
                newHead.x -= 1;
            case Direction.Right:
                newHead.x += 1;
                break;
            default:
            break;
        }

        // check if eats food
        setSnake([newHead, ...snake.slice(0, -1)]) //move Snake

    };

    const handleGesture = (event: GestureEventType) => {
        //Identify event
        // console.log(event.nativeEvent);
        const {translationX, translationY} = event.nativeEvent;
        // console.log("transX:",translationX, "transY:",translationY)

        // movement values
        // X: left-right: positive(>0) right-left:negative(<0)
        // Y: up-down: positive(>0) down-up: negative(<0)

        // console.log(direction)
        // up:1
        // down:3
        //left:2
        //right:0

        if (Math.abs(translationX) > Math.abs(translationY)){
            if(translationX > 0){
                setDirection(Direction.Right);
            } else {
                setDirection(Direction.Left);
            }

        
        } else {
            if (translationY > 0){
                setDirection(Direction.Down)
            } else {
                setDirection(Direction.Up)
            }
        }

    };
    return(
<PanGestureHandler onGestureEvent={handleGesture}>
    <SafeAreaView style={styles.container}>
        {/* <Header>
        </Header> */}
        <View style={styles.boundaries}>
            <View style={styles.snake}/> 
            
        </View>
        
    </SafeAreaView>
</PanGestureHandler>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    boundaries:{
        flex: 1,
        borderWidth: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: Colors.primary,
        backgroundColor: Colors.background,
        
    },
    snake: {
        width:20,
        height: 20,
        backgroundColor: 'red',
    }
})