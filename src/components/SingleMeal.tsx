import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Grid, GridListTile, GridListTileBar, IconButton} from '@material-ui/core';
import {Link} from "react-router-dom"
import {SingleMealProps} from "./interfaces/SingleMeal"



const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    title: {
        color: '#fff'
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    listItem: {
        maxHeight: '300px',
        width: "calc((100% / 3) - 30px )",
        margin: '15px',
        '&:hover': {
            cursor: "pointer",
            transform: 'scale(1.25)',
            zIndex: '99',
        },
    },
}));

function SingleMeal({idMeal, strMeal, strMealThumb}: SingleMealProps) {

    const classes = useStyles();
    const handleClick = () => {
        console.log("123")
    }
    return (
        <GridListTile
            key={idMeal}
            classes={{
                root: classes.listItem
            }}
            onClick={handleClick}
        >
            <Link to={`/meals/${idMeal}`}>
                <img src={strMealThumb}/>
                <GridListTileBar
                    title={strMeal}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                />
            </Link>
        </GridListTile>
    );
}

export default SingleMeal;