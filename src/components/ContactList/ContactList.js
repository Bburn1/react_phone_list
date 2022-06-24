import React, { Component } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css';


export class ContactList extends Component {
  render() {
    console.log(this.contact);
    return (
      <div className='list-container'>
        <div className='item-container'>
          {this.props.contacts.map((contact)=>{
            return (
              <ContactItem
              key={contact.id}
              contact={contact}
              onDelete = {this.props.onDelete}
              onEdit = {this.props.onEditContact}
            
            />
            )
          })}
        </div>
        <button id ='new' onClick={this.props.onAddContact}>new</button>
      </div>
    )
  }
}

export default ContactList 