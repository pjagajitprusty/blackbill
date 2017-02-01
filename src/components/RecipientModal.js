import React from 'react'

class RecipientModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {...this.props.recipient}
    this.state.fname = this.state.name ? this.state.name.split(' ')[0] : ''
    this.state.lname = this.state.name ? this.state.name.split(' ')[1] : ''
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({[name] : value})

  }
  handleSubmit(e){
    e.preventDefault()
    var temp = {
      name : this.state.fname + ' ' + this.state.lname,
      address : this.state.address,
      phone : this.state.phone
    };

    this.props.updateRecipient(temp);
    this.props.toggleModal()
  }
  render() {
    var {fname, lname, address, phone} = this.state
    return (
        <form className="recipient-modal" onSubmit={this.handleSubmit} >
          <div>{this.props.title}</div>
          <div>Name :
            <input type="text" value={fname}
              name="fname" onChange={this.handleChange}
              pattern="[A-Za-z]+" title="Name should contain letters only"
              required/>
          </div>
          <div>Surname :
            <input type="text" value={lname} name="lname" onChange={this.handleChange}
              pattern="[A-Za-z]+" title="Surname should contain letters only"
              required/>
          </div>
          <div>Address :
            <input type="text" value={address ? address : ''} name="address" onChange={this.handleChange} required/>
          </div>
          <div>Phone :
            <input type="number" value={phone ? phone : ''} name="phone" onChange={this.handleChange} required/>
          </div>
          <div>
            <input type="button" value="Cancel" onClick={this.props.toggleModal} />
            <input type="submit" value="Submit"/>
          </div>
        </form>
    )
  }
}

module.exports = RecipientModal
