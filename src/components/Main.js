import React from 'react'
import {connect} from 'react-redux'

import UploadInvoice from './UploadInvoice'
import DragFile from './DragFile'
import Recipient from './Recipient'


class Main extends React.Component{
  render(){
    let {invoice} = this.props
    return (
      <div className="wrapper">
        {
          !(invoice instanceof File) ?
            <UploadInvoice multiple={false} /> :
            <div>
              <Recipient />
              <DragFile />
            </div>
        }
        <div style={{textAlign: 'right'}}>
          <input type="button" value="Proceed" onClick={this.props.submitProcess} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ invoice : state.invoice})
const mapDispatchToProps = dispatch => ({
  submitProcess(){
    dispatch({type : 'SUBMIT_PROCESS'})
  }
})
const container = connect(mapStateToProps, mapDispatchToProps)(Main)

module.exports = container
