import PropTypes from 'prop-types';

const ContactForm = ({
  nameTitle,
  numberTitle,
  inputNameValue,
  inputNumberValue,
  addCurrentValue,
  addContact,
}) => {
  return (
    <div>
      <form onSubmit={addContact}>
        <h3>{nameTitle}</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={inputNameValue}
          required
          onChange={addCurrentValue}
        />
        <h3>{numberTitle}</h3>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={inputNumberValue}
          onChange={addCurrentValue}
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  nameTitle: PropTypes.string,
  numberTitle: PropTypes.string,
  inputNameValue: PropTypes.string,
  inputNumberValue: PropTypes.string,
  addCurrentValue: PropTypes.func,
  addContact: PropTypes.func,
};

export default ContactForm;
