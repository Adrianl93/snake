import { Coordinate } from "../types/types";

export const checkEatsFood = (
    head: Coordinate,
    food:Coordinate,
    area: number,
    ):boolean =>{
        const distanceBeetweenFoodAndSnakeX: number = Math.abs(head.x - food.x);
        const distanceBeetweenFoodAndSnakeY: number = Math.abs(head.y - food.y);
        
        return(
            distanceBeetweenFoodAndSnakeX < area && distanceBeetweenFoodAndSnakeY < area
        );


}