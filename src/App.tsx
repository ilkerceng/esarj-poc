import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { UserManager } from './screens/user-management/UserManager';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserManager />
    </QueryClientProvider>
  );
}

export default App;
