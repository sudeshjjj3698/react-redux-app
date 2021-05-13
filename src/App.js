import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import UserComponent from './components/UserComponent'
function App() {
  return (
    <Provider store={store}>
    <div className="container">
        <UserComponent/>
    </div>
    </Provider>
  );
}

export default App;
