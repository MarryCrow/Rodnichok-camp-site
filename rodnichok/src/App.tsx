// import * as React from "react";
import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About-camp";
import LifePage from "./pages/Life-of-camp.tsx";
import GalleryPage from "./pages/Gallery.tsx";
import StuffPage from "./pages/Teaching-stuff.tsx";

import './App.css'
import DefaultLayout from "./layouts/DefaultLayout.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";

function App() {
  return (
      <>
          <Routes>
              <Route element={<HomeLayout />}>
                  <Route path="/" element={<HomePage />} />
              </Route>
              <Route element={<DefaultLayout />}>
                  <Route path="/About-camp" element={<AboutPage />} />
                  <Route path="/Life-of-camp" element={<LifePage />} />
                  <Route path="/Gallery" element={<GalleryPage />} />
                  <Route path="/Teaching-stuff" element={<StuffPage />} />
              </Route>
          </Routes>
      </>
  );
}

export default App
