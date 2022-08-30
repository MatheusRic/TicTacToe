import { Route, Routes } from "react-router-dom";
import GamePage from "../pages";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
    </Routes>
  );
};

export default RoutesMain;
