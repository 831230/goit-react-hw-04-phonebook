
const NamesList = ({namesArr}) => {
  return(
    <ul>
      {namesArr && namesArr.map(name => {
        return(
          <li key={name.id}>{name.name}	
          &#58;&#8194;{name.number}</li>
        )
      })}
    </ul>
  )
}; 

export default NamesList;