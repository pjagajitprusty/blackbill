const initialState = {
  "invoice" : {},
  "invoiceAmount" : "",
  "paymentTarget" : new Date(),
  "additionalFiles" : [],
  "recipient" : {},
  "error" : {
    "show" : false,
    "logs" : []
  }
}

module.exports = initialState;
