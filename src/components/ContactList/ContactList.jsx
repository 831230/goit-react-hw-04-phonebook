import PropTypes from 'prop-types';

const ContactList = ({ names, btnAction }) => {
  return (
    <ul>
      {names &&
        names.map(name => {
          return (
            <li key={name.id} onClick={btnAction}>
              {name.name}
              &#58;&#8194;{name.number}
              <button>Delete</button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  names: PropTypes.array,
  btnAction: PropTypes.func,
};

export default ContactList;
