import { submitInvoice } from './actions'

const reducer = (prevState, action) => {
  let {payload} = action
  switch (action.type) {
    case 'HIDE_ERROR':
      let newState = Object.assign({}, prevState)
      newState.error.show = false
      return newState

    case 'ADD_INVOICE':
      return Object.assign({}, prevState, {invoice : payload})

    case 'UPDATE_INVOICE_AMOUNT':
      return Object.assign({}, prevState, {invoiceAmount : payload})

    case 'UPDATE_INVOICE_DATE':
      return Object.assign({}, prevState, {paymentTarget : payload})

    case 'UPDATE_RECIPIENT':
      return Object.assign({}, prevState, {recipient : payload})

    case 'ADD_ADDITIONAL_FILE':
      return Object.assign({}, prevState, {additionalFiles : [...prevState.additionalFiles, payload]})
    case 'SUBMIT_PROCESS':
      return submitInvoice(prevState)

    default:
      return prevState


  }
  return prevState
}


module.exports = reducer;
