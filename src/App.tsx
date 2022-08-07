import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '@/store';
import { Home, Char } from '@/routes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="character">
            <Route path=":id" element={<Char />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
