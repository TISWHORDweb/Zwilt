import { createStore } from 'redux';
import reducer from './Reducer'; // Import your reducer

const store = createStore(reducer);

export default store;