import { StyleProvider } from '@ant-design/cssinjs';
import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { queryClient } from './queryClient';
import { UserManager } from './screens/user-management/UserManager';

function App() {
  return (
    <StyleProvider hashPriority="high">
      <QueryClientProvider client={queryClient}>
        <UserManager />
      </QueryClientProvider>
    </StyleProvider>
  );
}

export default App;
