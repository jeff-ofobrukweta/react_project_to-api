import React from 'react';
import PropTypes from 'prop-types';

const SearchBox =({onChange})=>(
    <input
        type="text"
        className="form-control"
        placeholder="Enter your search here"
        autoComplete={true}
        style={{marginBottom:'5px'}}
        onChange={event=>onChange(event.target.value)}
    />
);


SearchBox.propTypes ={
    onChange:PropTypes.func.isRequired
};



export default SearchBox;