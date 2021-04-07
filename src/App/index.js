import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from '../store/configureStore';
import './app.styles.scss';
// import { hot } from 'react-hot-loader/root';

const App = ({ baseName, Routes }) => {

  const [toggle, set] = React.useState(false);
  const handleResze = () => {
    //  set((d) => !d);
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResze);
    return () => {
      window.removeEventListener('resize', handleResze);
    };
  }, [toggle]);
  return (
    <Store>
      <Router>
        <AppRouter baseName={baseName} Routes={Routes} />
      </Router>
    </Store>
  );
};
export default App
