// import * as React from "react";
import { Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";

import PageLoader from "@/components/PageLoader.tsx";
import DefaultLayout from "./layouts/DefaultLayout.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About-camp"));
const LifePage = lazy(() => import("./pages/Life-of-camp"));
const GalleryPage = lazy(() => import("./pages/Gallery"));
const StaffPage = lazy(() => import("./pages/Teaching-staff.tsx"));

export default function App() {
  return (
      <>
          <ScrollToTop />

          <Suspense fallback={<PageLoader />}>
              <Routes>
                  <Route element={<DefaultLayout />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/About-camp" element={<AboutPage />} />
                      <Route path="/Life-of-camp" element={<LifePage />} />
                      <Route path="/Gallery" element={<GalleryPage />} />
                      <Route path="/Gallery/:year" element={<GalleryPage />} />
                      <Route path="/Gallery/:year/:albumId" element={<GalleryPage />} />
                      <Route path="/Teaching-stuff" element={<StaffPage />} />
                  </Route>
              </Routes>
          </Suspense>
      </>
  );
}
