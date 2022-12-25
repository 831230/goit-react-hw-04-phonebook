import { Component } from 'react';
import Section from 'components/Section/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  render() {
    return (
      <>
        <Section 
        title={"Phonebook"} 
        subtitle={"Contacts"} 
        
        // addContactOnSubmit={(contactObject)=>{
        //   console.log("App - addContactOnSubmit");
        //   this.setState(prevState => {
        //     return{
        //       contacts: [...prevState.contacts, contactObject],
        //     }
        //   },()=>{console.log(this.state);
        //   })
        // }}
        state={this.state}
        />
      </>
    );
  }
}

export default App;
