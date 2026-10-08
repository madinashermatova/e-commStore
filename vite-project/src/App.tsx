import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { useState } from "react";
import Layout from "./components/layout/Layout";

function App() {
  const [] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App; 