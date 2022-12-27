import PropTypes from 'prop-types';

const Filter = ({filterTitle, state, inputAction}) => {
  return(
    <div>
      <form>
        <h4>{filterTitle}</h4>
        <input 
        type="text"
        name="filter" 
        value={state.filter}
        onChange={inputAction}/>
      </form>
    </div>
  )
};

Filter.propTypes = {
  filterTitle: PropTypes.string,
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
  }),
  inputAction: PropTypes.func,
};

export default Filter;