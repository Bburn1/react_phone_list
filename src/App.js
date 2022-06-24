import React, { Component, } from 'react'
import './App.css' 

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
 

export class App extends Component {

  state = {
    contacts:[],
    contactForEdit: this.createEmptyContact(),
  }

  createEmptyContact(){
    return {
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
    }
  }

  componentDidMount(){
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if (!contacts){
      this.setState({
        contacts:[],
      })
    }
    else {
      this.setState({
        contacts:[...contacts]
      })
    }
  }

  saveToStorage(contacts){
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }


  deleteContact = (id) =>{
    const contacts = [...this.state.contacts.filter((contact) => contact.id !== this.id)]
      this.setState({
        contacts: contacts
      })
      this.saveToStorage(contacts)
  }

  saveContact = (contact) => {
    if (!contact.id){
      this.createContact(contact)
    }else {
      this.updateContact(contact)
    }
  }

  addNewContact = () => {
    this.setState({
      contactForEdit: this.createEmptyContact()
    })
  }

  selectContact = (contact) => {
    this.setState({
      contactForEdit:contact,
    })
  }

  createContact(contact){
    contact.id = Date.now();
    const contacts = [...this.state.contacts, contact]
    this.saveToStorage(contacts)
    this.setState({
      contacts:contacts,
      contactForEdit: this.createEmptyContact(),
    })
    
  }

  updateContact(contact){
    this.setState((state)=>{
      const contacts = state.contacts.map((item) => 
      item.id === contact.id ? contact : item
      );
      this.saveToStorage(contacts);
      return{
        contacts,
        contactForEdit:contact,
      }

    })
  }

  render() {

    return (
    
        <div className="container">
          <div className='main'>

          
          <ContactList 
          contacts = {this.state.contacts}
          onDelete = {this.deleteContact}
          onAddContact = {this.addNewContact}
          onEditContact = {this.selectContact}

          
          />
    
          <ContactForm 
          key={this.state.contactForEdit.id}
          contactForEdit = {this.state.contactForEdit}
          onSubmit = {this.saveContact}
          onDelete = {this.deleteContact}

          
          />
    
    </div>
        </div>
      
    )
  }
}

export default App








