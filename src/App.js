import React from 'react';
//import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types';
import BottomNavigationExampleSimple from './Navigation_bar/bottom_navigationBar.js';
import ListExampleFolder from './Navigation_bar/SubHeader.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import  './App.css';
import CreateEditForm from './views/CreateEditForm.js';
import RecipeDetail from './views/RecipeDetails.js';
import SearchBox from './views/SearchBox.js';
import RecipeList from './views/RecipeList.js';
import Cart from './components/cart';


// injectTapEventPlugin();
//this part of code i don't get but am trin to store on a local database
const LOCAL_STORAGE_KEY ='recipes';

class App extends React.Component{
  constructor(props){
    super(props);

    const localStorageRecipes = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    this.state = {
      showCreate:false,
      recipes: localStorageRecipes ?JSON.parse(localStorageRecipes):[],
      selectedRecipe:null,
      search:''
    };
    this.handleRecipeCreated = this.handleRecipeCreated.bind(this);
  }

  showCreate(){
    this.setState({
      showCreate:true,
      selectedRecipe:null
    });
  }
    
  handleRecipeCreated(name,ingredients,instructions) {
     const newRecipes = this.state.recipes.concat({
       id: new Date().getSeconds(),
       name,
       ingredients,
       instructions
     });
     this.updateRecipes(newRecipes); 
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newRecipes)) 
    console.log(newRecipes)
    console.log("this is the handleRecipeCreated"+" "+name, ingredients, instructions)
  }

  handleRecipeEdited(name,ingredients,instructions){
    const {recipe,selectedRecipe,recipes}=this.state;
    const editedRecipe = Object.assign({},selectedRecipe,{
      name,
      instructions,
      ingredients
    });
    const newRecipes= recipes.map(recipe=>
      recipe===selectedRecipe ? editedRecipe:recipe
    );
   this.updateRecipes(newRecipes);
   this.handleSelectRecipe(editedRecipe);   
  }
  
  handleSearchChange(search){
    this.setState({
      search
    });
  }

  updateRecipes(newRecipes){
    this.setState({
      recipes:newRecipes
    });

    window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newRecipes));
  }

  handleEditRecipe(){
    this.setState({
      showCreate:true
    });
  }

 handleSelectRecipe(recipe){
   this.setState({
     selectedRecipe:recipe,
     showCreate:false
   });
 }

 handleDeleteRecipe(recipeToDelete){
    const newRecipes = this.state.recipes.filter(recipe=>recipe!==recipeToDelete);
    this.updateRecipes(newRecipes);

    this.setState({
        selectedRecipe:null
    });
 }


   
  render(){
    console.log('------', BottomNavigationExampleSimple);
    const {recipes,selectedRecipe,showCreate,search}=this.state;
    const filteredRecipes = recipes
    .filter(recipe=>recipe.name.toLowerCase().indexOf(search.toLowerCase())>-1)
    .sort((a, b)=> a.name > b.name);

    return(
        <MuiThemeProvider>
          <div>
        <div className="container">
        <h3><b>Recipe Database</b></h3>
        <div className='row'>
        <div className='col-xs-4'>
          <button
          type='button'
          className='btn btn-default'
          style={{
            width:'100%',
            marginBottom:'5px'
          }}
          onClick={this.showCreate.bind(this)}>Create new Recipes</button> 
          <SearchBox onChange={this.handleSearchChange.bind(this)}/>
          <Cart/>
          <RecipeList
          recipes={filteredRecipes}
          onSelectRecipe={this.handleSelectRecipe.bind(this)}
          />
          <ListExampleFolder/>
      </div>
      <div className='col-xs-8'>
        { showCreate
        ?<CreateEditForm 
        onCreate={this.handleRecipeCreated.bind(this)}
        onEdit={this.handleRecipeEdited.bind(this)}
        recipe={selectedRecipe}
        />
        :<RecipeDetail
         recipe={selectedRecipe}
         onDelete={this.handleDeleteRecipe.bind(this)}
         onEdit={this.handleEditRecipe.bind(this)}
         />
        }
        </div>
        </div>
        </div>
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;