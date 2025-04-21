import React, { useEffect, useRef, Suspense } from "react";
import Homepage from "./aboutPages/Homepage";
import SecondPage from "./aboutPages/SecondPage";
import Service from "./aboutPages/Service";
import { useLocation } from "react-router";

// Lazy-loaded components
const ResponsiveHorizontalComponent = React.lazy(() =>
  import("../../components/about/HorizontalScroll")
);
const GetTheApp = React.lazy(() => import("./aboutPages/GetTheApp"));
const Work = React.lazy(() => import("./aboutPages/Work"));
const HorizontalScrollCarousel = React.lazy(() =>
  import("../../components/about/HorizontalScrollCarousel")
);
const StackCard = React.lazy(() => import("./aboutPages/StackCard"));
const Testimonials = React.lazy(() => import("./aboutPages/Testimonials"));
const Awards = React.lazy(() => import("./aboutPages/Awards"));
const JoinTheTeam2 = React.lazy(() => import("./aboutPages/JoinTheTeam2"));
const Questions = React.lazy(() => import("./aboutPages/Questions"));
const Knowledge = React.lazy(() => import("./aboutPages/Knowledge"));
const BottomCard = React.lazy(() => import("./aboutPages/BottomCard"));

const About = () => {
  const location = useLocation();
  const contactRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Homepage />
      <SecondPage />
      <Service />

      <Suspense fallback={<div>Loading...</div>}>
        <ResponsiveHorizontalComponent />
        <BottomCard />
        <GetTheApp />
        <Work />
        <HorizontalScrollCarousel />
        <StackCard />
        <Testimonials />
        <Awards />
        <JoinTheTeam2 />
        <Questions />
        <div ref={contactRef} id="contact">
          <Knowledge />
        </div>
      </Suspense>
    </div>
  );
};

export default About;
