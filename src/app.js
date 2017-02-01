import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css'
import './stylesheets/main.scss'

import reducer from './reducer'
import initialState from './initialState'


import Error from './components/Error'
import Main from './components/Main'


const store = createStore(reducer, initialState)



class Layout extends React.Component {
  render(){
    return (
      <div>
        <Error />
        <Main />
      </div>
    )
  }
}

ReactDOM.render( <Provider store={store}>
                  <Layout/>
                </Provider>, document.getElementById('app'))
