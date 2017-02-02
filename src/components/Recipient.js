import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { connect } from 'react-redux'

import RecipientModal from './RecipientModal'


class Recipient extends React.Component {
  constructor() {
    super()
    this.onAmountChange = this.onAmountChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      openModal : false
    }
  }
  toggleModal() {
    this.setState({openModal : !this.state.openModal})
  }
  onAmountChange() {
    this.props.updateInvoiceAmount(this.refs.invoiceAmount.value)
  }
  onDateChange(dt) {
    this.props.updateInvoiceDate(dt.toDate())
  }
  render() {

    let {invoice, invoiceAmount, paymentTarget, recipient, additionalFiles} = this.props
    let recipientTitle = Object.keys(recipient).length === 0 && recipient.constructor === Object ? 'Add Recipient' : 'Edit Recipient'
    return (
      <div className="recipient-wrapper">
        <div className='left-panel'>
          <div>
            <label><strong>File Name:</strong></label> {invoice.name}
          </div>
          <div>
            <label>Invoice Amount:</label>
            <input type="number" ref="invoiceAmount" value={invoiceAmount} onChange={this.onAmountChange}/>
          </div>
          <div>
            <label>Payment Target:</label>
            <DatePicker placeholderText="Choose Date" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select"
              selected={moment(new Date(paymentTarget))}
              onChange={this.onDateChange} />
          </div>
          <div>
            <label><strong>Additional Files:</strong></label>
            {additionalFiles.map((v, i) => <span key={i} className='additional-files'>{v.data.name},</span>)}
          </div>
        </div>

        <div className='right-panel'>
          <div>
            <strong>Recipient Info</strong>
          </div>
          <div>name : {recipient.name}</div>
          <div>Address : {recipient.address}</div>
          <div>Phone : {recipient.phone}</div>
          <div className="recipient-button">
            {this.state.openModal ?
              <RecipientModal title={recipientTitle} toggleModal={this.toggleModal} recipient={recipient} updateRecipient={this.props.updateRecipient}/> :
              null
            }
            <input type="button" value={recipientTitle} onClick={this.toggleModal}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = dispatch => ({
  updateInvoiceAmount(amt){
    dispatch({type : 'UPDATE_INVOICE_AMOUNT', payload : amt})
  },
  updateInvoiceDate(dt){
    dispatch({type : 'UPDATE_INVOICE_DATE', payload : dt})
  },
  updateRecipient(recipient){
    dispatch({type : 'UPDATE_RECIPIENT', payload : recipient})
  }

})
const container = connect(mapStateToProps, mapDispatchToProps)(Recipient)


module.exports = container
