import "./App.scss";
import { useEffect } from "react";
import Header from "./header/Header";
import Layout from "./components/Layout";
import { useParams } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router> */}
      <Router>
      <Layout/>
      </Router>
    </>
  );
}

export default App;
