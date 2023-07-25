import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import PokemonScreen from "./pages/PokemonScreen";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/pokemon/:id" element={<PokemonScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
