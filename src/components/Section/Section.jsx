import { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from '../Phonebook/Phonebook';
import NamesList from 'components/NamesList/NamesList';
import Filter from 'components/Filter/Filter';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: props.state.contacts,
      filter: props.state.filter,
      name: props.state.name,
      number: props.state.number,
    };
  }

  addCurrentName = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log('addCurrentName', value);
    this.setState({
      [name]: value,
    });
  };

  createContactObject = evt => {
    evt.preventDefault();
    const valueName = evt.currentTarget.elements.name.value;
    const valueNumber = evt.currentTarget.elements.number.value;
    console.log(valueName);
    console.log('createContactObject');
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
  };

  filterContacts = () => {
    const filteredArray = [];
    this.state.contacts.filter(element => {
      if(element.name.includes(this.state.filter)){
        filteredArray.push(element)
      }
      return filteredArray
    })
    return filteredArray
  };

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Phonebook
          nameTitle={'Name'}
          numberTitle={'Number'}
          btnTitle={'Add contact'}
          state={this.state}
          inputAction={this.addCurrentName}
          submitAction={this.createContactObject}
        />
        <h2>{this.props.subtitle}</h2>
        <Filter filterTitle={'Finds contacts by name'} state={this.state} inputAction={this.addCurrentName}/>
        <NamesList namesArr={this.filterContacts()} />
      </>
    );
  }
}

export default Section;
