import { StyleProvider } from '@ant-design/cssinjs';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import App from './App';
import { useEffect } from 'react';
import { callPrefetches } from './bootstrap';

function Root() {
  useEffect(() => {
    callPrefetches();
    return () => {};
  }, []);

  return (
    <StyleProvider hashPriority="high">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StyleProvider>
  );
}

export default Root;
