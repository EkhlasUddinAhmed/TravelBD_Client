// import './App.css';
import "./App2.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./Routes/Routers/Routers";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="app">
      <div className="overlay ">
        <RouterProvider router={routers} />
        <ToastContainer/>
      </div>
    </div>
  );
}

export default App;
