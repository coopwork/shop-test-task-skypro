import './App.scss'
import AppRouter from "./components/AppRouter.jsx";
import Header from "./components/header/Header.jsx";
import AlertToast from "./components/AlertToast.jsx";

function App() {

  return (
        <AlertToast>
            <Header/>
            <AppRouter/>
        </AlertToast>
  )
}

export default App
