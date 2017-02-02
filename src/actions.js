import initialState from './initialState'

export function submitInvoice(prevState) {
  let state = Object.assign({}, prevState, {error : {show: true, logs : []}})
  let payload = {}
  for (var key in state) {
    if(key == 'invoice'){
      if(state[key] instanceof File){
        payload[key] = state[key]
      }
      else {
        state.error.logs.push('Invoice not valid.')
        return state;
      }
    }
    if(key == 'invoiceAmount'){
      if(state[key] > 0){
        payload[key] = state[key]
      }else {
        state.error.logs.push('Invoice amount is not valid.')
      }
    }
    if(key == 'additionalFiles'){
      payload[key] = state[key]
    }
    if(key == 'recipient'){
      if(Object.keys(state[key]).length === 0 && state[key].constructor === Object){
        state.error.logs.push('Recipient info is not provided.')
      }else {
        payload[key] = state[key]
      }
    }
  }

  if(state.error.logs.length){
    return state
  }else {
    alert('Invoice submitted successfully.')
    return initialState
  }

}
