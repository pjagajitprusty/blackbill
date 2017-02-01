import React from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'

import AdditionalFile from './AdditionalFile'

class DragFile extends React.Component{
  constructor(){
    super()
    this.onDrop = this.onDrop.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.removeFile = this.removeFile.bind(this);
    this.addFile = this.addFile.bind(this)
    this.state = {
      files : []
    }
  }
  onDrop(files) {
    let temp = [...this.state.files]
    files.map(file => {
      temp.push({description : '', data : file})
    })
    this.setState({files : temp})
  }
  updateDescription(i, desc){
      let files = [...this.state.files];
      files[i]['description'] = desc;
      this.setState({files : files})
  }
  removeFile(i){
    let files = [...this.state.files];
    files.splice(i,1)
    this.setState({files : files})
  }
  addFile(i){
    let files = [...this.state.files];
    let temp = files.splice(i,1)[0]
    this.setState({files : files})
    this.props.addAdditionalFile(temp)
  }

  render() {
    let AdditionalFileList = this.state.files.map((file, i) =>
                            <AdditionalFile key={i} index={i} file={file}
                            updateDescription={this.updateDescription}
                            removeFile={this.removeFile}
                            addFile={this.addFile}
                          />)
    return (
      <div>
        {AdditionalFileList}
        <Dropzone className="drop-zone" onDrop={this.onDrop}>
          <div>Drag Additional files here...</div>
          <div>Tip: you can add multiple files.</div>
        </Dropzone>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => ({
  addAdditionalFile(file){
    dispatch({type : 'ADD_ADDITIONAL_FILE', payload : file})
  }
})
const container = connect(mapStateToProps, mapDispatchToProps)(DragFile)


module.exports = container
