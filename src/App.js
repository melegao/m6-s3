import './App.css';
import { CustomerProvider } from './providers/customers';
import Ways from './routes/routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CustomerProvider>
        <Ways />
        <ToastContainer />
      </CustomerProvider>
    </>
  );
}

export default App;
