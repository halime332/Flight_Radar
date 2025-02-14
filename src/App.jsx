import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import List  from "./pages/List";
import Map from  "./pages/Map";
import Buttons from "./components/Buttons";


const App = () => {
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