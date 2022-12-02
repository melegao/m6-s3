import './App.css';
import { CustomerProvider } from './providers/customers';
import Ways from './routes/routes';

function App() {
  return (
    <>
      <CustomerProvider>
        <Ways />
      </CustomerProvider>
    </>
  );
}

export default App;
