import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../index.css';
import axios from 'axios';



class CreateEditForm extends React.Component {
    constructor(){
        super();
        this.state ={
            name:'',
            ingredients:'',
            instructions:'',
            created:false
        };
    }
    componentDidMount(){
        this.setStateFormRecipe(this.props.recipe);
    }
    ComponentWillReceiveProps(nextProps){
        this.setStateFormRecipe(nextProps.recipe);
    }

    setStateFormRecipe(recipe){
        this.setState({
            name:recipe?recipe.name:'',
            ingredients:recipe?recipe.ingredients:'',
            instructions:recipe?recipe.instructions:''
        });
    }
    handleChangeName(event){
        this.setState({name:event.target.value});
    }
    handleChangeIngredients(event){
        this.setState({ingredients:event.target.value});
    }
    handleChangeInstructions(event){
        this.setState({instructions:event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const {name,ingredients,instructions} = this.state;
         if (this.props.recipe) {
            this.props.onEdit(name,ingredients,instructions);
        } else {
            this.props.onCreate(name,ingredients,instructions);
            this.resetForm();
            this.setState({created:true});
            this.refs.name.focus();
        } 
    }
    resetForm(){
        this.setState({
            name:'',
            ingredients:'',
            instructions:''
        });
    }
    render(){
        //this destructor below is used to avoid the repetition of this.state.Atrributes as listed below
        const {name,ingredients,instructions,created}=this.state;
       // const {recipe, onCreate, onEdit}=this.props;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                { created && <div className='alert alert-success'>Your recipe was created</div>}

                
                <div className="form-group">
                <label htmlFor="name">Recipe name:</label>
                <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Enter Recipe name here'
                value={name} 
                onChange={this.handleChangeName.bind(this)}
                ref='name'
                />
                </div>
                <div className='form-group'>
                    <label htmlFor='ingredients'>Ingredients</label>
                <textarea
                className='form-control'
                rows='5'
                id='ingredients'
                placeholder='Enter Ingredient here,one per line'
                value={ingredients} 
                onChange={this.handleChangeIngredients.bind(this)}
                />
                
                </div>

                <div className='form-group'>
                    <label htmlFor='instructions'>Instructions</label>
                <textarea
                className='form-control'
                rows='10'
                id='instructions'
                placeholder='Enter Instructions here,one per line'
                value={instructions}  
                onChange={this.handleChangeInstructions.bind(this)}
                />
                </div>
                <input  
                className='btn btn-default btn--blue' 
                type='submit' 
                value={this.props.recipe ? 'Edit':'Create'}/>
            </form>
        );
    }
}
CreateEditForm.propTypes = {
    onCreate:PropTypes.func,
    onEdit:PropTypes.func,
    recipe:PropTypes.object
};

export default CreateEditForm;