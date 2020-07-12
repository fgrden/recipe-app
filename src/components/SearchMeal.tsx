import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {createStyles, fade, Theme, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import {IMeal}from "./interfaces/IMeal"
import featcher from "./services/fetcher";
import {GridList} from "@material-ui/core";
import SingleMeal from "./SingleMeal";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }),
);

export default function SearchMeal() {
    const classes = useStyles();
    const [searchList, setSearchList] = useState<IMeal[]>([])


    const handleChange = ({ target }) => {
        const { value } = target

        const inputValueApi: string = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;


        if (value.length > 0) {
            featcher(inputValueApi)
                .then(meals => setSearchList(meals))
        } else {
            setSearchList([])
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link to="/">
                            Recipe App
                        </Link>
                    </Typography>
                    <div>
                        <Link to="/whishlist">
                            WhishList
                        </Link>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <GridList cols={3}>
                {searchList && searchList.map((meal: IMeal) => {
                    return <SingleMeal {...meal}></SingleMeal>
                })}
            </ GridList>
        </div>
    );
}