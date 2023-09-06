import React, {useState} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = (props) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar inStockOnly={inStockOnly} filterText={filterText}
                       onFilterTextChange={setFilterText}
                       onInStockChange={setInStockOnly}/>
            <ProductTable inStockOnly={inStockOnly} filterText={filterText} products={props.products}/>
        </div>
    );
};

export default FilterableProductTable;