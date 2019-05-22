import React from 'react'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
      <div className="App">
        <Provider store={store}>
          <Header/>
          <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={Detail}/>
          </BrowserRouter>
        </Provider>
      </div>
  )
}

export default App
