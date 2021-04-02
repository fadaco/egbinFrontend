import '../styles/globals.css'
import {createStore, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import reducer from '../store/reducers'

const store = createStore(reducer, {}, applyMiddleware(Thunk))

function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
     <Component {...pageProps} />
     </Provider>)
}

export default MyApp
