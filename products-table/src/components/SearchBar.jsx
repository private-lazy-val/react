import React from 'react';

const SearchBar = (props) => {

    return (
        <form>
            <input type="text" placeholder="Search..." value={props.filterText}
                   onChange={(e) => props.onFilterTextChange(e.target.value)}/>
            <p>
                <input type="checkbox" checked={props.inStockOnly}
                       onChange={(e) => props.onInStockChange(e.target.checked)}/>
                {' '}
                Only show products in stock
            </p>
        </form>
    );
};

export default SearchBar;