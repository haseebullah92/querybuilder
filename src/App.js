import React, { Component } from 'react';
import './App.css';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';
import QueryBuilder from 'react-querybuilder';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      fields: [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
        { name: 'age', label: 'Age' },
        { name: 'address', label: 'Address' },
        { name: 'phone', label: 'Phone' },
        { name: 'email', label: 'Email' },
        { name: 'twitter', label: 'Twitter' },
        { name: 'isDev', label: 'Is a Developer?', value: false }
      ]
    };
    this.openModal = this.openModal.bind(this);
    this.logQuery = this.logQuery.bind(this);
  }

  openModal = () => {
    this.setState({
      modal: true
    });
  }

  closeModel = () => {
    this.setState({
      modal: false
    });
  }

  logQuery = (query) => {
    console.log(query);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            onClick={this.openModal}
          >
            Open Modal
          </a>
        </header>
        <Modal isOpen={this.state.modal} toggle={this.closeModel} className={this.props.className}>
          <ModalHeader toggle={this.closeModel}>Query Builder</ModalHeader>
          <ModalBody>
          <QueryBuilder fields={this.state.fields} onQueryChange={this.logQuery} />
        </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.closeModel}>Do Something</Button> */}
            <Button color="secondary" onClick={this.closeModel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
