import React, { useEffect } from 'react';
import App from '@/demos/lite/App';

export const LiteDemo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <App />;
};