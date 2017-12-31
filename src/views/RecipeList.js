import React from 'react';
//import Image from '../Image/pexels-photo-301290.jpeg';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import '../index.css';

const RecipeList =({recipes,onSelectRecipe})=>(
            <ul className='list-unstyled'>
            <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>

            {recipes.map((recipe)=><li key={(recipe).id} className='collection-item'>
            <a onClick={onSelectRecipe.bind(null,recipe)}>Recipe-name:{recipe.name}</a></li>)}
            </ReactCSSTransitionGroup>
        </ul>
        
);
RecipeList.propTypes = {
  recipes:PropTypes.array.isRequired,
  onSelectRecipe:PropTypes.func.isRequired
}

export default RecipeList;