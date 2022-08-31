

import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './Routes/AppRoutes';
import { ToastContainer, Zoom } from 'react-toastify';
import Store from './Redux/Store/Store';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (

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

  )

}

export default App;