import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";

const About = React.lazy(() => import("./pages/about/About"));
const TermsAndConditions = React.lazy(() =>
  import("./pages/t&c/TermsAndConditions")
);
const Privacy = React.lazy(() => import("./pages/privacyPolicy/Privacy"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* No lazy loading here */}
          <Route path="/about" element={<About />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
