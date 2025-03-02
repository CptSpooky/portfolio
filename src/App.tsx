import Router from './router';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'mytheme');
  }, []);
  return <Router />;
}
export default App;
