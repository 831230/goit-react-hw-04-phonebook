import { Component } from 'react';
import Section from 'components/Section/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
    };
  }

  render() {
    return (
      <>
        <Section 
        title={"Phonebook"} 
        subtitle={"Contacts"} 
        state={this.state}
        // addContactOnSubmit={(object)=>{
        //   this.setState(prevState => {
        //     return{
        //       contacts: prevState.push(object),
        //     }
        //   })
        // }}
        />
      </>
    );
  }
}

export default App;
