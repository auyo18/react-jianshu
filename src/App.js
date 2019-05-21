import React from 'react'
import store from './store'
import {Provider} from 'react-redux'
import Header from './common/header'

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <Header/>
        </Provider>
      </div>
  )
}

export default App
