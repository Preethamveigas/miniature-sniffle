import React from 'react';
import AppRouter from '@/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './store/configureStore';

export default ({ baseName }) => {
  const [toggle, set] = React.useState(false);
  const handleResze = () => {
    console.log('resize');
    set((d) => !d);
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResze);
    return () => {
      window.removeEventListener('resize', handleResze);
    };
  }, [toggle]);
  return (
    <Store>
      <Router basename={`/${baseName}`}>
        <AppRouter baseName={baseName} />
      </Router>
    </Store>
  );
};
