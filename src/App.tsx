import React from 'react';
import styled from 'styled-components';
import MealList from './components/MealList';
import SearchMeal from './components/SearchMeal';
import MealDetails from './components/MealDetails';
import WhishList from './components/WhishList';

import "./style.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";

const StyledAside = styled.aside`
  position: absolute;
  left: 0;
  top:0;
  height: 200vh;
  background: #eeeeee;
  width: 300px;
`;

const AppWraper = styled.div`
margin-left: 300px;
padding: 30px;
`

interface ITemplate {
    rows: Array<object>,
}

class App extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <StyledAside>
                    <p className="title">R</p>
                    <p className="title">E</p>
                    <p className="title">C</p>
                    <p className="title">I</p>
                    <p className="title">P</p>
                    <p className="title">E</p>
                    <p className="title">A</p>
                    <p className="title">P</p>
                    <p className="title">P</p>
                </StyledAside>
                <AppWraper className="App">
                    <SearchMeal/>
                    {/*<MealList/>*/}
                    <Switch>
                        <Route exact path="/" component={MealList}/>
                        <Route exact path="/meals/:id" component={MealDetails}/>
                        <Route exact path="/whishlist" component={WhishList}/>
                    </Switch>
                </AppWraper>
            </Router>
        )
    }
}


export default App;
