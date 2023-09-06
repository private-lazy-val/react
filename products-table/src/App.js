import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';

const PRODUCTS = [
  {category: 'Jiu-Jitsu Gi', price: '$49.99', stocked: true, name: 'Tatami'},
  {category: 'Jiu-Jitsu Gi', price: '$9.99', stocked: true, name: 'Venum'},
  {category: 'Jiu-Jitsu Gi', price: '$29.99', stocked: false, name: 'Fuji'},
  {category: 'Golf Clubs', price: '$99.99', stocked: true, name: 'TaylorMade'},
  {category: 'Golf Clubs', price: '$399.99', stocked: false, name: 'Wilson'},
  {category: 'Golf Clubs', price: '$199.99', stocked: true, name: 'Cobra'},
  {category: 'Golf Clubs', price: '$199.99', stocked: true, name: 'Ping'}
];
function App() {
  return (
      <FilterableProductTable products={PRODUCTS} />
  );
}

export default App;
