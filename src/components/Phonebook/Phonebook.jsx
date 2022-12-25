const Phonebook = ({ nameTitle, numberTitle, btnTitle, state, inputAction, submitAction }) => {
  return (
    <div>
      <form onSubmit={submitAction}>
        <h3>{nameTitle}</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={state.name}
          required
          onChange={inputAction}
        />
        <h3>{numberTitle}</h3>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={inputAction}
        />
        <button type="submit">{btnTitle}</button>
      </form>
    </div>
  );
};

export default Phonebook;
