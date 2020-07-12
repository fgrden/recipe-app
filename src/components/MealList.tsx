import React, {useState, useEffect} from 'react';
import SingleMeal from "./SingleMeal";
import featcher from "./services/fetcher"
import { GridList } from '@material-ui/core';
import {IMeal} from "./interfaces/IMeal"

const MealList: React.FC = (props) =>  {
    const [mealList, setMealList] = useState<IMeal[]>([])

    useEffect(() => {
        featcher('https://www.themealdb.com/api/json/v2/9973533/latest.php')
            .then(meals => setMealList(meals))
    }, [])

    return (
        <GridList cols={3
        }>
            {mealList && mealList.map((meal: IMeal) => {
                return <SingleMeal {...meal}></SingleMeal>
            })}
        </ GridList>
    );
}

export default MealList;