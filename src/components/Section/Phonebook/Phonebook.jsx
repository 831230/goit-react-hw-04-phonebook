const Phonebook = ({ title, btnTitle, state, inputAction, submitAction }) => {
  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={submitAction}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value= {state.name}
          required
          onChange={inputAction}
        />
        <button type="submit" >
          {btnTitle}
        </button>
      </form>
    </div>
  );
};

export default Phonebook;
