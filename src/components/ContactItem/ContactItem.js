import React, { Component } from 'react'
import './ContactItem.css'

export class ContactItem extends Component {

  onItemDelete = (e) => {
    e.stopPropagation();
    this.props.onDelete(this.props.contact.id)
  }

  onContactEdit = (e) => {
    e.stopPropagation()
      this.props.onEdit(this.props.contact)
  }


  render() {

    console.log(this.props.contact.firstName);
    return (
      <div className='contact-item'>
        <p className='content'
          onDoubleClick={this.onContactEdit}>
          {this.props.contact.firstName}{this.props.contact.lastName}
        </p>
        <span 
        className='delete-btn'
        onClick={this.onItemDelete}>
          X
        </span>
      </div>
    )
  }
}

export default ContactItem