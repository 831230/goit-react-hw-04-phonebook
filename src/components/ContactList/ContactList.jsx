import PropTypes from 'prop-types';

const ContactList = ({namesArr, btnTitle, btnAction}) => {
  return(
    <ul>
      {namesArr && namesArr.map(name => {
        return(
          <li key={name.id} onClick={btnAction}>{name.name}	
          &#58;&#8194;{name.number}
          <button >{btnTitle}</button>
          </li>
        )
      })}
    </ul>
  )
}; 

ContactList.propTypes = {
  namesArr: PropTypes.array,
  btnTitle: PropTypes.string,
  btnAction: PropTypes.func,
};

export default ContactList;