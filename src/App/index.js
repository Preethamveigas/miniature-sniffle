import React, { memo } from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from '../store/configureStore';
import './app.styles.scss';

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
    <AppProvider>
      <Frame baseName={baseName} Routes={Routes} />
    </AppProvider>
  );
};
export default App

const Frame = ({ baseName, Routes }) => {
  return <Router>
    <AppRouter baseName={baseName} Routes={Routes} />
  </Router>
}

