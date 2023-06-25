'use client'
import { Provider } from "react-redux";
import Home from "./components/template/home";
import { store } from '@/app/utility/redux/store'

export default function App() {
  
  return (
    <>
        <Provider store={store} >
          <Home/>
        </Provider>
    </>

  )
}
