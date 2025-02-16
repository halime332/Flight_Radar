import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import List  from "./pages/List";
import Map from  "./pages/Map";
import Buttons from "./components/Buttons";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getFlights} from "./redux/actions";

const App = () => {
  const dispatch= useDispatch();
 //tr sınırları içindeki uçuşları alıcaz ve store a aktarıcaz
  useEffect(()=> {
    dispatch(getFlights());
  },[]);
return ( 
  <BrowserRouter>
    <Header/>
    <Buttons/>
    <Routes>
      <Route path="/"  element={<Map/>}/>
      <Route path="/list" element={<List/>}/>
    </Routes>
  </BrowserRouter>
  );
  };

export default App;