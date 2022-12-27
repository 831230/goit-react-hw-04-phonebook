import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: props.state.contacts,
      filter: props.state.filter,
      name: '',
      number: '',
    };
  };

  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    state: PropTypes.shape({
      contacts: PropTypes.array,
      filter: PropTypes.string,
    })
  };

  addCurrentValue = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  createContactObject = evt => {
    evt.preventDefault();
    const valueName = evt.currentTarget.elements.name.value;
    const valueNumber = evt.currentTarget.elements.number.value;
    if (this.state.contacts.some(element => element.name === valueName)) {
      return Notiflix.Notify.warning(`${valueName} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              name: valueName,
              number: valueNumber,
              id: nanoid(),
            },
          ],
        };
      });
    }
  };

  filterContacts = () => {
    const filteredArray = [];
    this.state.contacts.filter(element => {
      if (element.name.includes(this.state.filter)) {
        filteredArray.push(element);
      }
      return filteredArray;
    });
    return filteredArray;
  };

  deleteContact = event => {
    if (event.target.nodeName === 'BUTTON') {
      let contactIndex;
      this.state.contacts.map((element, index) => {
        if (event.target.parentNode.textContent.includes(element.name)) {
          contactIndex = index;
          
        }
        return contactIndex
      });
      const array = [...this.state.contacts];
      array.splice(contactIndex, 1);
      this.setState({
        contacts: array,
      });
    }
  };

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <ContactForm
          nameTitle={'Name'}
          numberTitle={'Number'}
          btnTitle={'Add contact'}
          state={this.state}
          inputAction={this.addCurrentValue}
          submitAction={this.createContactObject}
        />
        <h2>{this.props.subtitle}</h2>
        <Filter
          filterTitle={'Finds contacts by name'}
          state={this.state}
          inputAction={this.addCurrentValue}
        />
        <ContactList
          namesArr={this.filterContacts()}
          btnTitle={'Delete'}
          btnAction={this.deleteContact}
        />
      </>
    );
  }
}

export default Section;
