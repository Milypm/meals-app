import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
reportWebVitals();
