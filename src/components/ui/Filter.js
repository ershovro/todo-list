import React from 'react';
import PropTypes from 'prop-types';

const FILTER_STATES = ['All', 'Active', 'Completed'];
const resolveClassName = (state, filtered) => (
   `filter__button ${state === filtered ? 'filter__button_selected' : ''}`
);

const Filter = ({filtered = 'All', onFilterButtonClick = f => f}) => (
   <div className="filter">
      Show: { FILTER_STATES.map( (state, i) =>
         <button
            key={i}
            className={ resolveClassName(state, filtered) }
            onClick={ () => onFilterButtonClick( state.toLowerCase() ) }>
            {state}
         </button>
       ) }
   </div>
);

Filter.propTypes = {
   filtered: PropTypes.string,
   onFilterButtonClick: PropTypes.func
};

export default Filter;