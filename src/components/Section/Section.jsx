import { Component } from 'react'; 
import { nanoid } from 'nanoid'
import Phonebook from './Phonebook/Phonebook';
import NamesList from 'components/NamesList/NamesList';

class Section extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: [],
      name: "",
    }
  };

  addCurrentName = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("addCurrentName");
    this.setState({
      [name]: value,
    })
  };

  createContactObject = (evt) => {
    evt.preventDefault();
    const value = evt.currentTarget.elements.name.value;
    console.log(value);
    console.log("createContactObject");
    this.setState(prevState => {
      return{
        contacts: [...prevState.contacts, {
          name: value,
          id: nanoid(),
        }],
      }
    })
  };

  render(){
    return(
      <>
        <h2>{this.props.title}</h2>
        <Phonebook title={"Name"} btnTitle={"Add contact"} state={this.state} inputAction={this.addCurrentName} submitAction={this.createContactObject}/>
        <h2>{this.props.subtitle}</h2>
        <NamesList namesArr={this.state.contacts}/>
      </>
    )
  }
};

export default Section;