// import * as React from "react";
import { Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";

import PageLoader from "@/components/PageLoader.tsx";
import DefaultLayout from "./layouts/DefaultLayout.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About-camp"));
const LifePage = lazy(() => import("./pages/Life-of-camp"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const StuffPage = lazy(() => import("./pages/Teaching-staff.tsx"));

export default function App() {
  return (
      <>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
      </>
  );
}
