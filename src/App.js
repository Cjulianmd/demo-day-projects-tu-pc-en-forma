

import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { ToastContainer, Zoom } from 'react-toastify';
import Store from './Redux/Store/Store';
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
    <Provider store={Store}>
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom} />
    </Provider>
  </ChakraProvider>
  )

}

export default App;
