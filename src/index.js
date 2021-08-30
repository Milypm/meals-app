import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createTestStore from './store';
import Routes from './routes/Routes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={createTestStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
reportWebVitals();
