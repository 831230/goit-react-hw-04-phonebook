
const NamesList = ({namesArr}) => {
  return(
    <ul>
      {namesArr && namesArr.map(name => {
        return(
          <li key={name.id}>{name.name}</li>
        )
      })}
    </ul>
  )
}; 

export default NamesList;