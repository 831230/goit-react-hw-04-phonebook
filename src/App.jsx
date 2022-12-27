import { Component } from 'react';
import Section from 'components/Section/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  render() {
    return (
      <>
        <Section 
        title={"Phonebook"} 
        subtitle={"Contacts"} 
        state={this.state}
        />
      </>
    );
  }
}

export default App;