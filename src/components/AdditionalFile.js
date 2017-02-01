import React from 'react'

class AdditionalFile extends React.Component {
  constructor(){
    super()
    this.updateDescription = this.updateDescription.bind(this)
    this.removeFile = this.removeFile.bind(this)
    this.addFile = this.addFile.bind(this)
  }
  updateDescription(){
    this.props.updateDescription(this.props.index, this.refs.description.value)
  }
  removeFile(){
    this.props.removeFile(this.props.index)
  }
  addFile(){
    this.props.addFile(this.props.index)
  }
  render(){
    var {file, index} = this.props
    return(
      <div className="additional-file-wrapper">
        <div style={{width : '30%'}}>
          <div>Additional File {index + 1}</div>
          <div>{file.data.name}</div>
        </div>
        <div>
          <div>Description</div>
          <div><input type="text" ref="description" value={file.description} onChange={this.updateDescription}/></div>
        </div>
        <div>
          <div><input type="button" value="Add" onClick={this.addFile}/></div>
          <div><input type="button" value="Remove" onClick={this.removeFile}/></div>
        </div>
      </div>
    )
  }
}

module.exports = AdditionalFile
