import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import Loader from "./components/Loader.jsx";
import BasketProvider from "./state/BasketProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback={<Loader/>}>
          <BasketProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </BasketProvider>
      </Suspense>
  </React.StrictMode>,
)
