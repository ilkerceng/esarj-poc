import './App.css';
import './bootstrap';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { UserManager } from './screens/user-management/UserManager';

function App() {
  return (
    <div className="sm:p-4 sm:pt-0 pr-2 pl-2">
      <Header />
      <UserManager />
      <Footer />
    </div>
  );
}

export default App;
