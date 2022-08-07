import ReactDOM from 'react-dom/client';
import App from './App';

const rootEl = document.getElementById('root') as HTMLElement;

ReactDOM
  .createRoot(rootEl)
  .render(<App />);
