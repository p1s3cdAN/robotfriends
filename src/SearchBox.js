import React from 'react';
import CardList from './CardList';

const SearchBox = () =>{
    return(
        <div className = 'pa2'>
            <input 
                className= 'pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
            />
        </div>
    );
}

export default SearchBox;