import { Provider } from 'react-redux';
import store from '@/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Starwars app
      </div>
    </Provider>
  )
}

export default App;
