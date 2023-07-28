import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import DadosScreen from "./pages/DadosScreen";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomeScreen  />}
        ></Route>
        <Route path="/dados" element={<DadosScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
