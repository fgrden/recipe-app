import React, {useEffect, useState} from 'react';
import fetcher from "./services/fetcher";
import ReactPlayer from 'react-player/lazy'
import {Button} from '@material-ui/core';
import {IMeal}from "./interfaces/IMeal"

const MealDetails: React.FC<{ match: any }> = ({match}) => {

    const [mealDetails, setMealDetails] = useState<IMeal>({
        strMealThumb: "",
        strYoutube: "",
        idMeal: "",
        strMeal: "",
        strInstructions: ""
    })


    useEffect(() => {
        const {id} = match.params
        fetcher(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(meals => setMealDetails(meals[0]))
    }, [])

    const handleClick: any = () => {
        let readLocalStorage: any = localStorage.getItem('whishList')
        readLocalStorage = JSON.parse(readLocalStorage)
        if (!readLocalStorage) {
            readLocalStorage = [mealDetails]
            localStorage.setItem('whishList', JSON.stringify(readLocalStorage))
            alert("Added to whishlist")
        } else {
            let isAlreadyInWishList: boolean  = false;

            readLocalStorage.forEach(item => {
                if(item.idMeal == mealDetails.idMeal) {
                    isAlreadyInWishList = true
                }
            })

            if(isAlreadyInWishList) {
                alert("Meal is already in whishlist")
            } else {
                readLocalStorage.push(mealDetails)
                localStorage.setItem('whishList', JSON.stringify(readLocalStorage))
                alert("Added to whishlist")
            }
        }
    }
    const {idMeal, strMeal, strInstructions, strYoutube, strMealThumb} = mealDetails
    return (
        <div>
            <h2>{strMeal}</h2>
            <div className="d-flex justify-content-between">
                <ReactPlayer url={strYoutube}/>
                <Button
                    variant="contained"
                    color="primary"
                    title="Add to whishlist"
                    onClick={handleClick}
                >
                    Add to whishlist
                </Button>
            </div>
            <h4>{strInstructions}</h4>
        </div>
    );
}

export default MealDetails;