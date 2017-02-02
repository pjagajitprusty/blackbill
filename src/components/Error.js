import React from 'react'
import { connect } from 'react-redux'

class Error extends React.Component {
  render(){
    let {logs, show} = this.props.error
    let errors = logs.map((v, i) => <div key={i}>{v}</div>)
    return (
      <div>
        {
          show && errors.length ?
          <div className='error-wrapper'>
            <div>{errors}</div>
            <div><input type="button" value="Hide" onClick={this.props.hideError}/></div>
          </div> :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error : Object.assign({}, state.error)
})

const mapDispatchToProps = dispatch => {
  return {
    hideError(){
      dispatch({type : 'HIDE_ERROR'})
    }
  }
}

const container = connect(mapStateToProps, mapDispatchToProps)(Error)


module.exports = container
