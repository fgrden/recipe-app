import React, {useEffect, useState} from 'react';
import { GridList } from '@material-ui/core';
import SingleMeal from "./SingleMeal";
import {IMeal} from "./interfaces/IMeal"

function WhishList(props) {
    const [wishList, setWishList] = useState<IMeal[]>([])

    useEffect(() => {
        let readLocalStorage: any = localStorage.getItem('whishList')
        readLocalStorage = JSON.parse(readLocalStorage)

        readLocalStorage && setWishList(readLocalStorage)
    }, [])


    return (
        <GridList cols={3}>
            {wishList && wishList.map((meal: IMeal) => {
                console.log(meal)
                return <SingleMeal {...meal}></SingleMeal>
            })}
        </ GridList>
    );
}

export default WhishList;