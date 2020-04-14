import React from 'react';
import PropTypes from 'prop-types';

const filterStates = ['All', 'Active', 'Completed'];
const resolveClassName = (state, filtered) => (
   `filter__button ${state === filtered ? 'filter__button_selected' : ''}`
);

const Filter = ({filtered = 'All', onFilterButtonClick = f => f}) => (
   <div className="filter">
      { filterStates.map( (state, i) =>
         <span
            key={i}
            className={ resolveClassName(state, filtered) }
            onClick={ () => onFilterButtonClick(state) }>
            {state}
         </span>
       ) }
   </div>
);

Filter.propTypes = {
   filtered: PropTypes.string,
   onFilterButtonClick: PropTypes.func
};

export default Filter;