import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import store from './store';
import Routes from './routes/Routes';
import reportWebVitals from './reportWebVitals';
// import rootReducer from './reducers/index';
// import { initialState } from './actions/index';

// const store = createStore(rootReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
reportWebVitals();
