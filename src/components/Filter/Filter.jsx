
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

export default Filter;