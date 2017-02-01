import React from 'react'
import {connect} from 'react-redux'
import Dropzone from 'react-dropzone'

class UploadInvoice extends React.Component {
  render(){
    return (
      <div>
        <Dropzone className="drop-zone" multiple={this.props.multiple} onDrop={this.props.onInvoiceDrop}>
          <div>Drag your Invoice here or Click to add Invoice...</div>
        </Dropzone>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => ({
  onInvoiceDrop(files){
    dispatch({type : 'ADD_INVOICE', payload : files[0]})
  }
})
const container = connect(mapStateToProps, mapDispatchToProps)(UploadInvoice)
module.exports = container;
