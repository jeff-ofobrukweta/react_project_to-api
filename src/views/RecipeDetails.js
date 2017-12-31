import * as  React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails=({recipe,onDelete,onEdit,confirm})=>{
    const confirmDelete =() =>{
        alert('Are you sure you want to delete this recipe?');
        // if(confirm('Are you sure you want to delete this recipe?')){
           onDelete(recipe);
        console.log("this is the recipe to confirm deleted"+" "+recipe)
        // }
    };
    return (
        <div>
            {recipe ?
            <div>
                <h2>{recipe.name}</h2>

                <h3>Ingridients:</h3>
                <p style={{whiteSpace:'pre-wrap'}}>{recipe.ingridients}</p>

                <h3>Instructions:</h3>
                <p style={{whiteSpace:'pre-wrap'}}>{recipe.instructions}</p>
                <label htmlFor='dateOfupload'>Date</label>
                <p>{new Date().toJSON()}</p>
            <div className='btn-toolbar'>'
                <button 
                type='button'
                className='btn btn-default'
                onClick={onEdit}
                >Edit Recipe</button>
                <button 
                type='button'
                className='btn btn-danger'
                onClick={confirmDelete}
                >Delete Recipe</button>
            </div>
        </div>
        :
        <div> <b></b></div>
         }
         </div>
    );
};

RecipeDetails.propTypes = {
    recipe:PropTypes.object,
    onDelete:PropTypes.func.isRequired,
    onEdit:PropTypes.func.isRequired
};

export default RecipeDetails;



